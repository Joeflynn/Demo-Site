import { useState } from 'react'
import ToolbarDynamic from '../../components/motion-primitives/Motion-Toolbar'
import LandscapeImage from '../../public/Images/Landscape.jpg'
import LanscapeImageBalloon from '../../public/Images/Landscape-w-balloon.jpg'

export default function Demo2() {
  const [currentImage, setCurrentImage] = useState(LandscapeImage)
  const [showGradient, setShowGradient] = useState(false)

  const handleCreateClick = () => {
    console.log('Create button clicked!')
    setShowGradient(true)
    setTimeout(() => {
      setCurrentImage(LanscapeImageBalloon)
      setShowGradient(false)
    }, 3000)
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-6 px-0 py-10">
      <h1 className="text-3xl font-bold">Paint Contextual toolbar</h1>
      <p className="text-muted-foreground max-w-2xl text-center">
        A prototype of dynamic contextual quick action toolbar built with Framer Motion and React.
        Similar to the one designed for Paint. Click on the generative fill button and then the
        create button to see the prototype.
      </p>
      <div className="relative flex h-[640px] w-[800px] justify-center">
        <div className="absolute top-[525px] z-10">
          <ToolbarDynamic onCreateClick={handleCreateClick} />
        </div>
        <svg
          className="absolute top-[124px] left-[246px] z-0"
          width="323"
          height="405"
          viewBox="-10 -10 323 405"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="35%" stopColor="#3D91FF" />
              <stop offset="70%" stopColor="#6CEBE2" />
              <stop offset="92%" stopColor="#9270FF" />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 0.5 0.5"
                to="360 0.5 0.5"
                dur="2s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="301" height="383" fill="none" stroke="black" strokeWidth="2" />
          <rect
            x="1"
            y="1"
            width="301"
            height="383"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4,4"
            className="animate-[marching-ants_0.5s_linear_infinite]"
          />
          {showGradient && (
            <rect
              x="1"
              y="1"
              width="301"
              height="383"
              fill="none"
              stroke="url(#gradientStroke)"
              strokeWidth="12"
            />
          )}
          {/* Grippers - positioned outside the border */}
          {!showGradient && (
            <>
              {/* Top-left corner */}
              <rect
                x="-10"
                y="-10"
                width="8"
                height="8"
                fill="white"
                stroke="grey"
                strokeWidth="2"
              />
              {/* Top-middle */}
              <rect
                x="147.5"
                y="-10"
                width="8"
                height="8"
                fill="white"
                stroke="grey"
                strokeWidth="2"
              />
              {/* Top-right corner */}
              <rect
                x="305"
                y="-10"
                width="8"
                height="8"
                fill="white"
                stroke="grey"
                strokeWidth="2"
              />
              {/* Middle-right */}
              <rect
                x="305"
                y="188.5"
                width="8"
                height="8"
                fill="white"
                stroke="grey"
                strokeWidth="2"
              />
              {/* Bottom-right corner */}
              <rect
                x="305"
                y="387"
                width="8"
                height="8"
                fill="white"
                stroke="grey"
                strokeWidth="2"
              />
              {/* Bottom-middle */}
              <rect
                x="147.5"
                y="387"
                width="8"
                height="8"
                fill="white"
                stroke="grey"
                strokeWidth="2"
              />
              {/* Bottom-left corner */}
              <rect
                x="-10"
                y="387"
                width="8"
                height="8"
                fill="white"
                stroke="grey"
                strokeWidth="2"
              />
              {/* Middle-left */}
              <rect
                x="-10"
                y="188.5"
                width="8"
                height="8"
                fill="white"
                stroke="grey"
                strokeWidth="2"
              />
            </>
          )}
        </svg>
        <img
          src={currentImage}
          alt="Paint canvas"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
