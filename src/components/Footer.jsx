import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="left-footer">
          <img src="hemomancer.png" />
          Hemomancer is an Indie project created by konradgryt
          <br />
          this is my first project so I hope you like it
        </div>
        <div>
          <a href="https://store.steampowered.com/app/3690780/Hemomancer/">
            Wishlist on Steam <span className="arrow"> - &gt; </span>
          </a>
          <br />
          <a href="https://konradgryt.itch.io/hemomancer">
            Play on itch.io <span className="arrow"> - &gt; </span>
          </a>
          <br />
          <a href="https://discord.com/invite/nPDkZzKrct">
            Join on Discord <span className="arrow"> - &gt; </span>
          </a>
          <br />
          <a href="https://bsky.app/profile/hemomancer.com">
            Join on Bluesky<span className="arrow"> - &gt; </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
