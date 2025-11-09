import { LayerPanel } from '@/components/LayersPanel'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/UI/popover'
import { ScrollArea } from '@/components/UI/scroll-area'
import { Separator } from '@/components/UI/separator'
import { Toggle } from '@/components/UI/toggle'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/UI/tooltip'
import {
  Add16Filled,
  AddCircle24Regular,
  ArrowCircleDown16Regular,
  ArrowCircleUp16Regular,
  Layer24Regular,
} from '@fluentui/react-icons'
import { TrashIcon } from 'lucide-react'
import { Button } from '@/components/UI/button'
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from '../../components/motion-primitives/morphing-popover'

// ...existing code...
export default function Demo4() {
  return (
    <div>
      <h1>Layer Panel</h1>
      <p>This is Demo 4 page.</p>
      {/* 
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className="pointer-events-auto size-10 p-1">
            <Button aria-label="New layer">
              <Add16Filled className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p> New layer </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className="pointer-events-auto size-10 p-1">
            <Button aria-label="New layer">
              <ArrowCircleUp16Regular className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p> Layer Up</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className="pointer-events-auto size-10 p-1">
            <Button aria-label="New layer">
              <ArrowCircleDown16Regular className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p> Layer Down </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className="pointer-events-auto size-10 p-1">
            <Button aria-label="New layer">
              <TrashIcon className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p> Delete layer </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}
      <div className="flex h-full w-full content-center justify-center p-20">
        {/* <MorphingPopover>
          <MorphingPopoverTrigger>
            <Toggle className="h-10 w-10 p-2" aria-label="Layer toggle">
              <Layer24Regular className="h-7 w-7" />
            </Toggle>
          </MorphingPopoverTrigger>
          <div className="flex h-fit w-fit flex-col items-center justify-center rounded-lg p-1">
            <MorphingPopoverContent className="grid gap-2">
              {' '}
              <div className="mx-auto flex h-fit w-fit flex-col items-center justify-center gap-0 rounded-lg p-0">
                <ScrollArea className="mx-auto flex h-[600px] w-[128px] items-center justify-center p-0">
                  <LayerPanel className="pointer-events-auto mx-auto h-fit" />
                </ScrollArea>
                <Separator className="h-[1px] w-full" />
                <div className="mx-auto flex w-full flex-row items-center justify-center py-1">
                  <Button className="h-12 w-12 p-1" variant="ghost" size="icon">
                    <AddCircle24Regular className="h-9 w-9" />
                  </Button>
                </div>
              </div>
            </MorphingPopoverContent>
          </div>
        </MorphingPopover> */}
        <Popover>
          <PopoverTrigger className="pointer-events-auto">
            <Toggle className="h-12 w-12 p-0" aria-label="Layer toggle">
              <Layer24Regular className="h-7 w-7 p-0" />
            </Toggle>
          </PopoverTrigger>
          <PopoverContent className="relative mr-16 w-32 rounded-xl px-0 pt-0 pb-0">
            <div className="mx-0 flex h-fit w-fit flex-col items-center justify-center gap-0 rounded-lg p-0">
              <ScrollArea className="mx-auto flex h-[600px] w-[128px] items-center justify-center p-0">
                <LayerPanel className="pointer-events-auto mx-auto h-fit" />
              </ScrollArea>
              <Separator className="h-[1px] w-full" />
              <div className="m-auto flex h-fit w-full flex-row items-center justify-center py-1">
                <Button className="h-10 w-10 p-1" variant="ghost" size="icon">
                  <AddCircle24Regular className="h-9 w-9" />
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
