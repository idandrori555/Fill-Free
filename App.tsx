import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Platform } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "default"} // Adjust for your app's theme ('light-content' or 'dark-content')
        backgroundColor="transparent" // You can set a color, mainly for Android
        translucent={Platform.OS === "android" ? true : false} // If true, SafeAreaView handles padding. If false on Android, status bar is opaque.
      />
      <WebView
        source={require("./public/high_score.html")}
        style={styles.webView} // Important for filling the space
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // You might want to set a backgroundColor here if your WebView's HTML doesn't have one
    // backgroundColor: '#FFFFFF',
  },
  webView: {
    flex: 1, // This ensures the WebView expands to fill the SafeAreaView
  },
});
