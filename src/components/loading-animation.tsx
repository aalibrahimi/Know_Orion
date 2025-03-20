"use client"

import { useEffect, useState } from "react"

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevProgress + 1
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="relative mb-8">
        <div className="flex items-center justify-center">
          <div className="h-24 w-24 relative">
            {/* Construction animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 border-8 border-gray-200 rounded-full">
                <div
                  className="h-full w-full rounded-full border-t-8 border-l-8 border-r-8 border-b-0 border-red-600"
                  style={{
                    transform: `rotate(${progress * 3.6}deg)`,
                    transition: "transform 0.2s ease-out",
                  }}
                />
              </div>
            </div>

            {/* Blue accent */}
            <div
              className="absolute top-0 left-1/2 h-3 w-3 rounded-full bg-blue-600"
              style={{
                transform: `translateX(-50%) rotate(${progress * 3.6}deg) translateY(-12px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-red-600">Orion</span> & <span className="text-blue-600">Knoz</span>
        </h2>
        <p className="text-gray-500 mb-4">Engineering & Construction Excellence</p>

        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-600 to-blue-600 rounded-full"
            style={{ width: `${progress}%`, transition: "width 0.2s ease-out" }}
          />
        </div>
        <p className="text-sm text-gray-400 mt-2">{progress}%</p>
      </div>
    </div>
  )
}

