// import React from "react";

export default function FawryPayWithCard(transaction_data) {
  const PaymentData = {
    merchantCode: transaction_data.merchantCode,
    customerName: transaction_data.customerName,
    customerMobile: transaction_data.customerMobile,
    customerEmail: transaction_data.customerEmail,
    customerProfileId: transaction_data.customerProfileId,
    cardNumber: transaction_data.cardNumber,
    cardExpiryYear: transaction_data.cardExpiryYear,
    cardExpiryMonth: transaction_data.cardExpiryMonth,
    cvv: transaction_data.cvv,
    merchantRefNum: transaction_data.merchantRefNum,
    amount: transaction_data.amount,
    currencyCode: transaction_data.currencyCode,
    language: transaction_data.language, // "en-gb" or "ar-eg"
    chargeItems: [
      {
        itemId: transaction_data.chargeItems.itemId,
        description: transaction_data.chargeItems.description,
        price: transaction_data.chargeItems.price,
        quantity: transaction_data.chargeItems.quantity,
      },
    ],
    signature: transaction_data.signature,
    paymentMethod: "CARD",
    description: "transaction description",
  };
  // Use fetch to send the Payment Data to FawryPay Pay with Card API.
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
}
