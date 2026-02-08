import { useState, useEffect } from "react";
import "../styles/loveLetter.css";

const letterText = `
My Love,

Hy Bujji mana marriage ayaka first birthday 🎂 Nidhe, so Nenu iche e surprise Nikhu nachindhe Anukunthuna. Nikhu chala sarlu chepa but idhe love ❤️ letter ✉️ kabathe Indhulo kuda rasthuna ne pic Pelli choopulu ki ochinaphude ninnu chusi Nenu chala Istha padha endhuko na heart 💓 ki connect ayav and nitho matlade kodhe ninnu chala chala love chesa, Manum Ephduu Ephduu kalusthama ani chala edhuru chusa mana first meet mana first kiss 💋 mana engagement mana marriage chala chala enjoy chesa nitho vuna Prethe second Bujji 100 years manidharum elage Kalisi Vundali Aphduu sardhaga manidhrum beach lo nadusthu mana memories matladukunthu mana fights mana love mana children vala tho gadepinave ani matladukunthu ne Cheye patukune beach lo nadusthu matladali Adhe na last wish in my 100 year 🫣😁😘
Happy birthday 🎂 my love 😍❤️
Itlu ne priyamyena bharya🤪
`;

function LoveLetter() {
  const [open, setOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!open) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(letterText.slice(0, i));
      i++;
      if (i > letterText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <div className="letter-wrapper">
      {!open ? (
        <div className="envelope">
          <div className="envelope-body">✉️</div>
          <p className="envelope-text">This letter is only for you…</p>
          <button className="open-btn" onClick={() => setOpen(true)}>
            Open the Letter 💌
          </button>
        </div>
      ) : (
        <div className="paper">
          <pre>{typedText}</pre>
        </div>
      )}
    </div>
  );
}

export default LoveLetter;
