// components/WhatsAppWidget.tsx

import React, { useEffect } from "react";

const WhatsAppWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.clicktochat.io/widget/your-widget-id.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default WhatsAppWidget;
