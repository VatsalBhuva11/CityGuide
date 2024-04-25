import React from "react";
import CardItem from "../components/CardItem";
import placeData from "../components/placeData.json";

const Places = () => {
  return (
    <div className="bg-gray-900">
      <h1 className="text-6xl text-center text-red-950 my-5">Places</h1>
      <div className="flex flex-row flex-wrap basis-1">
        {placeData.map((value) => (
          <CardItem src={value.src} text={value.text} />
        ))}
      </div>
    </ div>
  );
};

export default Places;
