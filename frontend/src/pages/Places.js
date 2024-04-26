import React from "react";
import PlaceCardItem from "../components/PlaceCardItem";
import dubai from "../components/dubai.json";
import abd from "../components/abuDhabi.json";
import { useSearchParams } from "react-router-dom";

const Places = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const city = searchParams.get("city");
    return (
        <div className="bg-gray-900 h-screen w-screen">
            <h1 className="text-6xl text-center pt-4 text-white">Places</h1>
            <div class="flex px-3 py-3 flex-wrap gap-4 justify-center items-start mt-16">
                {(city == "abd" ? abd : dubai).map((value) => (
                    <PlaceCardItem
                        src={value.src}
                        text={value.text}
                        label={value.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default Places;
