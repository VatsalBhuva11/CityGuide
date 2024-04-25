import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import cityData from "../components/cityData.json";

const City = () => {
  console.log();
  useEffect(() => {
    //Fetching data from db
  }, []);
  return (
    <div className="bg-gray-900">
      <h1 className="text-6xl text-center my-5 text-red-950">Cities</h1>
      <div className="flex flex-row flex-wrap basis-1">
        {cityData.map((value) => (
          <CardItem src={value.src} text={value.text} path={value.path} />
        ))}
      </div>
    </ div>
  );
};

export default City;
