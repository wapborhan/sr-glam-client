import { useState, useEffect } from "react";
import cover from "./assets/cover.jpg";
import "./App.css";

function App() {
  const targetDate = new Date("April 14, 2024 00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // If the target date has passed, set the time remaining to zero
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
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
            <span className="number">{timeRemaining.days}</span>
            <span className="text">days</span>
          </div>
          <div className="time hours">
            <span className="number">{timeRemaining.hours}</span>
            <span className="text">hours</span>
          </div>
          <div className="time minutes">
            <span className="number">{timeRemaining.minutes}</span>
            <span className="text">minutes</span>
          </div>
          <div className="time seconds">
            <span className="number">{timeRemaining.seconds}</span>
            <span className="text">seconds</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
