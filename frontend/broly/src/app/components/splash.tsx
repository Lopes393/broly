import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "../assets/animation.json";

const SplashScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "50vw",
        height: "50vw",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default SplashScreen;
