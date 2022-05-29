import { useState, useEffect, useCallback } from "react";

import { getCookie, setCookie } from "../../../helpers/cookies";

import config from "../../../config";

import events from "../../../events";

import Markup from "./markup";

const { cookieConsentKey, cookiesAllowedValue, cookiesNotAllowedValue } =
  config;

export default function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = getCookie(cookieConsentKey);

    const showBanner =
      cookieConsent !== cookiesNotAllowedValue &&
      cookieConsent !== cookiesAllowedValue;

    setShowBanner(showBanner);
  }, [setShowBanner]);

  const handleAction = useCallback(
    (consent) => {
      const value = consent ? cookiesAllowedValue : cookiesNotAllowedValue;
      const exp = consent ? 365 : 30;
      setCookie(cookieConsentKey, value, exp);
      setShowBanner(false);
      window.document.dispatchEvent(events.allowCookies);
    },
    [setShowBanner]
  );

  return <>{showBanner && <Markup onClick={handleAction} />}</>;
}
