import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          'relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-[10px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[10px]',
          'border border-white/10 bg-[#424a5a]',
          '[box-shadow:1.5px_1.5px_1.5px_0px_inset_rgba(0,0,0,0.11),-1.5px_-1.5px_1.5px_0px_inset_rgba(255,255,255,0.11)]'
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            'absolute rounded-full data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
            'bg-gradient-to-r from-[rgb(14,125,208)] via-[rgb(64,153,214)] to-[rgb(138,196,228)]',
            '[box-shadow:0px_-6px_18px_0px_inset_rgba(0,0,0,0.25),0px_6px_18px_0px_inset_rgba(255,255,255,0.25)]'
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={cn(
            'relative block size-[30px] shrink-0 overflow-hidden rounded-full',
            'bg-[#393939]',
            '[box-shadow:0.75px_0.75px_1.5px_0px_rgba(6,34,55,0.15),-0.5px_-0.5px_1.5px_0px_inset_rgba(0,0,0,0.03),0.5px_0.5px_1.5px_0px_inset_rgba(255,255,255,0.15),0px_0px_2px_0px_inset_rgba(23,122,196,0.8)]',
            'transition-transform hover:scale-105 focus-visible:scale-105 focus-visible:outline-hidden',
            'disabled:pointer-events-none disabled:opacity-50'
          )}
        >
          <div
            className="absolute inset-[6px] rounded-full"
            style={{
              background:
                'radial-gradient(circle at 30% 20%, rgba(138,196,228,1) 0%, rgba(116,183,222,1) 29%, rgba(90,168,218,1) 44%, rgba(64,153,214,1) 58%, rgba(39,139,211,1) 77%, rgba(14,125,208,1) 95%), radial-gradient(circle at 50% 50%, rgba(138,196,228,0) 70%, rgba(75,148,198,0.2) 85%, rgba(43,124,182,0.3) 93%, rgba(11,101,167,0.4) 100%)',
            }}
          />
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
