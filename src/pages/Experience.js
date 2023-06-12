import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from "framer-motion";
import './../styles/Experience.css'


function Experience() {
  return (
    <motion.div className="experience" initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{x: window.innerWidth, transition: .3}}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2022 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-color">
            Skuad, Gurgaon
          </h3>
          <p> Frontend Developer - worked with ReactJS, Apollo GraphQL, Material UI and Typescript </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-color">
            MSIT, Janakpuri, Delhi
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Science Bachelor's Degree (8.94 CGPA)
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-color">
            12th (90%)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Delhi Public School, Haridwar
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-color">
            10th (10 CGPA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Delhi Public School, Haridwar
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  );
}

export default Experience;
