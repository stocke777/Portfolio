import React from "react";
import "../styles/Home.css";
import Typing from "../components/Typing";
import { ReactComponent as Logo } from "./../assets/doc.svg";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

function Home() {
	return (
		<motion.div
			className='home'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
      exit={{x: window.innerWidth, transition: .3}}
		>
			<div className='about'>
				<h2> I am Jaivardhan Deshwal</h2>
				<Typing />
				<div className='prompt'>
					<p>A software developer with a passion for learning and creating.</p>
					<button
						class='button-69'
						type='button'
					>
						View Resume
					</button>
				</div>
			</div>
			<div className='skills'>
				<h1> Skills</h1>
				{/* <ol className="list">
          <li className="item">
            <h2>Languages </h2>
            <span>
              JavaScript, Typescript, Python, HTML, CSS
            </span>

          </li>
          <li className="item">
            <h2>Frameworks</h2>
            <span>
            ReactJs, NextJs, Django
            </span>
          </li>
          <li className="item">
            <h2>Libraries/Tools</h2>
            <span>Git, Framer Motion, Apollo GraphQL, SQlite, MaterialUI, TailwindCSS, StyledComponents</span>
          </li>
        </ol> */}
				<Skills />
			</div>
		</motion.div>
	);
}

export default Home;
