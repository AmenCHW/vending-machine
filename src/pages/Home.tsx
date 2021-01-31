import React, {useEffect, useState} from "react";
import { HomeContent } from "components/HomeContent/HomeContent";
import { CenteredSection } from "../components/CenteredSection/CenteredSection";
import Loader from "react-loader";

export const Home = () => {
  const [loadedStatus, setLoadedStatus] = useState(false);

  const loaderOptions = {
    lines: 12,
    length: 10,
    radius: 15,
    speed: 1.5,
    color: "#0F9D58",
    fps: 30,
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadedStatus(true);
    }, 1500)
  }, [])

  return (
    <Loader loaded={loadedStatus} {...loaderOptions}>
      <CenteredSection>
        <HomeContent />
      </CenteredSection>
    </Loader>
  )
};
