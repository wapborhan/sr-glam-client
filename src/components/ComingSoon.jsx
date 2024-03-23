/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const ComingSoon = () => {
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
    <div className="page-wraper">
      {/* <div id="loading-area" className="preloader-wrapper-1">
        <div className="loader">
          <div className="load-circle">
            <div className="circle-2">
              <img src="images/logo.png" alt="/" />
            </div>
          </div>
        </div>
      </div> */}
      <section className="px-3 overflow-hidden bg-light">
        <div className="row dz-coming-soon">
          <div className="col-xxl-6 col-xl-6 col-lg-6 px-0">
            <div className="dz-coming-bx single-page">
              <div className="logo">
                <a href="index-2.html">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
              <div className="dz-content">
                <h2 className="dz-title pe-xl-4">
                  Our awesome new site is almost ready to launch!
                </h2>
                <h1 className="lg:text-4xl text-lg mt-5">
                  Keep an eye on our{" "}
                  <a
                    className="text-pink-600"
                    href="https://www.facebook.com/profile.php?id=61554672892491"
                  >
                    Facebook Page
                  </a>{" "}
                  for updates
                </h1>
              </div>
              <div className="countdown-row">
                <div className="countdown">
                  <div className="date">
                    <span className="time" id="day">
                      {timeRemaining.days}
                    </span>
                    <span className="text"> Days</span>
                  </div>
                  <div className="date">
                    <span className="time" id="hour">
                      {timeRemaining.hours}
                    </span>
                    <span className="text">Hours</span>
                  </div>
                  <div className="date">
                    <span className="time" id="min">
                      {timeRemaining.minutes}
                    </span>
                    <span className="text">Minutes</span>
                  </div>
                  <div className="date">
                    <div className="time lost" id="second">
                      {timeRemaining.seconds}
                    </div>
                    <span className="text">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
            <img src="images/circle-lines.png" className="bg-img" alt="" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 px-0  d-lg-block d-none">
            <div
              className="dz-coming-bx2"
              style={{
                backgroundImage: "url(`images/image.png`)",
                backgroundPosition: "center center",
              }}
            >
              <img src="images/circle-lines2.png" className="bg-img2" alt="" />
              <div className="dz-coming-media">
                {/* <img src="images/image.png" alt="" /> */}
              </div>
            </div>
            <div className="banner-social-media style-1">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/groups/1501426423757781"
                  >
                    Facebook Group
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/profile.php?id=61554672892491"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/@srabonis.glam"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
