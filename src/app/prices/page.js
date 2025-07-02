"use client";

import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [rolls, setRolls] = useState(0);
  const [hiRes, setHiRes] = useState(false);
  const pricing = {
    0: 0,
    1: 15,
    2: 20,
    3: 35,
    4: 40,
    5: 55,
    6: 60,
    7: 75,
    8: 80,
    9: 95,
    10: 100,
  };
  const baseTotal = pricing[rolls] ?? " Please Contact Us! ";
  const total = typeof baseTotal === "number"
    ? (hiRes ? baseTotal + 5 : baseTotal)
    : baseTotal;

  return (
    <div className=" min-h-screen flex flex-col">
      <Head>
        <title>
          Foto Dump - Professional Film Development & Darkroom Services
        </title>
        <meta
          name="description"
          content="Professional film development, printing, and darkroom services. Expert handling of 35mm, medium format, and large format photography."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex flex-col mt-24 lg:flex-row justify-center min-h-[66vh] gap-10">
      

      <div className="order-1 lg:order-none flex mx-3 justify-center items-center">
        <Image
          className=""
          src="/images/shirt_deal.png"
          width={500}
          height={500}
          alt="Develop 5 rolls or more and get a free shirt"
        />
      </div>

      <div className="order-3 lg:order-none p-6 max-w-sm self-center rounded-xl shadow-md border-gray-950 border-2">
        <h2 className="text-center text-2xl ">
          Photo Roll Price Calculator
        </h2>
        <div className="flex flex-col items-center space-y-4 mt-4">
          <input
            type="number"
            min="0"
            value={rolls}
            onChange={(e) => setRolls(Number(e.target.value))}
            className="w-60  justify-center items-center border rounded p-2"
            placeholder="Enter number of rolls"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={hiRes}
              onChange={(e) => setHiRes(e.target.checked)}
              id="hiRes"
              className="w-5 h-5"
            />
            <label htmlFor="hiRes" className="text-m">
              {" "}
              Add hi-res scans (+$5)
            </label>
          </div>
          <p className="text-lg">Total: ${total}</p>
        </div>
      </div>

      <div className="order-2 lg:order-none flex mx-3 justify-center items-center">
        <Image
          className=""
          src="/images/comparison.png"
          width={500}
          height={500}
          alt="Medium Resolution: Best for Digital Work. High Resolution: Good for large print projects."
        />
      </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
