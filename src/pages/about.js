import { useRouter } from "next/router";
import React from "react";

const About = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back("./main");
  };
  return (
    <div>
      <h1>About Page</h1>
      <div className="buttons">
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default About;
