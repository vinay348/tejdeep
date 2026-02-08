import "../styles/birthday.css";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import LoveLetter from "../components/LoveLetter";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function BirthdayPage() {
  const [cut, setCut] = useState(false);
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const fullMessage =
    "I may not say it every day, but you mean everything to me. Your smile makes my bad days better, and your presence makes my life complete. I promise to stand by you, today and always ❤️";

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true;

    if (location.state?.autoPlay) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Autoplay blocked:", err);
        });
    }

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, [location.state]);

  // Stop music
  const stopMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // ✨ Smooth typewriter
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (!document.hidden) {
        setText(fullMessage.slice(0, i));
        i++;
      }
      if (i > fullMessage.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // ❤️ Floating hearts (optimized)
  function Hearts() {
    return (
      <div className="hearts">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${14 + Math.random() * 16}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>
    );
  }

  // 🎊 Heart confetti (throttled)
  const fireHeartConfetti = () => {
    const duration = 2000;
    const end = Date.now() + duration;
    const heart = confetti.shapeFromText({ text: "❤️", scalar: 1.6 });
    let last = 0;

    (function frame(time) {
      if (time - last > 90) {
        confetti({
          particleCount: 3,
          spread: 80,
          startVelocity: 22,
          shapes: [heart],
          scalar: 1.4,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
        });
        last = time;
      }
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleCakeCut = () => {
    setCut(true);
    fireHeartConfetti();
  };

  return (
    <div className="birthday-container">
      <Hearts />

      {/* 💌 Welcome */}
      <section className="welcome">
        <h1>Happy Birthday Hubby ❤️</h1>
        <p>
          Today is special… because the most beautiful person in my life was
          born 💖
        </p>
        <div>
          {" "}
          {/* Keep audio element in DOM */}
          <button className="music-btn" onClick={stopMusic}>
            Stop Music ✋
          </button>
        </div>
      </section>

      {/* 📖 Our Story */}
      <section className="story">
        <h2>Our Story 💞</h2>

        <div className="timeline">
          <div className="event">
            <div className="date">💫12 Jan 2025</div>
            <b>First meet</b>
            <p>
              That is the first time I saw you, ne pic chusaka endhuko na heart
              lo connect Ayepoyav Nakhosum e Nuvu putav anipinchav Andhuke
              kasthum Ayena Pelli choopulu ki ocha a day ninnu Vedio call lo
              chusi matladaka baga nachav.
            </p>
          </div>

          <div className="event">
            <div className="date">💬22 Jan 2024</div>
            <b>Our first call</b>
            <p>
              first ph call and chatting 😍 Aroju ne message Ragane Baga excited
              aya nitho matladaka nakhu Aroju antha matladali anipinchendhe ph
              petayali anipiyala nakhu but short chat Ayena I felt very happy ❤️
            </p>
          </div>

          <div className="event">
            <div className="date">😊 25 May 2024</div>
            <b>Our Happy Moments</b>
            <p>
              Nuvu India ochaka Nenu ninnu first Kalisi na roju Nuvu Ochina
              degara nuchi Ephduu kaludham a anukuna 25th Nuvu Intiki ochesareke
              mana shopping ki Aroju ninnu Pyena nuchi chusi Entha happy Anthe
              aslaa na heart ninnu Chusaka blast ayepoyedhe anukuna 🤣 chala
              happy Chinnu nakhu nuvu tapa Evaru kanipiyala Aroju aslaa ne smile
              ne voice na ears and eyes 👀 ki touch avagane chala Bagundhe ur
              such a pure heart like a baby Andhuke siggu lekundha hug chesukuna
              nene first 😁🫣 Aroju mana shopping ayaka kuda nakhu aslaa ninnu
              odhilee velali ani e ledhu 🥺
            </p>
          </div>

          <div className="event">
            <div className="date">😊 28 May 2024</div>
            <b>Our Happy Moments</b>
            <p>
              mana engagement day aslaa Aroju matrum I meeting my man finally
              ani picha happy aslaa 😍 Aroju Kindhaki rakudadhu ana kuda Nenu
              steps degara ki Ochi ninnu Chusa ela ready ayav ani 🥰 aww so
              handsome 😘😘Finally, the most precious days of my life — 6th
              June, the day we became husband and wife, and 8th June, our
              reception, where the world celebrated what my heart already knew:
              that you are my forever. mana marriage day Aroju mana cars okesare
              Pakka Pakka Ragane entha happy ga Nuvu Ela Vunav Pelli koduku
              dress lo ani chusa super ga vunav mana eyes kuda okesare
              chusukunam 👀 a day antha happy happy Nenu finally ma husband
              degara ki velipothuna ani 🎊💃🏻 talli katetaphduu andharu ammye lu
              edustharu Nenu matrum aslaa edavaala endhuko Teledhu nakhu
              nedegara a ki ochesthuna life long nitho Kalisi vundachu ane
              namakhum nakhu. Nakhu Nuvu express Cheyaka poyena nakhu ardhum
              ayedhe antha ne love ne emotions Pelli lo promise chesinathu ga
              life long kasthum edi Ayena I will never ever leave you Chinnu
              😘😘😘
            </p>
          </div>

          <div className="event">
            <div className="date">😊 22 Dec 2024</div>
            <b>Our Happy Moments</b>
            <p>
              Today, on your birthday, I want you to know this — Loving you is
              my favourite thing. Being your wife is my greatest blessing. You
              make me feel safe, cherished, and deeply loved in ways I never
              knew were possible. I promise to stand by you, laugh with you,
              grow with you, and love you more with every passing year. This is
              just our beginning, and I can’t wait to celebrate many more
              birthdays, milestones, and quiet moments together.
            </p>
          </div>
        </div>
      </section>

      {/* 📸 Gallery */}
      <section className="gallery">
        <h2>Our Memories 📸</h2>
        <div className="photos">
          <img src="/img1.jpeg" alt="memory" />
          <img src="/img2.jpeg" alt="memory" />
          <img src="/img3.jpeg" alt="memory" />
          <img src="/img4.jpeg" alt="memory" />
          <img src="/img5.jpeg" alt="memory" />
          <img src="/img6.jpeg" alt="memory" />
          <img src="/img7.jpeg" alt="memory" />
          <img src="/img8.jpeg" alt="memory" />
          <img src="/img9.jpeg" alt="memory" />
          <img src="/img10.jpeg" alt="memory" />
          <img src="/img11.jpeg" alt="memory" />
          <img src="/img12.jpeg" alt="memory" />
          <img src="/img13.jpeg" alt="memory" />
          <img src="/img14.jpeg" alt="memory" />
          <img src="/img15.jpeg" alt="memory" />
          <img src="/img16.jpeg" alt="memory" />
          <img src="/img17.jpeg" alt="memory" />
          <img src="/img18.jpeg" alt="memory" />
          <img src="/img19.jpeg" alt="memory" />
          <img src="/img20.jpeg" alt="memory" />
          <img src="/img21.jpeg" alt="memory" />
          <img src="/img22.jpeg" alt="memory" />
          <img src="/img23.jpeg" alt="memory" />
          <img src="/img24.jpeg" alt="memory" />
          <img src="/img25.jpeg" alt="memory" />
          <img src="/img26.jpeg" alt="memory" />
          <img src="/img27.jpeg" alt="memory" />
          <img src="/img28.jpeg" alt="memory" />
          <img src="/img29.jpeg" alt="memory" />
        </div>
      </section>

      {/* 💌 Message */}
      <section className="message">
        <h2>A Message From My Heart 💌</h2>
        <p> {text} </p>
      </section>

      {/* 🎂 Cake */}
      <section className="cake">
        <h2>Make a wish 🎂</h2>

        {!cut ? (
          <>
            <div className="cake-svg" onClick={handleCakeCut}>
              🎂
            </div>
            <p className="cake-hint">Tap the cake to cut it 💕</p>
          </>
        ) : (
          <p className="wish">
            Wish granted ✨ Because I’m already here for you ❤️
          </p>
        )}
      </section>

      <section className="love-letter">
        <h2>A Letter Just for You 💌</h2>
        <LoveLetter />
      </section>
      <div className="btn-container">
        <button className="see-wishes-btn" onClick={() => navigate("/wishes")}>
          See Your Wishes 💌
        </button>
      </div>
    </div>
  );
}

export default BirthdayPage;
