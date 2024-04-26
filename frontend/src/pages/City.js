import React from "react";
import CardItem from "../components/CardItem";
import cityData from "../components/cityData.json";

const City = () => {
<<<<<<< Updated upstream
  console.log(cityData);
=======
  // console.log("HEllo");
  // useEffect(() => {
  //   //Fetching data from db
  // }, []);
>>>>>>> Stashed changes
  return (
    <div className="bg-gray-900">
      <h1 className="text-6xl text-center my-5 text-red-950">Cities</h1>
        {cityData.map((value) => (
<<<<<<< Updated upstream
          <CardItem src={value.src} text={value.text} path={value.path} label={value.label} />
=======
          <CardItem key={value.text} src={value.src} text={value.text} path={value.path} />
>>>>>>> Stashed changes
        ))}
    </ div>
  );

};

export default City;
