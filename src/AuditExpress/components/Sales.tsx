"use client";
import React from 'react'
import path1 from '../assets/CTA.png'
import path2 from '../assets/path-2.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Sales = (props: Props) => {
  return (
    <div>
      <div className="bg-grid-bg min-h-screen bg-no-repeat bg-center flex items-center justify-center">
        <div className="text-center dark:text-white">
          <h1 className="lg:text-4xl text-2xl px-10" id="poppins-semibold">
            Take Your Project Security to the next level, Today!
          </h1>
          <div className="flex justify-center py-6">
            <p className="text-lg lg:w-6/12 px-10">
              Protect your smart contracts with Audit Express. Integrate today for a rapid security assessment. Boost your project's security and user confidence. Integrate Audit Express now
            </p>
          </div>
          <div className="lg:flex lg:justify-center gap-10 lg:space-y-0 space-y-4 space-x-3 lg:space-x-0 py-5">
            <button
            onClick={()=> typeof window!=="undefined" && window.open("https://securedapp.io/solidity-shield-scan")}
              className="lg:text-2xl bg-green-500 px-5 py-2 rounded-2xl hover:bg-green-600 text-black border hover:border-black scale-100 hover:scale-105 transform transition"
              id="poppins-medium"
            >
              Manual Audit
            </button>
            <button onClick={() =>
              typeof window !== "undefined" &&
              window.open("https://securewatch.securedapp.io/")
            }
              className="lg:text-2xl bg-transparent dark:text-white border-green-500 px-5 py-2 rounded-2xl hover:bg-green-600 text-white border hover:border-black scale-100 hover:scale-105 transform transition"
              id="poppins-medium"
            >
              Real Time Monitoring
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales