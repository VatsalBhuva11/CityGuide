import React from "react";
import PlaceCardItem from "../components/PlaceCardItem";
import dubai from "../components/dubai.json";
import abd from "../components/abuDhabi.json";
import { useSearchParams } from "react-router-dom";

const Places = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city");
  return (
    <>
      <h1 className="text-6xl text-center text-red-950 my-5">Places</h1>
      <div class="flex px-3 py-3 flex-wrap">
        {(city == "abd" ? abd : dubai).map((value) => (
          <PlaceCardItem src={value.src} text={value.text} label={value.label} />
        ))}
      </div>
    </>
  );
};

export default Places;
