import CanvasWrapper from '@/components/CanvasWrapper'
import Canvas from '../components/Canvas'

import React, { useEffect, useState, useRef, use } from 'react'

import { parseColor, useColorSliderState } from '@react-stately/color'
import type { Color } from 'react-stately'
import colorData from '../assets/colorpalettes.json'
import UseEyeDropper from '../components/UseEyedropper'
import hexToHsv from '../lib/ColorUtils'
import ColorArea from '../components/ColorArea'
import ColorSwatch from '../components/ColorSwatch'
import { ColorWheel } from '../components/ColorWheel'
import ColorSelectorWrapper from '../components/ColorSelectorWrapper'
import { Circle20Filled, CircleEdit20Regular, Eyedropper24Filled } from '@fluentui/react-icons'
import { Toggle } from '@/components/UI/toggle'
import { Button } from '@/components/UI/button'
import { Card } from '@/components/UI/card'
import { ToolButton } from '@/components/ToolButton'
import { Slider } from '@/components/UI/slider'
import { StyledCard } from '@/components/StyledCard'
import { StyledToggle } from '@/components/Styled-Toggle'

import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from '../../components/motion-primitives/morphing-popover'

import * as motion from 'motion/react-client'

// export function MorphingPopoverBasic() {
//   return (
// <MorphingPopover>
//   <MorphingPopoverTrigger>
//           <Toggle
//             className="pointer-events-auto p-0"
//             onClick={() => setShowColorSelector(!showColorSelector)}
//           >
//             <div className="my-auto flex h-11 w-11 items-center justify-center p-2">
//               <div
//                 className={`flex h-8 w-8 flex-row items-center justify-center rounded-full border border-[#5683DE] p-0 ${showColorSelector ? 'border-2' : ''}`}
//               >
//                 <div
//                   className="border-border h-7 w-7 rounded-full border"
//                   style={{
//                     backgroundColor: color.toString('css'),
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </Toggle>
//   </MorphingPopoverTrigger>
//             <div className="flex h-fit w-fit flex-col items-center justify-center rounded-lg p-1">
//   <MorphingPopoverContent className='grid gap-4' children={undefined}>
//                     <div className="flex h-6 w-full content-center justify-between py-0">
//               <h4 className="leading-none font-medium">Color</h4>
//               <div
//                 className="border-border h-6 w-8 rounded-md border"
//                 style={{
//                   backgroundColor: color.toString('css'),
//                 }}
//               ></div>
//             </div>
//             <div className="inset-0 z-10 h-[0px] w-[248px]">
//               <div className="relative h-[248px] w-[248px] p-0">
//                 <ColorWheel value={color} onChange={setColor} />
//               </div>
//             </div>
//             <div className="inset-0 mx-auto mt-[-16px] flex h-[248px] w-[248px] content-center justify-center p-[57px] align-middle">
//               <div className="inset-0 z-20 h-[134px] w-[134px] p-[0px]">
//                 <ColorArea
//                   aria-labelledby="hsb-label-id-1"
//                   value={color}
//                   onChange={setColor}
//                   isDisabled={false}
//                   xChannel={sChannel}
//                   yChannel={bChannel}
//                 />
//               </div>
//             </div>
//             <div className="my-auto flex w-full content-center items-center justify-between gap-4 px-0 py-2">
//               <div className="my-auto flex w-fit content-center items-center justify-between gap-2 py-2">
//                 <ColorSwatch
//                   value={color.withChannelValue('alpha', 1)}
//                   aria-label={`current color swatch: ${color.toString('hsl')}`}
//                 />
//                 <Button onClick={pickColor} variant="ghost" size="icon" className="h-8 w-8">
//                   <Eyedropper24Filled className="h5 w-5" />
//                 </Button>
//               </div>
//             </div>
//             <div className="mx-auto grid w-full grid-cols-7 gap-1 py-2">
//               {colorData.colors.map((color, index) => {
//                 const [h, s, b] = color.hsb.split(', ')
//                 return (
//                   <Button
//                     key={index}
//                     className="border-border h-8 w-8 border"
//                     style={{ backgroundColor: color.hex }}
//                     onClick={() => setColor(parseColor(`hsb(${h}, ${s}%, ${b}%)`))}
//                   />
//                 )
//               })}
//             </div>

//   </MorphingPopoverContent>
//               </div>

// </MorphingPopover>
//   );
// }

export default function Demo1() {
  const [brushFlow, setBrushFlow] = useState(0.25)
  let [brushSize, setBrushSize] = React.useState(200)
  let [brushSoftness, setBrushSoftness] = React.useState(0.5)
  let [brushOpacity, setBrushOpacity] = React.useState(1.0)
  let [brushRotation, setBrushRotation] = React.useState(0.0)
  let [brushSpacing, setBrushSpacing] = React.useState(0.4)
  let [brushBlendMode, setBrushBlendMode] = React.useState('normal')
  let [brushFlowJitter, setBrushFlowJitter] = React.useState(0.0)
  let [brushSizeJitter, setBrushSizeJitter] = React.useState(0.01)
  let [brushRotationJitter, setBrushRotationJitter] = React.useState(0.0)
  let [brushScatter, setBrushScatter] = React.useState(0.0)
  let [brushTangentJitter, setBrushTangentJitter] = React.useState(0.01)
  let [brushNormalJitter, setBrushNormalJitter] = React.useState(0.01)
  let [pressureSize, setPressureSize] = React.useState(true)
  let [pressureOpacity, setPressureOpacity] = React.useState(true)
  let [brushShape, setBrushShape] = React.useState(1)

  let [fillTolerance, setFillTolerance] = React.useState(20)

  const [canvasWidth, setCanvasWidth] = useState(1200)
  const [canvasHeight, setCanvasHeight] = useState(800)

  let [color, setColor] = React.useState(parseColor('hsba(219, 58%, 93%, 0.75)'))

  let [colorBG, setColorBG] = React.useState(parseColor('hsba(0, 0%, 100%, 1)'))

  let [endColor, setEndColor] = React.useState(color)
  let [hChannel, sChannel, bChannel] = color.getColorChannels()

  const { color: eyedropperColor, error, isSupported, pickColor } = UseEyeDropper()

  const handleColorChange = (newColor: Color | null) => {
    if (newColor !== null) {
      setColor(newColor)
    }
  }

  const tools = ['brush', 'eraser', 'smudge', 'fill']
  const [activeTool, setActiveTool] = useState<string>(tools[0])

  const [isAltKeyDown, setAltKeyDown] = useState<boolean>(false)
  const [isShiftKeyDown, setShiftKeyDown] = useState<boolean>(false)

  let [shapeStrokeColor, setShapeStrokeColor] = React.useState('0x000000')
  let [shapeStrokeWidth, setShapeStrokeWidth] = React.useState(5)
  let [shapeStrokeAlpha, setShapeStrokeAlpha] = React.useState(1)
  let [shapeFillColor, setShapeFillColor] = React.useState('0xfff000')
  let [shapeFillAlpha, setShapeFillAlpha] = React.useState(1)
  let [shapeCornerRadius, setShapeCornerRadius] = React.useState(12)
  let [shapeInnerRadius, setShapeInnerRadius] = React.useState(24)
  let [shapeOuterRadius, setShapeOuterRadius] = React.useState(48)
  let [shapePointCount, setShapePointCount] = React.useState(7)
  let [shapeSidesCount, setShapeSidesCount] = React.useState(5)
  let [shapeHoleInnerRadius, setShapeHoleInnerRadius] = React.useState(64)
  let [shapeHoleOuterRadius, setShapeHoleOuterRadius] = React.useState(48)
  let [shapeType, setShapeType] = React.useState('rectangle')

  useEffect(() => {
    if (eyedropperColor) {
      const hsv = hexToHsv(eyedropperColor)
      if (hsv && !isNaN(hsv.h) && !isNaN(hsv.s) && !isNaN(hsv.v)) {
        setColor(parseColor(`hsb(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`))
      }
    }
  }, [eyedropperColor])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        pickColor()
        console.log('Color picker activated')
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [pickColor])

  const [showColorSelector, setShowColorSelector] = useState(false)

  const [shouldExport, setShouldExport] = useState(false)

  const handleExport = () => {
    setShouldExport(true)
  }

  const [shouldUndo, setShouldUndo] = useState(false)

  const handleUndo = () => {
    setShouldUndo(true)
  }

  const [shouldRedo, setShouldRedo] = useState(false)

  const handleRedo = () => {
    setShouldRedo(true)
  }

  const [shouldZoomIn, setShouldZoomIn] = useState(false)

  const handleZoomIn = () => {
    setShouldZoomIn(true)
  }

  const [shouldZoomOut, setShouldZoomOut] = useState(false)

  const handleZoomOut = () => {
    setShouldZoomOut(true)
  }

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col justify-center gap-4">
        <CanvasWrapper>
          <Canvas
            canvasWidth={canvasWidth}
            canvasHeight={canvasHeight}
            brushFlow={brushFlow}
            brushSoftness={brushSoftness}
            pressureOpacity={pressureOpacity}
            pressureSize={pressureSize}
            brushColor={color.toString('hex')}
            brushWidth={brushSize}
            canvasColor={'#ffffff'}
            activeTool={activeTool}
            brushOpacity={brushOpacity}
            brushRotation={brushRotation}
            brushSpacing={brushSpacing}
            brushFlowJitter={brushFlowJitter}
            brushSizeJitter={brushSizeJitter}
            brushRotationJitter={brushRotationJitter}
            brushScatter={brushScatter}
            brushTangentJitter={brushTangentJitter}
            brushNormalJitter={brushNormalJitter}
            shouldExport={shouldExport}
            onExportDone={() => setShouldExport(false)}
            shouldUndo={shouldUndo}
            onUndoDone={() => setShouldUndo(false)}
            shouldRedo={shouldRedo}
            onRedoDone={() => setShouldRedo(false)}
            shouldZoomIn={shouldZoomIn}
            onZoomInDone={() => setShouldZoomIn(false)}
            shouldZoomOut={shouldZoomOut}
            onZoomOutDone={() => setShouldZoomOut(false)}
            shapeStrokeColor={shapeStrokeColor}
            shapeStrokeWidth={shapeStrokeWidth}
            shapeStrokeAlpha={shapeStrokeAlpha}
            shapeFillColor={shapeFillColor}
            shapeFillAlpha={shapeFillAlpha}
            shapeCornerRadius={shapeCornerRadius}
            shapeInnerRadius={shapeInnerRadius}
            shapeOuterRadius={shapeOuterRadius}
            shapePointCount={shapePointCount}
            shapeSidesCount={shapeSidesCount}
            shapeHoleInnerRadius={shapeHoleInnerRadius}
            shapeHoleOuterRadius={shapeHoleOuterRadius}
            shapeType={shapeType}
            isAltKeyDown={isAltKeyDown}
            isShiftKeyDown={isShiftKeyDown}
            fillTolerance={fillTolerance}
            brushShape={brushShape}
            isActive={true}
            onCanvasReady={(canvas) => {
              // Canvas is ready
            }}
          />
        </CanvasWrapper>
        <StyledCard className="mx-auto flex h-fit w-fit content-center items-center justify-between p-2">
          <div className="pointer-events-auto my-auto flex w-full content-center items-center justify-between gap-2 p-0">
            <Slider
              onValueChange={(value) => setBrushSize(value[0])}
              defaultValue={[50]}
              max={250}
              step={1}
              className="w-[400px] px-4"
            />

            {tools.map((tool) => (
              <ToolButton
                key={tool}
                tool={tool}
                isActive={tool === activeTool}
                onClick={() => setActiveTool(tool)}
              />
            ))}
            <div className="toolbar">
              {/* <Toggle
                className="pointer-events-auto p-0"
                onClick={() => setShowColorSelector(!showColorSelector)}
              >
                <div className="my-auto flex h-11 w-11 items-center justify-center p-2">
                  <div
                    className={`flex h-8 w-8 flex-row items-center justify-center rounded-full border border-[#5683DE] p-0 ${showColorSelector ? 'border-2' : ''}`}
                  >
                    <div
                      className="border-border h-7 w-7 rounded-full border"
                      style={{
                        backgroundColor: color.toString('css'),
                      }}
                    ></div>
                  </div>
                </div>
              </Toggle> */}
              <MorphingPopover>
                <MorphingPopoverTrigger>
                  <Toggle
                    className="pointer-events-auto p-0"
                    onClick={() => setShowColorSelector(!showColorSelector)}
                  >
                    <div className="my-auto flex h-11 w-11 items-center justify-center p-2">
                      <div
                        className={`flex h-8 w-8 flex-row items-center justify-center rounded-full border border-[#5683DE] p-0 ${showColorSelector ? 'border-2' : ''}`}
                      >
                        <div
                          className="border-border h-7 w-7 rounded-full border"
                          style={{
                            backgroundColor: color.toString('css'),
                          }}
                        ></div>
                      </div>
                    </div>
                  </Toggle>
                </MorphingPopoverTrigger>
                <div className="flex h-fit w-fit flex-col items-center justify-center rounded-lg p-1">
                  <MorphingPopoverContent className="grid gap-2">
                    <div className="flex h-6 w-full content-center justify-between p-3">
                      <h4 className="leading-none font-medium">Color</h4>
                      <div
                        className="border-border h-6 w-8 rounded-md border"
                        style={{
                          backgroundColor: color.toString('css'),
                        }}
                      ></div>
                    </div>
                    <div className="inset-0 z-10 h-[0px] w-[248px]">
                      <div className="relative mx-auto h-[248px] w-[248px] p-0">
                        <ColorWheel value={color} onChange={setColor} />
                      </div>
                    </div>
                    <div className="inset-0 mx-auto mt-[-16px] flex h-[248px] w-[248px] content-center justify-center p-[57px] align-middle">
                      <div className="inset-0 z-20 h-[134px] w-[134px] p-[0px]">
                        <ColorArea
                          aria-labelledby="hsb-label-id-1"
                          value={color}
                          onChange={setColor}
                          isDisabled={false}
                          xChannel={sChannel}
                          yChannel={bChannel}
                        />
                      </div>
                    </div>
                    <div className="my-auto flex w-full content-center items-center justify-between gap-4 px-0 py-2">
                      <div className="my-auto flex w-fit content-center items-center justify-between gap-2 py-2">
                        <ColorSwatch
                          value={color.withChannelValue('alpha', 1)}
                          aria-label={`current color swatch: ${color.toString('hsl')}`}
                        />
                        <Button onClick={pickColor} variant="ghost" size="icon" className="h-8 w-8">
                          <Eyedropper24Filled className="h5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="mx-auto grid w-full grid-cols-7 gap-2 py-2">
                      {colorData.colors.map((color, index) => {
                        const [h, s, b] = color.hsb.split(', ')
                        return (
                          <Button
                            key={index}
                            className="border-border h-8 w-8 border"
                            style={{ backgroundColor: color.hex }}
                            onClick={() => setColor(parseColor(`hsb(${h}, ${s}%, ${b}%)`))}
                          />
                        )
                      })}
                    </div>
                  </MorphingPopoverContent>
                </div>
              </MorphingPopover>
            </div>

            {/* {showColorSelector && (
              <ColorSelectorWrapper>
                <div className="flex h-6 w-full content-center justify-between py-0">
                  <h4 className="leading-none font-medium">Color</h4>
                  <div
                    className="border-border h-6 w-8 rounded-md border"
                    style={{
                      backgroundColor: color.toString('css'),
                    }}
                  ></div>
                </div>
                <div className="inset-0 z-10 h-[0px] w-[248px]">
                  <div className="relative h-[248px] w-[248px] p-0">
                    <ColorWheel value={color} onChange={setColor} />
                  </div>
                </div>
                <div className="inset-0 mx-auto mt-[-16px] flex h-[248px] w-[248px] content-center justify-center p-[57px] align-middle">
                  <div className="inset-0 z-20 h-[134px] w-[134px] p-[0px]">
                    <ColorArea
                      aria-labelledby="hsb-label-id-1"
                      value={color}
                      onChange={setColor}
                      isDisabled={false}
                      xChannel={sChannel}
                      yChannel={bChannel}
                    />
                  </div>
                </div>
                <div className="my-auto flex w-full content-center items-center justify-between gap-4 px-0 py-2">
                  <div className="my-auto flex w-fit content-center items-center justify-between gap-2 py-2">
                    <ColorSwatch
                      value={color.withChannelValue('alpha', 1)}
                      aria-label={`current color swatch: ${color.toString('hsl')}`}
                    />
                    <Button onClick={pickColor} variant="ghost" size="icon" className="h-8 w-8">
                      <Eyedropper24Filled className="h5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="mx-auto grid w-full grid-cols-7 gap-1 py-2">
                  {colorData.colors.map((color, index) => {
                    const [h, s, b] = color.hsb.split(', ')
                    return (
                      <Button
                        key={index}
                        className="border-border h-8 w-8 border"
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setColor(parseColor(`hsb(${h}, ${s}%, ${b}%)`))}
                      />
                    )
                  })}
                </div>
              </ColorSelectorWrapper>
            )} */}
          </div>
        </StyledCard>
      </div>
    </div>
  )
}
