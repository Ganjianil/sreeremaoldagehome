import React from "react";
import Header  from "./Header"
import OldAgeHomeHero from "./OldAgeHomeHero";
import Service from "./OldAgeHomeServices"
import AutoScrollGallery from "./AutoScrollGallery";
import ContactInfo from "./ContactInfo";
import AboutUsPage from "./AboutUsPage"
const App = () => {
  return (
    <>
      <Header />
      <OldAgeHomeHero />
      <Service />
      <AutoScrollGallery />
      <ContactInfo />
      <AboutUsPage />
      
    </>
  );
}
export default App;
