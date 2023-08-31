import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function Home() {
  const [iframeData, setIframeData] = useState(null);
  const [lkComponents, setLkComponents] = useState(null);

  useEffect(() => {
    const receiveMessage = (event) => {
      const receivedData = event.data;

      if (isValidData(receivedData)) {
        console.log("Received data from parent:", receivedData);

        const sanitizedData = {
          featureName: DOMPurify.sanitize(receivedData.featureName),
          languageCode: DOMPurify.sanitize(receivedData.languageCode),
        };

        console.log("Sanitized data from parent:", sanitizedData);

        setIframeData(sanitizedData);
      } else {
        console.error("Received invalid data from parent:", receivedData);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  useEffect(() => {
    if (!!iframeData) {
      setLkComponents(<lk-hoc selected-component={iframeData?.featureName} language-code={iframeData?.languageCode}></lk-hoc>);
    }
  }, [iframeData]);

  const isValidData = (data) => {
    return data && typeof data.languageCode === "string" && typeof data.featureName === "string";
  };

  return lkComponents;
}
