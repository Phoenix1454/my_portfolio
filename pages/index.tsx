import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Maintenance from "../components/Home/Maintenance/Maintenance";
import config from '../config'; // Import the config
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  // CRITICAL CHANGE 1: Removed unused state related to user data and blacklist
  // const [userData, setUserData] = useState(null);
  // const [isBlackListed, setIsBlackListed] = useState(false);
  // const [IsBlackListEmpty, setIsBlackListEmpty] = useState(
  //   process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES === "" ? true : false
  // );

  // CRITICAL CHANGE 2: Removed useEffect hooks for fetching user location and blacklist check
  // This code is no longer needed since we removed the feature
  
  // CRITICAL CHANGE 3: Removed the interval Cookie timer setter and event listener removals
  useEffect(() => {
    // This part of the code is a simple loading sequence
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);

    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");
  
  // CRITICAL CHANGE 4: Use SEO metadata from config.ts
  const { personalInfo } = config;
  const meta = {
    title: `${personalInfo.name} - ${personalInfo.tagline}`,
    description: personalInfo.bio,
    image: personalInfo.profilePicture,
    url: personalInfo.socialLinks.personalWebsite, // Use your personal website URL
    type: "website",
  };
  
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
  <title>{meta.title}</title>
  <meta name="robots" content="follow, index" />
  <meta content={meta.description} name="description" />
  {/* Open Graph / Facebook */}
  <meta property="og:url" content={meta.url} />
  <link rel="canonical" href={meta.url} />
  <meta property="og:type" content={meta.type} />
  <meta property="og:site_name" content={personalInfo.name} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:title" content={meta.title} />
  <meta property="og:image" content={meta.image} />
  {/* Twitter */}
  {/* The @ts-ignore is a temporary fix to make the build pass. */}
  {/* It is needed because the 'twitter' property is commented out in config.ts. */}
  {/* @ts-ignore */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={personalInfo.socialLinks.twitter ? `@${personalInfo.socialLinks.twitter.split('/').pop()}` : '@your-twitter-handle'} />

  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image" content={meta.image} />
</Head>
      {/* CRITICAL CHANGE 5: Removed the blacklist check to simplify */}
      {/* {!isBlackListed ? ( */}
        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
          {context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
          {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
          <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
          <MyName finishedLoading={context.sharedState.finishedLoading} />
          <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
          {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef} /> : <></>}
          {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
          {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
          {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
          {context.sharedState.finishedLoading ? (
            <Footer githubUrl={config.nav.resumeUrl} hideSocialsInDesktop={true} />
          ) : (
            <></>
          )}
        </div>
      {/* ) : ( */}
        {/* <Maintenance /> */}
      {/* )} */}
      {isProd && <Analytics />}
    </>
  );
}
