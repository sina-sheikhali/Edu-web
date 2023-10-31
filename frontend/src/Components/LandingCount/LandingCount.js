import React, { useEffect, useState } from "react";

export default function LandingCount({ counter }) {
  const [LandingCounter, setLandingCounter] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setLandingCounter((prevState) => prevState + 1);
      console.log("sss");
    }, 1);

    if (LandingCounter === counter) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [LandingCounter]);
  return <span class="landing-status__count">{LandingCounter}</span>;
}
