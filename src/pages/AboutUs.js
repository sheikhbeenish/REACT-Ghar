import React from "react";
import PageHeading from "../common/PageHeading";
import Arrived from "../components/Arrived";

const AboutUs = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"About Us"} />

      <div className="w-10/12 m-auto">
        <div className="my-8 text-3xl font-bold">About Us</div>

        <Arrived />
      </div>
    </div>
  );
};

export default AboutUs;
