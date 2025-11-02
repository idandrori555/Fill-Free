import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
        backgroundColor="transparent"
        translucent={Platform.OS === "android" ? true : false}
      />
      <WebView
        originWhitelist={["*"]}
        source={require("./assets/index.html")}
        style={styles.webView}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
