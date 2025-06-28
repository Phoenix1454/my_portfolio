import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AppContext from "../components/AppContextFolder/AppContext";
import { useState } from "react";

// Removed the Google Analytics setup and the related states for the pages you are removing.
// You can re-add it from your original code if you decide to use Google Analytics.

function MyApp({ Component, pageProps }) {
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
    finishedLoading: false,
  });

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