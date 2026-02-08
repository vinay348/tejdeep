import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { BIRTHDAY_DATE } from "../utils/dateConfig";
import "../styles/countdown.css";

function CountdownPage() {
  const navigate = useNavigate();
  const target = new Date(BIRTHDAY_DATE).getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [unlocked, setUnlocked] = useState(false);

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      done: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const t = getTimeLeft();
      setTimeLeft(t);

      if (t.done && !unlocked) {
        setUnlocked(true);
        fireConfetti();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [unlocked]);

  const fireConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        spread: 70,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  return (
    <div className="countdown-container">
      {!unlocked ? (
        <>
          <h1>Counting every second until your birthday 💖</h1>

          <div className="timer">
            <TimeBox label="Days" value={timeLeft.days} />
            <TimeBox label="Hours" value={timeLeft.hours} />
            <TimeBox label="Minutes" value={timeLeft.minutes} />
            <TimeBox label="Seconds" value={timeLeft.seconds} />
          </div>

          <p className="wait-text">Come back on your special day 🎂</p>
        </>
      ) : (
        <>
          <h1 className="happy">It’s finally here… 🎉</h1>
          <h2>Happy Birthday Hubby ❤️</h2>

          <button
            className="enter-btn"
            onClick={() => navigate("/birthday", { state: { autoPlay: true } })}
          >
            Click for a Surprise 🎁
          </button>
        </>
      )}
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="time-box">
      <span className="value">{value}</span>
      <span className="label">{label}</span>
    </div>
  );
}

export default CountdownPage;
