import React from "react";
import CardItem from "../components/CardItem";
import cityData from "../components/cityData.json";

const City = () => {
  console.log(cityData);
  return (
    <div className="bg-gray-900">
      <h1 className="text-6xl text-center my-5 text-red-950">Cities</h1>
        {cityData.map((value) => (
          <CardItem src={value.src} text={value.text} path={value.path} label={value.label} />
        ))}
    </ div>
  );

};

export default City;
