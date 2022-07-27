import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CameraPage from "./Camera";
import FlagProvider from "./FlagProvider";
import { Language } from "./LocaleResources";
import { change } from "./reducers/locale";
import SavedVisualsPage from "./SavedVisuals";
import { RootState } from "./store";

export enum Pages {
  CAMERA,
  SAVED_VISUALS,
}

const App = () => {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.CAMERA);
  const [localeMenu, setLocaleMenu] = useState<Boolean>(false);

  const dispatch = useDispatch();

  const locale = useSelector((s: RootState) => s.locale.languageResources);
  const localeCode = useSelector((s: RootState) => s.locale.languageCode);
  const cameraStateText = useSelector(
    (s: RootState) => s.cameraState.stateText
  );

  const decideThePage = (page: Pages) => {
    switch (page) {
      case Pages.CAMERA:
        return <CameraPage />;
      case Pages.SAVED_VISUALS:
        return <SavedVisualsPage />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          maxWidth: 900,
        }}
      >
        <div className="tabs">
          <button
            className={currentPage === Pages.CAMERA ? "active" : ""}
            onClick={() => setCurrentPage(Pages.CAMERA)}
          >
            {locale.CAMERA}
          </button>
          <button
            className={currentPage === Pages.SAVED_VISUALS ? "active" : ""}
            onClick={() => setCurrentPage(Pages.SAVED_VISUALS)}
          >
            {locale.SAVED_VISUALS}
          </button>
        </div>
        {currentPage === Pages.CAMERA && (
          <div className="camera-status">{cameraStateText}</div>
        )}
        <div className="locale">
          <button onClick={() => setLocaleMenu(!localeMenu)}>
            <FlagProvider code={localeCode} />
          </button>
          {localeMenu && (
            <div className="all-languages">
              {Object.values(Language).map((l, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setLocaleMenu(!localeMenu);
                    dispatch(change(l));
                  }}
                >
                  <FlagProvider code={l} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="tab-contents">
        <div className="content">{decideThePage(currentPage)}</div>
      </div>
      <div style={{ paddingTop: "1.5rem" }}>
        <a href="https://www.freepik.com/vectors/glitch-background">
          Glitch background vector created by vector_corp - www.freepik.com
        </a>
      </div>
    </div>
  );
};

export default App;
