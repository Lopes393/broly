"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import SplashScreen from "./splash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="content">
        {showSplash ? (
          <SplashScreen />
        ) : (
          <>
            <h1>Conteúdo</h1>
          </>
        )}
      </div>
    </main>
  );
}
