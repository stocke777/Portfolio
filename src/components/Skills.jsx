import React from "react";
import "./../styles/Skills.css";
import JSLogo from "./../assets/js.png";
import PYTHONLogo from "./../assets/python.png";
import TSLogo from "./../assets/ts.png";
import HTMLLogo from "./../assets/html.png";
import CSSLogo from "./../assets/css.png";
import ReactLogo from "./../assets/react.png";
import NextLogo from "./../assets/next.png";
import ReactNative from "./../assets/reactnative.png";
import NodeJS from "./../assets/nodejs.jpg";
import DjangoLogo from "./../assets/django.png";
import TailwindLogo from "./../assets/tailwind.png";
import FramerLogo from "./../assets/framer.png";
import MUILogo from "./../assets/mui.png";
import GitLogo from "./../assets/git.png";
import GraphQLLogo from "./../assets/graphql.png";
import MongoDBLogo from "./../assets/mongodb.png";
import HuggingFace from "./../assets/huggingface.jpg";
import Langchain from "./../assets/langchain.jpg";

const Skills = () => {
  const skillList = [
    { name: "Javascript", img: JSLogo },
    {
      name: "Python",
      img: PYTHONLogo,
    },
    {
      name: "Typescript",
      img: TSLogo,
    },
    {
      name: "HTML",
      img: HTMLLogo,
    },
    {
      name: "CSS",
      img: CSSLogo,
    },
  ];

  const frameworkList = [
    {
      name: "ReactJs",
      img: ReactLogo,
    },
    {
      name: "NextJs",
      img: NextLogo,
    },
    {
      name: "React Native",
      img: ReactNative,
    },
    {
      name: "NodeJS",
      img: NodeJS,
    },
    {
      name: "Django",
      img: DjangoLogo,
    },
  ];

  const tools = [
    {
      name: "Git",
      img: GitLogo,
    },
    {
      name: "GraphQL",
      img: GraphQLLogo,
    },
    {
      name: "HuggingFace",
      img: HuggingFace,
    },
    {
      name: "Langchain",
      img: Langchain,
    },
    {
      name: "MongoDB",
      img: MongoDBLogo,
    },
    {
      name: "MUI",
      img: MUILogo,
    },
    {
      name: "Tailwind",
      img: TailwindLogo,
    },
    {
      name: "Framer Motion",
      img: FramerLogo,
    },
  ];
  return (
    <div>
      <div className="skill-type">
        <div className="skill-title">Languages</div>
        <div className="skill-container">
          {skillList.map((skill) => {
            return (
              <div className="skill">
                <div className="skill-logo">
                  <img src={skill.img} alt="JS" />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="skill-type">
        <div className="skill-title">Frameworks</div>
        <div className="skill-container">
          {frameworkList.map((skill) => {
            return (
              <div className="skill">
                <div className="skill-logo">
                  <img src={skill.img} alt="JS" />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="skill-type">
        <div className="skill-title">Libraries / Tools</div>
        <div className="skill-container">
          {tools.map((skill) => {
            return (
              <div className="skill">
                <div className="skill-logo">
                  <img src={skill.img} alt="JS" />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
