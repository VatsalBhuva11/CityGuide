import React from "react";
import CardItem from "../components/CardItem";
import cityData from "../components/cityData.json";

const City = () => {
    console.log(cityData);
    return (
        <div className="bg-gray-900 h-screen w-screen">
            <h1 className="text-6xl pt-4 flex justify-center items-center text-center text-white">
                Cities
            </h1>
            <div className="flex gap-4 justify-center items-center w-screen">
                {cityData.map((value) => (
                    <CardItem
                        src={value.src}
                        text={value.text}
                        path={value.path}
                        label={value.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default City;
