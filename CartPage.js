import { View, Text } from 'react-native'
import React from 'react'
import PayFast from 'react-native-payfast-plugin';

const CartPage = () => {
  return (
    <PayFast
            data={{
                merchantDetails: {
                    merchant_id: 10033572,
                    merchant_key: "xuv21nc6na1a4",
                    // notify_url: "https://webhook.site/f30e4b32-15b5-44e6-ae0b-c75486b8797d",
                },
                customerDetails: {
                    name_first: "First Name",
                    name_last: "Last Name",
                    email_address: "firstname@gmail.com",
                    // cell_number: "08854885488",
                },
                transactionDetails: {
                    m_payment_id: "1234",
                    amount: "10.00",
                    item_name: "Item Name",
                    item_description: "Item Description",
                },
                transactionOptions: {
                    email_confirmation: 0,
                    confirmation_address: "firstname@gmail.com",
                },

            }}

            sandbox={true}
            passphrase="Secure-123_Payfast"

            onCancel={(data) => {
                console.log("Payment cancelled: ", data.transaction_id);
            }}

            onMessage={(message) => {
                console.log(message);
            }}

            onSuccess={({ data, transaction_id }) => {
                console.log(transaction_id);
            }}

            onClose={() => {
                console.log("Payment closed");
            }}

            paymentMethod="cc" // Set the payment method here
        />
  )
}

export default CartPage