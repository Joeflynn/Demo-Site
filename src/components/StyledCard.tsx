import * as React from 'react'

import { cn } from '@/lib/utils'

function StyledCard({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'flex flex-col items-center justify-center gap-1 rounded-2xl border border-solid border-[rgba(255,255,255,0.2)] px-6 py-5 shadow-sm',
        'bg-gradient-to-b from-[#2f3237] to-[#151619]',
        className
      )}
      style={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...((props as any).style || {}),
        borderColor: 'var(--surface-stroke-stop-1, rgba(255,255,255,0.2))',
        backgroundImage:
          'linear-gradient(to bottom, var(--surface-fill-stop-1, #2f3237), var(--surface-fill-stop-2, #151619))',
      }}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function StyledCardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-6', className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  StyledCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  StyledCardContent,
}
