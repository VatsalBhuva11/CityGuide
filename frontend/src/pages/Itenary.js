import { useState } from "react";
import axios from "axios";

const cities = ["Dubai", "Abu Dhabi"];
const places = {
    Dubai: ["Burj Khalifa", "Dubai Mall", "Global Village", "Palm Jumeirah"],
    "Abu Dhabi": ["Ferrari World", "Yas Waterworld", "Marina Mall"],
};

const Itenary = () => {
    const [itenary, setItenary] = useState([]);
    const [item, setItem] = useState({});
    const [citySelected, setCitySelected] = useState("");
    const token = localStorage.getItem("token");
    
    function checkCityClicked(e) {
        if (e.target.value === "Add a city") return;
        setCitySelected(e.target.value); //mark current city
        let newItem = {};
        newItem.cityName = e.target.value;
        newItem.places = [];

        setItem(newItem);
        console.log("item: ", newItem);
        console.log("itenary length: ", itenary.length);
        console.log("cityselected array: ", newItem["cityName"]);

        let iteLen = itenary.length;
        if (iteLen > 0 && itenary[iteLen - 1].places.length === 0) {
            let newItenary = itenary.slice(0, iteLen - 1);
            if (iteLen > 1 && itenary[iteLen - 2].cityName === e.target.value) {
                setItem(itenary[iteLen - 2]);
                setItenary(newItenary);
            } else {
                newItenary.push(newItem);
                setItenary(newItenary);
                console.log("itenary from if: ", newItenary);
            }
        } else {
            setItenary([...itenary, newItem]);
            console.log("itenary from else: ", [...itenary, newItem]);
        }
    }

    function addPlace(e) {
        if (citySelected?.length === 0 || e.target.value === "Add a place")
            return;
        let newItem = Object.assign({}, item);
        newItem.places.push({ itemName: e.target.value });

        console.log("item: ", newItem);
        let newItenary = itenary.slice(0, -1);
        newItenary.push(newItem);
        setItenary(newItenary);
        console.log("itenary: ", newItenary);
    }

    function addItem() {
        (async () => {
            let response;
            response = await axios.post(
                "http://localhost:7001/api/auth/authenticate",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data.uidd);
            const requestBody = {
                UID: `${response.data.uidd}`,
                items: itenary,
            };
            const response2 = await axios.post(
                "http://localhost:7001/api/itenary/createItenary",
                requestBody
            );
            //   setUser({...response2.data});
            // console.log("user2:"+user2.firstName);
        })();
        return;
    }

    return (
        <div className="bg-gray-900 text-white">
            <h1 className="text-2xl text-white text-center p-0 m-0">
                Create a new Itenary!
            </h1>
            <div className="relative bottom-10 h-screen flex flex-col justify-center items-center w-1/2 m-auto">
                <div className="h-[80%] w-full border-gray-700 border-2 rounded-lg bg-gray-600">
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
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                        <button
                            onClick={addItem}
                            className="p-2 bg-slate-400 hover:bg-slate-200 duration-150 rounded-xl cursor-pointer"
                        >
                            Finish Itenary
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        {itenary.length > 0 &&
                            itenary.map((itenaryItem) => {
                                console.log("itenaryItem: ", itenaryItem);
                                return (
                                    <div className="flex flex-col w-full">
                                        <h1 className="text-4xl ml-2 flex w-full justify-start items-center">
                                            📍 {itenaryItem.cityName}
                                        </h1>
                                        {itenaryItem.places.map(
                                            (itenaryPlace) => {
                                                return (
                                                    <p className="flex w-full justify-center items-center">
                                                        {itenaryPlace.itemName}
                                                    </p>
                                                );
                                            }
                                        )}
                                        {citySelected.length > 0 &&
                                            citySelected ===
                                                itenaryItem.cityName && (
                                                <div className="flex justify-center items-center">
                                                    <select
                                                        onChange={(e) =>
                                                            addPlace(e)
                                                        }
                                                        className="w-1/2 text-center text-white p-2 m-2 rounded-lg bg-slate-700"
                                                        value={"Add a place"}
                                                    >
                                                        <option>
                                                            Add a place
                                                        </option>
                                                        {places[
                                                            citySelected
                                                        ].map(
                                                            (place, index) => {
                                                                return (
                                                                    <option
                                                                        key={
                                                                            index
                                                                        }
                                                                        value={
                                                                            place
                                                                        }
                                                                    >
                                                                        {place}
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                </div>
                                            )}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Itenary;
