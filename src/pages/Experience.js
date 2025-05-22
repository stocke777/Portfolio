import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import "./../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      type: "work",
      date: "August 2024 - April 2025",
      icon: <WorkIcon />,
      iconStyle: { background: "#3e497a", color: "#fff" },
      title: "Payoneer, Gurgaon",
      subtitle: null,
      description:
        "Frontend Developer - worked with ReactJS, NodeJS, NextJS, Apollo GraphQL, Material UI and Typescript",
    },
    {
      type: "work",
      date: "July 2022 - August 2024",
      icon: <WorkIcon />,
      iconStyle: { background: "#3e497a", color: "#fff" },
      title: "Skuad, Gurgaon",
      subtitle: null,
      description:
        "Frontend Developer - worked with ReactJS, Apollo GraphQL, Material UI and Typescript",
    },
    {
      type: "work",
      date: "Feb 2022 - June 2022",
      icon: <WorkIcon />,
      iconStyle: { background: "#3e497a", color: "#fff" },
      title: "Ques10, Mumbai",
      subtitle: null,
      description:
        "Frontend Developer - worked with Django, External Apis, postgreSQL",
    },
    {
      type: "education",
      date: "2018 - 2022",
      icon: <SchoolIcon />,
      iconStyle: { background: "#e9d35b", color: "#fff" },
      title: "MSIT, Janakpuri, Delhi",
      subtitle: `Computer Science Bachelor's Degree (8.94 CGPA)`,
      description: null,
    },
    {
      type: "education",
      date: "2018",
      icon: <SchoolIcon />,
      iconStyle: { background: "#e9d35b", color: "#fff" },
      title: "12th (90%)",
      subtitle: "Delhi Public School, Haridwar",
      description: null,
    },
    {
      type: "education",
      date: "2016",
      icon: <SchoolIcon />,
      iconStyle: { background: "#e9d35b", color: "#fff" },
      title: "10th (10 CGPA)",
      subtitle: "Delhi Public School, Haridwar",
      description: null,
    },
  ];

  return (
    <motion.div
      className="experience"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: 0.3 }}
    >
      <VerticalTimeline lineColor="#3e497a">
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            className={`vertical-timeline-element--${exp.type}`}
            date={exp.date}
            iconStyle={exp.iconStyle}
            icon={exp.icon}
          >
            <h3 className="vertical-timeline-element-title text-color">
              {exp.title}
            </h3>
            {exp.subtitle && (
              <h4 className="vertical-timeline-element-subtitle">
                {exp.subtitle}
              </h4>
            )}
            {exp.description && <p>{exp.description}</p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
}

export default Experience;
