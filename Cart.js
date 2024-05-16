import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Cart = () => {

    const generatePayFastUrl = () => {
        const baseUrl = "https://sandbox.payfast.co.za/eng/process";
        const merchantId = 10033572;
        const merchantKey = "xuv21nc6na1a4";
        const amount = "100.00";
        const item_name = "Example Item";
      
        // Additional transaction details and the generation of the signature would be here
      
        const returnUrl = "https://yourwebsite.com/return";
        const cancelUrl = "https://yourwebsite.com/cancel";
        const notifyUrl = "https://yourwebsite.com/notify";
      
        // Construct the full URL with all parameters
        const fullUrl = `${baseUrl}?merchant_id=${merchantId}&merchant_key=${merchantKey}&amount=${amount}&item_name=${encodeURIComponent(item_name)}`;
      
        return fullUrl;
      };

  return (
    <View>
      <WebView source={{ uri: generatePayFastUrl() }} />
    </View>
  )
}

export default Cart