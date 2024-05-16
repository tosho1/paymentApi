import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import Cart from "./Cart";
import CartPage from "./CartPage";
// import PayFast from 'react-native-payfast-checkout'

export default function App() {
  // const testUrl = "https://www.google.com";
  //   const [showPayfast, setShowPayfast] = useState(true)

  //   const transactionDetails = {
  //     itemName:'iPhone',
  //     amount: 1500.25
  // }

  return (
    // <View style={{ flex: 1 }}>
    //     <WebView
    //       source={{ uri: testUrl }}
    //  HttpError={(syntheticEvent) => {
    //     const { nativeEvent } = syntheticEvent;
    //     console.error('HTTP error status code: ', nativeEvent.statusCode);
    //   }} onError={(syntheticEvent) => {
    //     const { nativeEvent } = syntheticEvent;
    //     console.error('WebView error: ', nativeEvent);
    //   }}

    //   />
    // </View>
    // <View style={styles.container}>
    //   <PayFast
    //     merchantId={10033572}
    //     merchantKey={"xuv21nc6na1a4"}
    //     // passPhrase={process.env.PAYFAST_SIGNATURE_PHRASE}
    //     sandbox
    //     isVisible={showPayfast}
    //     onClose={() => setShowPayfast(false)}
    //     transactionDetails={transactionDetails}
    //   />

    //   <Text>Hello World</Text>
    // </View>
    // <Cart />

  
        <CartPage />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
