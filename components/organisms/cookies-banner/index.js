import { useState, useEffect, useCallback } from "react";

import { getCookie, setCookie } from "../../../helpers/cookies";

import config from "../../../config";

import events from "../../../events";

import Markup from "./markup";

export default function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = getCookie(config.cookieConsentKey);

    const showBanner =
      cookieConsent !== config.cookiesNotAllowedValue &&
      cookieConsent !== config.cookiesAllowedValue;

    setShowBanner(showBanner);
  }, [setShowBanner]);

  const handleAction = useCallback(
    (consent) => {
      const value = consent
        ? config.cookiesAllowedValue
        : config.cookiesNotAllowedValue;
      const exp = consent ? 365 : 30;
      setCookie(config.cookieConsentKey, value, exp);
      setShowBanner(false);
      window.document.dispatchEvent(events.allowCookies);
    },
    [setShowBanner]
  );

  return <>{showBanner && <Markup onClick={handleAction} />}</>;
}
