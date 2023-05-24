"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import SplashScreen from "./components/splash";
import Content from "./pages/content";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="content items-center ">{showSplash ? <SplashScreen /> : <Content />}</div>
    </main>
  );
}
