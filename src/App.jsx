import { useState, useEffect } from "react";
import cover from "./assets/cover.jpg";
import "./App.css";

function App() {
  const [secValue, setSecValue] = useState(55);
  const [minValue, setMinValue] = useState(2);
  const [hourValue, setHourValue] = useState(2);
  const [dayValue, setDayValue] = useState(55);

  useEffect(() => {
    const timeFunction = setInterval(() => {
      setSecValue((prevSecValue) => {
        if (prevSecValue === 0) {
          setMinValue((prevMinValue) => {
            if (prevMinValue === 0) {
              setHourValue((prevHourValue) => {
                if (prevHourValue === 0) {
                  setDayValue((prevDayValue) => {
                    if (prevDayValue === 0) {
                      clearInterval(timeFunction);
                      return 0;
                    }
                    return prevDayValue - 1;
                  });
                  return 24;
                }
                return prevHourValue - 1;
              });
              return 60;
            }
            return prevMinValue - 1;
          });
          return 60;
        }
        return prevSecValue - 1;
      });
    }, 1000);

    return () => clearInterval(timeFunction);
  }, []);

  return (
    <>
      <section className="container">
        <img src={cover} alt="" className="image" />
        <header className="lg:pt-5 p-5 space-y-4">
          <h1 className="lg:text-7xl text-2xl">
            {"Sraboni'S Glam"} Coming Soon{" "}
          </h1>
          <h1 className="lg:text-4xl text-lg">
            Keep an eye on our{" "}
            <a
              className="text-pink-600"
              href="https://www.facebook.com/profile.php?id=61554672892491"
            >
              Facebook Page
            </a>{" "}
            for updates
          </h1>
        </header>

        <div className="time-content absolute bottom-0 lg:left-1/2 lg:-translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
          <div className="time days">
            <span className="number">
              {dayValue < 10 ? `0${dayValue}` : dayValue}
            </span>
            <span className="text">days</span>
          </div>
          <div className="time hours">
            <span className="number">
              {hourValue < 10 ? `0${hourValue}` : hourValue}
            </span>
            <span className="text">hours</span>
          </div>
          <div className="time minutes">
            <span className="number">
              {minValue < 10 ? `0${minValue}` : minValue}
            </span>
            <span className="text">minutes</span>
          </div>
          <div className="time seconds">
            <span className="number">
              {secValue < 10 ? `0${secValue}` : secValue}
            </span>
            <span className="text">seconds</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
