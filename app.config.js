export default {
  expo: {
    name: "fill-free",
    slug: "fill-free",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.idandrori.fillfree",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.idandrori.fillfree",
      permissions: [
        "CAMERA",
        "RECORD_AUDIO",
        "WRITE_EXTERNAL_STORAGE",
        "INTERNET",
      ],
      config: {
        allowCleartextTraffic: true,
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "6880cbb2-f66f-4f9a-aaab-e30762dd8cb5",
      },
    },
  },
};
