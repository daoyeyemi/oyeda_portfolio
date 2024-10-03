import "./styles.css";

import NavBar from "../components/NavBar";
import ProjectCollect from "../components/ProjectCollect";
import React from "react";
import { motion } from "framer-motion";

function Project() {
    return (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="project">
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 10
              }}>
              <NavBar />
            </div>
            <div style={{
              position: "absolute",
              top: 50,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}>
              <ProjectCollect />
            </div>
          </motion.div>
    )
}

export default Project;