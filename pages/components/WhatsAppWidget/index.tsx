import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const WhatsAppWidgetComponent: React.FC = () => {
  return (
    <WhatsAppWidget
      phoneNo="+92 344 9297928"
      position="left"
      iconSize={40}
      iconColor="white"
      iconBgColor="green"
      headerIcon="/images/whatsapp/whatsapp-logo-4456.svg"
      headerIconColor="green"
      headerTxtColor="black"
      headerBgColor="green"
      headerTitle="Luqman Khan"
      headerCaption="Online"
      bodyBgColor="#bbb"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="#999"
      btnBgColor="yellow"
      btnTxtColor="black"
    />
  );
};

export default WhatsAppWidgetComponent;
