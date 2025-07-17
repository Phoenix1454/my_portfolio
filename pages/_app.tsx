import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AppContext from "../components/AppContextFolder/AppContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Removed the Google Analytics setup and the related states for the pages you are removing.
// You can re-add it from your original code if you decide to use Google Analytics.

// Your Google Analytics Tracking ID (from your .env.local file)
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

// This declares the gtag function globally for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Ensure useRouter is imported at the top
  // Simplified the sharedState to remove states related to deleted projects
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    finishedLoading: true,
  });

  useEffect(() => {
    // Only run if GA_TRACKING_ID is set (from your .env.local file)
    if (!GA_TRACKING_ID) return;

    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: any[]) { // Use ...args: any[] for better typing
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });

    // Track page views on route changes (for Next.js)
    const handleRouteChange = (url: string) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]); // Dependency array includes router.events

  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      {/* Vercel Analytics are optional, but useful if you deploy with Vercel */}
      <SpeedInsights />
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
}

export default MyApp;