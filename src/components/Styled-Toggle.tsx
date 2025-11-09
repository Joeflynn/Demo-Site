import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const toggleVariants = cva(
  'inline-flex items-center justify-center gap-2 p-3 rounded-[13px] border border-transparent disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-7 [&_svg]:shrink-0 transition-all outline-none',
  {
    variants: {
      variant: {
        default: [
          // Rest state - transparent background, #CCDDFF at 40% opacity with subtle inner shadow
          'bg-transparent [&_svg]:text-[#CCDDFF] [&_svg]:opacity-40 [&_svg]:drop-shadow-[0_2px_0.5px_rgba(0,0,0,0.08)]',
          // Hover state - backdrop blur with semi-transparent fill, #CCDDFF at 90% opacity
          'hover:backdrop-blur-[25px] hover:bg-white/5 hover:border-white/[0.03] hover:[&_svg]:opacity-90',
          // Selected state - gradient background with border, #3377FF at full opacity with glow effects
          'data-[state=on]:bg-gradient-to-b data-[state=on]:from-[rgb(66,74,90)] data-[state=on]:to-[rgb(46,52,64)] data-[state=on]:border-white/5 data-[state=on]:[&_svg]:text-[#3377FF] data-[state=on]:[&_svg]:opacity-100 data-[state=on]:[&_svg]:drop-shadow-[0_3px_6px_rgba(46,52,64,1)] data-[state=on]:[&_svg]:drop-shadow-[0_0_4px_rgba(51,119,255,0.4)]',
          // Also add active state for testing
          'data-[active=true]:bg-gradient-to-b data-[active=true]:from-[rgb(66,74,90)] data-[active=true]:to-[rgb(46,52,64)] data-[active=true]:border-white/20 data-[active=true]:[&_svg]:text-[#3377FF] data-[active=true]:[&_svg]:opacity-100 data-[active=true]:[&_svg]:drop-shadow-[0_3px_6px_rgba(46,52,64,1)] data-[active=true]:[&_svg]:drop-shadow-[0_0_4px_rgba(51,119,255,0.4)]',
          // Disabled state - #CCDDFF at 40% opacity, no shadows
          'disabled:bg-transparent disabled:[&_svg]:opacity-40 disabled:[&_svg]:drop-shadow-none',
        ],
      },
      size: {
        default: 'p-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function StyledToggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export { StyledToggle, toggleVariants }
