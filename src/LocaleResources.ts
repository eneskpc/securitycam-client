export enum Language {
  TR = "tr",
  EN = "en",
}

export interface LocaleResourceModel {
  TURKISH: string;
  ENGLISH: string;
  CAMERA: string;
  SAVED_VISUALS: string;
  CONNECTING: string;
  OPEN: string;
  CLOSING: string;
  CLOSED: string;
  UNINSTANTIATED: string;
  WEBSOCKET_IS_CURRENTLY: string;
}

export interface Languages {
  [Language.TR]: LocaleResourceModel;
  [Language.EN]: LocaleResourceModel;
}

const LocaleResources: Languages = {
  [Language.TR]: {
    TURKISH: "Türkçe",
    ENGLISH: "İngilizce",
    CAMERA: "KAMERA",
    SAVED_VISUALS: "KAYDEDİLMİŞ GÖRÜNTÜLER",
    CLOSED: "KAPALI",
    CLOSING: "KAPANIYOR",
    CONNECTING: "BAĞLANIYOR",
    OPEN: "AÇIK",
    UNINSTANTIATED: "AÇILMAMIŞ",
    WEBSOCKET_IS_CURRENTLY: "Kamera şuanda {{connectionStatus}}",
  },
  [Language.EN]: {
    TURKISH: "Turkish",
    ENGLISH: "English",
    CAMERA: "CAMERA",
    SAVED_VISUALS: "SAVED VISUALS",
    CLOSED: "CLOSED",
    CLOSING: "CLOSING",
    CONNECTING: "CONNECTING",
    OPEN: "OPEN",
    UNINSTANTIATED: "UNINSTANTIATED",
    WEBSOCKET_IS_CURRENTLY: "The Camera is currently {{connectionStatus}}",
  },
};

export default LocaleResources;
