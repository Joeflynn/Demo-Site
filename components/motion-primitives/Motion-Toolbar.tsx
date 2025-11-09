'use client'
import React, { useRef, useState } from 'react'
import { motion, MotionConfig } from 'motion/react'
import useClickOutside from './useClickOutside'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/UI/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/UI/tooltip'

const transition = {
  type: 'spring' as const,
  bounce: 0.1,
  duration: 0.2,
}

function ButtonMotion({
  children,
  onClick,
  disabled,
  ariaLabel,
}: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}) {
  return (
    <button
      className="relative flex h-9 w-9 shrink-0 scale-100 appearance-none items-center justify-center rounded-md text-zinc-500 transition-colors select-none hover:bg-zinc-900/10 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default function ToolbarDynamic({ onCreateClick }: { onCreateClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCreateDisabled, setIsCreateDisabled] = useState(false)
  const [showNewButton, setShowNewButton] = useState(false)
  const [showThirdButton, setShowThirdButton] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useClickOutside(containerRef as React.RefObject<HTMLElement>, () => {
    setIsOpen(false)
  })

  const handleCreateClick = () => {
    setIsCreateDisabled(true)
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)

    if (newClickCount === 1) {
      setShowNewButton(true)
    } else if (newClickCount === 2) {
      setShowThirdButton(true)
    }

    onCreateClick?.()

    setTimeout(() => {
      setIsCreateDisabled(false)
    }, 3000)
  }

  return (
    <MotionConfig transition={transition}>
      <div className="p-4" ref={containerRef}>
        <div className="h-13 w-full rounded-xl border border-black/5 bg-[#F6F6F6]">
          <motion.div
            animate={{
              // @todo: here I want to remove the width
              width: isOpen ? '520px' : '132px',
            }}
            initial={false}
          >
            <div className="overflow-hidden p-2">
              {!isOpen ? (
                <div className="flex space-x-1">
                  <Tooltip>
                    <TooltipTrigger>
                      <ButtonMotion ariaLabel="Generative erase">
                        <img
                          src="/Demo-Site/SVGs/icons/16x16/MagicEraser.svg"
                          alt=""
                          className="h-5 w-5"
                        />
                      </ButtonMotion>
                    </TooltipTrigger>
                    <TooltipContent>Generative erase</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <ButtonMotion ariaLabel="Remove background">
                        <img
                          src="/Demo-Site/SVGs/icons/16x16/BG_Removal.svg"
                          alt=""
                          className="h-5 w-5"
                        />
                      </ButtonMotion>
                    </TooltipTrigger>
                    <TooltipContent>Remove background</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <ButtonMotion onClick={() => setIsOpen(true)} ariaLabel="Generative fill">
                        <img
                          src="/Demo-Site/SVGs/icons/16x16/Genrative-Fill.svg"
                          alt=""
                          className="h-5 w-5"
                        />
                      </ButtonMotion>
                    </TooltipTrigger>
                    <TooltipContent>Generative fill</TooltipContent>
                  </Tooltip>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Tooltip>
                    <TooltipTrigger>
                      <ButtonMotion onClick={() => setIsOpen(false)} ariaLabel="Back">
                        <ArrowLeft className="h-5 w-5" />
                      </ButtonMotion>
                    </TooltipTrigger>
                    <TooltipContent>Back</TooltipContent>
                  </Tooltip>
                  <div className="flew-row relative flex w-full gap-3">
                    <input
                      className="h-9 w-full rounded-lg border border-zinc-950/10 bg-transparent p-2 text-zinc-900 placeholder-zinc-500 focus:outline-hidden"
                      autoFocus
                      //   placeholder="Describe what you would like to add "
                      defaultValue="A hot air balloon"
                    />

                    {showThirdButton && (
                      <div className="flex h-5 space-x-2 align-middle">
                        <Tooltip>
                          <TooltipTrigger>
                            <ButtonMotion ariaLabel="Previous">
                              <ChevronLeft className="h-5 w-5" />
                            </ButtonMotion>
                          </TooltipTrigger>
                          <TooltipContent>Previous</TooltipContent>
                        </Tooltip>
                        {/* <p className="text-primary-foreground line-clamp-1 h-5 w-10 align-text-bottom text-xs">
                          {' '}
                          1 of 2
                        </p> */}
                        <Tooltip>
                          <TooltipTrigger>
                            <ButtonMotion ariaLabel="Next">
                              <ChevronRight className="h-5 w-5" />
                            </ButtonMotion>
                          </TooltipTrigger>
                          <TooltipContent>Next</TooltipContent>
                        </Tooltip>
                      </div>
                    )}
                    {showNewButton && (
                      <Tooltip>
                        <TooltipTrigger>
                          <ButtonMotion onClick={handleCreateClick} ariaLabel="Try again">
                            <img
                              src="/Demo-Site/SVGs/icons/16x16/Refresh.svg"
                              alt=""
                              className="h-5 w-5"
                            />{' '}
                          </ButtonMotion>
                        </TooltipTrigger>
                        <TooltipContent>Try again</TooltipContent>
                      </Tooltip>
                    )}
                    {showNewButton && (
                      <Tooltip>
                        <TooltipTrigger>
                          <Button
                            onClick={() => setIsOpen(false)}
                            disabled={isCreateDisabled}
                            className="text-accent-foreground bg-[#005FB8] px-4 text-sm font-normal hover:bg-[#0051A3] focus-visible:ring-2 focus-visible:ring-[#0051A3]/50 disabled:pointer-events-none disabled:opacity-50"
                          >
                            Looks good
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Looks good</TooltipContent>
                      </Tooltip>
                    )}

                    {!showNewButton && (
                      <Button
                        onClick={handleCreateClick}
                        disabled={isCreateDisabled}
                        className="text-accent-foreground bg-[#005FB8] px-6 text-sm font-normal hover:bg-[#0051A3] focus-visible:ring-2 focus-visible:ring-[#0051A3]/50 disabled:pointer-events-none disabled:opacity-50"
                      >
                        Create
                      </Button>
                    )}

                    <div className="absolute top-0 right-1 flex h-full items-center justify-center"></div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  )
}
