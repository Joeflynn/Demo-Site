import React, { type ReactNode } from 'react'
import { StyledCard } from '@/components/StyledCard'

type Props = {
  children: ReactNode
}

const ColorSelectorWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="pointer-events-none absolute top-0 right-0 z-10 pt-2 pr-16">
        <StyledCard className="pointer-events-auto w-[280px] p-2">
          <div className="flex h-fit w-fit flex-col items-center justify-center rounded-lg p-1">
            <div className="grid gap-4">
              {/* <div className="space-y-2">
                <h4 className="font-medium leading-none">Color</h4>
              </div> */}
              <div className="mx-auto grid gap-4">{children}</div>
            </div>
          </div>
        </StyledCard>
      </div>
    </>
  )
}

export default ColorSelectorWrapper
