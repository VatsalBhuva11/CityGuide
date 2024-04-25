import { useState } from "react";

const cities = ["Dubai", "Abu Dhabi"];
const places = {
    Dubai: ["Burj Khalifa", "Dubai Mall", "Global Village", "Palm Jumeirah"],
    "Abu Dhabi": ["Ferrari World", "Yas Waterworld", "Marina Mall"],
};

const Itenary = () => {
    const [itenary, setItenary] = useState([]);
    const [item, setItem] = useState({});
    const [citySelected, setCitySelected] = useState("");

    function checkCityClicked(e) {
        if (e.target.value === "Add a city") return;
        console.log(e.target.value);
        setCitySelected(e.target.value);
    }

    function addItem() {
        if (citySelected && item[citySelected].length > 0) {
            setItenary([...itenary, item]);
            setCitySelected("");
            setItem({});
        }
    }

    return (
        <div className="bg-gray-900">
            <h1 className="text-2xl text-white text-center p-0 m-0">
                Create a new Itenary!
            </h1>
            <div className="relative bottom-10 h-screen flex flex-col justify-center items-center w-1/2 m-auto">
                <div className="h-[80%] w-full border-gray-700 border-2 rounded-lg bg-gray-600">
                    <div className="flex justify-center items-center"></div>
                    <div className="flex justify-center items-center w-full">
                        <select
                            onChange={(e) => checkCityClicked(e)}
                            className="w-full text-center text-white p-2 m-2 rounded-lg bg-slate-700"
                        >
                            <option>Add a city</option>
                            {cities.map((city, index) => {
                                return (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                );
                            })}
                        </select>
                        {citySelected.length > 0 && (
                            <select className="w-full text-center text-white p-2 m-2 rounded-lg bg-slate-700">
                                <option>Add a place</option>
                                {places[citySelected].map((place, index) => {
                                    return (
                                        <option key={index} value={place}>
                                            {place}
                                        </option>
                                    );
                                })}
                            </select>
                        )}
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={addItem}>Add</button>
                        <button onClick={finishItem}>Finish</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Itenary;
