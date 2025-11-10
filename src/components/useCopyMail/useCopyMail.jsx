import { useState } from "react";

export function useCopyMail() {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const copyMail = (email, event) => {
    if (event) event.preventDefault();

    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    });
  };

  const CopyNotification = () =>
    copiedEmail ? (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#E59E37",
          color: "#f3f3f2",
          fontFamily: "Archivo",
          padding: "8px 12px",
          borderRadius: "6px",
          fontSize: "14px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          transition: "opacity 0.3s",
          zIndex: 9999,
        }}
      >
        {copiedEmail} copied!
      </div>
    ) : null;

  return { copyMail, CopyNotification };
}
