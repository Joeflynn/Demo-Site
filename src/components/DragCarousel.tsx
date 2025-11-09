import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { wrap } from 'popmotion'

import { TextureButton } from '@/components/UI/texture-button'

let images = [
  '/Demo-Site/Images/glassanimals.jpg',
  '/Demo-Site/Images/katerina_street.jpg',
  '/Demo-Site/Images/nagoya_skytree.jpg',
  '/Demo-Site/Images/slu_architecture.jpg',
  '/Demo-Site/Images/yo_bumpershoot.jpg',
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export default function DragCarousel() {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const navigateToIndex = (newIndex: number) => {
    setPage((prev) => {
      const currentPage = prev[0]
      const direction = newIndex > currentPage ? 1 : newIndex < currentPage ? -1 : 0
      return [newIndex, direction]
    })
  }

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        if (imageIndex > 0) {
          navigateToIndex(imageIndex - 1)
        }
      } else if (e.key === 'ArrowRight') {
        if (imageIndex < images.length - 1) {
          navigateToIndex(imageIndex + 1)
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [imageIndex])

  return (
    <div className="border-border/60 relative inset-0 h-full overflow-hidden rounded-lg border bg-black shadow-lg shadow-neutral-950/10">
      <div className="1g: 1g:h-auto relative flex flex-col overflow-hidden">
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
          <div className="flex h-full flex-col justify-between">
            <div className="relative mt-0 overflow-hidden md:mt-0">
              <div className="relative m-0 flex h-screen max-h-[70vh] w-full items-center justify-center overflow-hidden p-0">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={page}
                    custom={direction}
                    src={images[imageIndex]}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x)

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1)
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1)
                      }
                    }}
                    className="absolute inset-0 h-full w-full shrink-0 object-cover"
                  />
                </AnimatePresence>
              </div>

              <AnimatePresence initial={false}>
                {imageIndex > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: 'none' }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-1/2 left-4 z-30 -mt-4 flex size-8 items-center justify-center"
                    onClick={() => navigateToIndex(imageIndex - 1)}
                  >
                    <TextureButton variant="icon" size="icon" className="size-16">
                      <ChevronLeftIcon className="size-8 p-1" />
                    </TextureButton>
                  </motion.button>
                )}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {imageIndex + 1 < images.length && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: 'none' }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-1/2 right-4 z-30 -mt-4 flex size-8 items-center justify-center"
                    onClick={() => navigateToIndex(imageIndex + 1)}
                  >
                    <TextureButton variant="icon" size="icon" className="size-16">
                      <ChevronRightIcon className="size-8 p-1" />
                    </TextureButton>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <Thumbnails index={imageIndex} navigateToIndex={navigateToIndex} />
          </div>
        </MotionConfig>
      </div>
    </div>
  )
}

const COLLAPSED_ASPECT_RATIO = 2 / 3
const FULL_ASPECT_RATIO = 3 / 2
const MARGIN = 12
const GAP = 2

function Thumbnails({
  index,
  navigateToIndex,
}: {
  index: number
  navigateToIndex: (value: number) => void
}) {
  return (
    <div className="flex h-24 w-full justify-center overflow-hidden">
      <motion.div
        initial={false}
        animate={{
          x: `-${
            index * 100 * (COLLAPSED_ASPECT_RATIO / FULL_ASPECT_RATIO) + MARGIN + index * GAP
          }%`,
        }}
        style={{
          aspectRatio: FULL_ASPECT_RATIO,
          gap: `${GAP}%`,
        }}
        className="flex min-w-0"
      >
        {images.map((image, i) => (
          <motion.button
            onClick={() => navigateToIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                aspectRatio: FULL_ASPECT_RATIO,
                marginLeft: `${MARGIN}%`,
                marginRight: `${MARGIN}%`,
              },
              inactive: {
                aspectRatio: COLLAPSED_ASPECT_RATIO,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            className={`${
              i === index ? '' : 'opacity-30 grayscale hover:grayscale-0'
            } h-full shrink-0 transition will-change-[filter]`}
            key={image}
          >
            <img alt={`Thumbnail ${i + 1}`} src={image} className="h-full w-full object-cover" />
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
