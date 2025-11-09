'use client'

import {
  Blur24Regular,
  CircleImage24Regular,
  Cursor20Regular,
  Edit20Regular,
  Eraser24Regular,
  InkingTool24Regular,
  Lasso24Regular,
  PaintBucket24Regular,
  ShapeOrganic20Regular,
  Shapes24Regular,
} from '@fluentui/react-icons'

import { Card } from '../components/UI/card'
import { Toggle } from '../components/UI/toggle'
import React, { useRef, useEffect } from 'react'
import { Button } from '../components/UI/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/UI/tooltip'
import { StyledToggle } from './Styled-Toggle'

import { ToggleGroup, ToggleGroupItem } from '@/components/StyledToggleGroup'

type ToolButtonProps = {
  tool: string
  isActive: boolean
  onClick: () => void
}

export function ToolButton({ tool, isActive, onClick }: ToolButtonProps) {
  const renderIcon = () => {
    switch (tool) {
      case 'brush':
        return <InkingTool24Regular />
      case 'eraser':
        return <Eraser24Regular />
      case 'smudge':
        return <Blur24Regular />
      case 'pencil':
        return <Edit20Regular />
      case 'select':
        return <Cursor20Regular />
      case 'shapes':
        return <Shapes24Regular />
      case 'fill':
        return <PaintBucket24Regular />
      case 'freehand':
        return <ShapeOrganic20Regular />
      default:
        return null
    }
  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <StyledToggle
              pressed={isActive}
              onPressedChange={(pressed) => {
                // Only call onClick if trying to activate (not deactivate)
                // This ensures one tool is always selected
                if (pressed) {
                  onClick()
                }
              }}
              data-active={isActive ? 'true' : 'false'}
              className=""
            >
              {renderIcon()}
            </StyledToggle>
          </TooltipTrigger>
          <TooltipContent>
            <p> {tool} </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* <ToggleGroup type="single" value={tool} aria-label={tool} className="p-0">
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild onClick={onClick}>
                <StyledToggle className="h-16 w-20 p-5">
                {renderIcon()}
                </StyledToggle>
              </TooltipTrigger>
              <TooltipContent>
                <p> {tool} </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ToggleGroupItem>
      </ToggleGroup> */}
    </>
  )
}
