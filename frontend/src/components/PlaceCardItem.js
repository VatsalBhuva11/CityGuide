import React from "react";

const PlaceCardItem = (props) => {
    return (
        <div className="text-white flex justify-center items-start max-w-sm rounded overflow-hidden shadow-lg mb-10">
            <div className="flex justify-center flex-col items-center">
                <img
                    className="w-full h-[300px]"
                    src={`images/${props.src}`}
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.label}</div>
                    <p className="text-gray-400 text-base">{props.text}</p>
                </div>
            </div>
        </div>
    );
};

export default PlaceCardItem;
