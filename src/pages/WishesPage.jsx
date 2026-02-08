import "../styles/wishes.css";
import { useNavigate } from "react-router-dom";

function WishesPage() {
  
  const navigate = useNavigate();

  return (
    <div className="wishes-container">
      <h1>Birthday Wishes Just for You 💖</h1>
      <p className="subtitle">
        So many people wanted to make your day special 🎉
      </p>

      <div className="videos">
        <video controls>
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>

        <video controls>
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>

        <video controls>
          <source src="/videos/video3.mp4" type="video/mp4" />
        </video>
        <video controls>
          <source src="/videos/video4.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/video5.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/video6.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/video7.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/video8.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/video9.mp4" type="video/mp4" />
        </video>
          <video controls>
          <source src="/videos/video10.mp4" type="video/mp4" />
        </video>
         <video controls>
          <source src="/videos/video11.mp4" type="video/mp4" />
        </video>
        <video controls>
          <source src="/videos/video12.mp4" type="video/mp4" />
        </video><video controls>
          <source src="/videos/video13.mp4" type="video/mp4" />
        </video>
        <video controls>
          <source src="/videos/video14.mp4" type="video/mp4" />
        </video>
      </div>

      <p className="ending">You are loved beyond words ❤️</p>

      <button className="final-btn" onClick={() => navigate("/forever")}>
        One Last Surprise Just for You ❤️
      </button>
    </div>
  );
}

export default WishesPage;
