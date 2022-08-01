import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReadyState } from "react-use-websocket";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import BeforeBroadcast from "../assets/before-broadcast.jpg";
import config from "../configuration";
import { change } from "../reducers/camera-state";
import { RootState } from "../store";

type Props = {};

const CameraPage = (props: Props) => {
  const locale = useSelector((s: RootState) => s.locale.languageResources);
  const dispatch = useDispatch();
  const [lastImage, setLastImage] = useState<string>(BeforeBroadcast);
  const { lastMessage, readyState } = useWebSocket(config.webServerUrl, {
    shouldReconnect: (event) => true,
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: locale.CONNECTING,
    [ReadyState.OPEN]: locale.OPEN,
    [ReadyState.CLOSING]: locale.CLOSING,
    [ReadyState.CLOSED]: locale.CLOSED,
    [ReadyState.UNINSTANTIATED]: locale.UNINSTANTIATED,
  }[readyState];

  useEffect(() => {
    if (lastMessage !== null) {
      var resp = JSON.parse(lastMessage.data);
      setLastImage(resp.message);
    }
  }, [lastMessage, setLastImage]);

  useEffect(() => {
    dispatch(
      change(
        locale.WEBSOCKET_IS_CURRENTLY.replace(
          "{{connectionStatus}}",
          connectionStatus
        )
      )
    );
  }, [connectionStatus]);

  return <img src={`data:image/jpeg;base64,${lastImage}`} alt={locale.CAMERA} width={"100%"} />;
};

export default CameraPage;
