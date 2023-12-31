import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "100%" | "50%" | "25%";

}

export const ScrollAnimations: React.FC<Props> = ({ children, width = "100%" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position:"static", width:'100%', overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left:0 },
          visible: { left: "100%"},
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ 

        position: "absolute", 
        
        background: "var(--brand)",
        zIndex: 20,
         }}
         >



      </motion.div>
    </div>
  );
};
