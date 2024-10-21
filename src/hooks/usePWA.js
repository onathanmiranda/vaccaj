import { useState, useEffect, useCallback } from 'react';

function usePWA() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // Check if the PWA is running in installed mode (standalone)
  useEffect(() => {
    const checkStandaloneMode = () => {
      // iOS Safari
      if (window.navigator.standalone) {
        setIsStandalone(true);
        return;
      }
      // Chrome/Android/Desktop
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsStandalone(true);
        return;
      }
      setIsStandalone(false);
    };

    checkStandaloneMode();

    // Listen for the app being installed
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null); // Reset prompt after install
    });

    return () => {
      window.removeEventListener('appinstalled', () => {
        setIsInstalled(true);
      });
    };
  }, []);

  // Handle the 'beforeinstallprompt' event (triggered when PWA can be installed)
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e); // Save the event for later
      setIsInstalled(false); // PWA is not yet installed
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Function to prompt installation of the PWA
  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('PWA installation accepted');
    } else {
      console.log('PWA installation dismissed');
    }

    setDeferredPrompt(null); // Reset deferred prompt after interaction
  }, [deferredPrompt]);

  // Function to simulate "uninstall" (reset dismiss logic, this is mainly for UI purposes)
  const handleUninstall = useCallback(() => {
    setDeferredPrompt(null);
    setIsInstalled(false); // You can't programmatically uninstall a PWA, but reset the state
  }, []);

  return {
    isInstalled,
    isStandalone,
    deferredPrompt,
    handleInstall,
    handleUninstall,
  };
}

export default usePWA;