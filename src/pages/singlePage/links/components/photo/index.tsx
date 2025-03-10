import { Slide } from "transitions-kit";
import { useEffect } from "react";
import { AsyncImage } from "loadable-image";
import { useLoadDashboardData } from "../../../../../store/dummy";
import UserPhoto from "../../assests/UserPhoto.jpg";
const Photo = () => {
  const loadDashboardData = useLoadDashboardData();
  useEffect(() => {
    loadDashboardData();
  }, []);

  return (
    <AsyncImage
      src={UserPhoto}
      Transition={Slide}
      style={{
        width: "3rem",
        height: "3rem",
        padding: "3.5rem",
        marginLeft: "2rem",
        marginTop: "6rem",
        marginBottom: "3rem",
        borderRadius: "50%",
      }}
      loader={<div style={{ background: "#888" }} />}
    />
  );
};

export default Photo;
