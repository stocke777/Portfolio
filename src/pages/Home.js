import "../styles/Home.css";
import Typing from "../components/Typing";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: 0.3 }}
      style={{ color: "#fff" }}
    >
      <div className="about">
        <h2> 👋 I am Jaivardhan Deshwal</h2>
        <Typing />
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="https://drive.google.com/drive/folders/10faFJbXVb6dx0yeWiA7GKRutv1ZCfx08?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-69" type="button">
              View Resume
            </button>
          </a>
          <div className="contact-info">
            <p>
              Email:{" "}
              <span
                style={{
                  padding: "2px 6px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  userSelect: "all",
                  color: "#fff",
                }}
                title="Click to copy"
                onClick={() => {
                  navigator.clipboard.writeText("deshwaljaivardhan@gmail.com");
                }}
              >
                deshwaljaivardhan@gmail.com
              </span>
            </p>
            <p>
              Phone:{" "}
              <span
                style={{
                  padding: "2px 6px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  userSelect: "all",
                  color: "#fff",
                }}
                title="Click to copy"
                onClick={() => {
                  navigator.clipboard.writeText("+919319517416");
                }}
              >
                +91 9319517416
              </span>
            </p>
          </div>
          <div className="social-media-links">
            <a
              href="https://www.linkedin.com/in/jaivardhan-deshwal-8612a71aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/linkdin.jpg")}
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
            <a
              href="https://github.com/stocke777"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/github.png")}
                alt="GitHub"
                className="social-icon"
              />
            </a>
            <a
              href="https://medium.com/@deshwaljaivardhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg"
                alt="Medium"
                className="social-icon"
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/jaivardhan_deshwal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
                className="social-icon"
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                }}
              />
            </a>
          </div>
        </div>
        <div
          className="scroll-down-arrow"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "32px",
          }}
        >
          <button
            onClick={() => {
              window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              outline: "none",
              padding: 0,
              animation: "bounce 1.5s infinite",
            }}
            aria-label="Scroll down"
          >
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
              <path d="M12 16l-6-6h12l-6 6z" fill="#fff" />
            </svg>
          </button>
          <style>
            {`
			@keyframes bounce {
				0%, 100% { transform: translateY(0);}
				50% { transform: translateY(10px);}
			}
		`}
          </style>
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <Skills />
      </div>
    </motion.div>
  );
}

export default Home;
