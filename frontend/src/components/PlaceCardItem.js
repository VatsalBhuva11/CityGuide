import React from "react";

const PlaceCardItem = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-10 mb-10">
      <img
        className="w-full"
        src={`images/${props.src}`}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.label}</div>
        <p className="text-gray-700 text-base">
         {props.text}
        </p>
      </div>
    </div>
  );
};

export default PlaceCardItem;
