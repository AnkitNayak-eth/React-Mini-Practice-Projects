import React from 'react'
import "./style.css";


const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="col col1">
          <h3>CoolSite</h3>
          <p>
            Made with <span style={{ color: "#BA6573" }}>❤</span> by Jux
          </p>
          <div className="social">
            <a
              href="https://codepen.io/Juxtopposed"
              target="_blank"
              className="link"
            >
              <img
                className="img1"
                src="https://assets.codepen.io/9051928/codepen_1.png"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/juxtopposed"
              target="_blank"
              className="link"
            >
              <img
                className="img1"
                src="https://assets.codepen.io/9051928/x.png"
                alt=""
              />
            </a>
            <a
              href="https://youtube.com/@juxtopposed"
              target="_blank"
              className="link"
            >
              <img
                className="img1"
                src="https://assets.codepen.io/9051928/youtube_1.png"
                alt=""
              />
            </a>
          </div>
          <p style={{ color: "#818181", fontSize: "smaller" }}>
            2024 © All Rights Reserved
          </p>
        </div>
        <div className="col col2">
          <p>About</p>
          <p>Our mission</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
        <div className="col col3">
          <p>Services</p>
          <p>Products</p>
          <p>Join our team</p>
          <p>Partner with us</p>
        </div>
      </footer>
    </>
  );
}

export default Footer