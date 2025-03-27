import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import axios from "axios";
import Popup from "./components/Popup";

function App() {
  const [city, setCity] = useState("mumbai");
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);

  const currentDate = new Date().toISOString().split("T")[0];
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const baseURL = "https://weatherapi-com.p.rapidapi.com/forecast.json";


  const handleFetchWeather = async (e) => {
    if (e) {
      e.preventDefault();
      if (e.target.elements[0].value == "") {
        setShowPopup(true);
        console.error("City is empty!");
        return;
      }
    }

    setLoading(true)
    try {
      const response = await axios.get(
        `${baseURL}?q=${city}&days=7`,
        {
          headers: {
            "x-rapidapi-key": "1d5dec71f8msh5b3eba4955da49ep1ad024jsn1e10c21e5a9c",
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          },
        }
      );
      setCityData(response.data);
      setLoading(false);
    } catch (error) {
      setWrongInput(true);
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
    setCity("")
  };

  useEffect(() => {
    handleFetchWeather();
  }, [])

  return (
    <>
      <Header
        city={city}
        setCity={setCity}
        handleFetchWeather={handleFetchWeather}
        currentDate={currentDate}
        currentTime={currentTime}
        cityData={cityData}
      />

      {showPopup &&
        <Popup
          data={"City name cannot be empty!"}
          set={setShowPopup}
        />}

      {wrongInput &&
        <Popup
          data={<>Can't find your Entered City! <br /> Enter a valid City name</>}
          set={setWrongInput}
        />}

      {loading ? <h1 className="h-[88%] w-full flex items-center justify-center text-5xl">
        Loading weather data of {city}...
      </h1> :
        <Hero cityData={cityData}
          currentDate={currentDate}
          currentTime={currentTime} />
      }
    </>
  );
}

export default App;