import React from "react";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="homepage">
      <img className="header-img" src="header-image.png" />
      <div className="text">
        Every Beat Counts <br /> Do you have what it takes?
      </div>
      <a href="https://store.steampowered.com/app/3690780/Hemomancer/">
        <button className="button">
          Wishlist on
          <img className="steam-image" src="steam.png" width={100} />
        </button>
      </a>
      <a href="https://konradgryt.itch.io/hemomancer">
        <button className="itch-button">
          <span className="itch-text">Play on</span>
          <img className="itch-image" src="itch.png" width={100} />
        </button>
      </a>
      <section className="main-content">
        <div className="twitch-container">
          <a href="https://www.twitch.tv/konradgryt">
            <button className="twitch-button">
              Want to know more? I stream on Twitch{" "}
              <img className="twitch-image" src="twitch.png" width={50} />
            </button>
          </a>
        </div>
        <div className="section-text">what is hemomancer?</div>
        <div className="section-body-text">
          Hemomancer is a story set in a surreal world. It's also a roguelite
          game with RPG, visual novel and musical/rhythm elements. Gameplay and
          narrative is designed to challenge you, so prepare to struggle.
        </div>
        <div className="content-grid">
          <div>
            <span className="different-color">roguelike:</span> feel the
            intensity of the fights while fighting different enemies
          </div>
          <div>
            <span className="different-color">nonlinear progression:</span> have
            fun with this build? play again and who knows maybe you find the
            ultimate build.
          </div>
          <div>
            <span className="different-color">soulslite combat: </span> the more
            you fight, the more you learn
          </div>
          <div>
            <span className="different-color">exploration:</span> discover the
            world of hemomancer
          </div>
          <div>
            <img src="main-section-img1.jpg" />
          </div>
          <div>
            <img src="main-section-img2.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
