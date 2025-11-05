import type { ReactNode } from 'react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '../components/motion-primitives/morphing-dialog.tsx'
import { PlusIcon } from 'lucide-react'

interface ExpandedCardDialogProps {
  triggerImage: string
  triggerImageAlt: string
  title: string
  subtitle: string
  dialogImage: string
  dialogImageAlt: string
  description: ReactNode
  children?: ReactNode
  triggerClassName?: string
  contentClassName?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
}

export function ExpandedCardDialog({
  triggerImage,
  triggerImageAlt,
  title,
  subtitle,
  dialogImage,
  dialogImageAlt,
  description,
  children,
  triggerClassName,
  contentClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}: ExpandedCardDialogProps) {
  const defaultTriggerClass =
    'flex max-w-[480px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
  const defaultContentClass =
    'pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-2/5'
  const defaultTitleClass = 'text-zinc-950 dark:text-zinc-50'
  const defaultSubtitleClass = 'text-zinc-700 dark:text-zinc-400'
  const defaultDescriptionClass = 'text-zinc-500 dark:text-zinc-500'

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.25,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className={triggerClassName || defaultTriggerClass}
      >
        <MorphingDialogImage
          src={triggerImage}
          alt={triggerImageAlt}
          className="h-48 w-full object-cover"
        />
        <div className="flex grow flex-row items-end justify-between px-3 py-2">
          <div>
            <MorphingDialogTitle className={titleClassName || defaultTitleClass}>
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className={subtitleClassName || defaultSubtitleClass}>
              {subtitle}
            </MorphingDialogSubtitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors select-none hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '24px',
          }}
          className={contentClassName || defaultContentClass}
        >
          <MorphingDialogImage src={dialogImage} alt={dialogImageAlt} className="h-full w-full" />
          <div className="p-6">
            <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              {subtitle}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <div className={`mt-2 ${descriptionClassName || defaultDescriptionClass}`}>
                {description}
              </div>
              {children}
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

// Example usage component (optional - you can remove if not needed)
