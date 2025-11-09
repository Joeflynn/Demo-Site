import React from 'react'

import {
  GridList,
  GridListItem,
  useDragAndDrop,
  type GridListProps,
  type GridListItemProps,
} from 'react-aria-components'
import { useListData } from 'react-stately'

import type { CheckboxProps, Selection } from 'react-aria-components'
import { Button, buttonVariants } from '@/components/UI/button'
import { Checkbox } from 'react-aria-components'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/UI/context-menu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/UI/tooltip'

import { EyeClosed, EyeIcon } from 'lucide-react'
import { Toggle } from './UI/toggle'

function MyGridList<T extends object>({ children, ...props }: GridListProps<T>) {
  return <GridList {...props}>{children}</GridList>
}

interface Item {
  id: number
  name: string
}

function MyItem({ children, ...props }: GridListItemProps) {
  let textValue = typeof children === 'string' ? children : undefined
  return (
    <GridListItem textValue={textValue} {...props}>
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          <div className="mx-0 my-auto flex h-28 w-28 content-center justify-start gap-3 overflow-hidden p-0 align-middle">
            <ContextMenu>
              <ContextMenuTrigger asChild>
                {/* <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger> */}
                <div className="mx-auto grid h-28 w-28 grid-cols-1 grid-rows-1">
                  <div className="inset-0 z-20 col-start-1 row-start-1 mt-0 mb-auto flex h-full w-full flex-row-reverse content-start justify-between p-1 align-top">
                    {allowsDragging && (
                      <Toggle className="bg-muted/75 h-8 w-8 rounded-md p-1" size="sm" slot="drag">
                        <EyeIcon className="text-foreground h-5 w-5" />
                        {/* <EyeClosed className="text-foreground h-5 w-5" /> */}
                      </Toggle>
                    )}
                    {selectionMode === 'single' && selectionBehavior === 'toggle' && <MyCheckbox />}
                  </div>
                  <div className="inset-0 z-10 col-start-1 row-start-1 h-full w-full">
                    <div className="bg-checkerboard border-border h-28 w-28 rounded-md border"></div>
                  </div>
                </div>
                {/* </TooltipTrigger>
                    <TooltipContent>{children}</TooltipContent>
                  </Tooltip>
                </TooltipProvider> */}
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem inset>
                  Add Layer
                  <ContextMenuShortcut>Ctrl+Shift+N[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset disabled>
                  Hide Layer
                  <ContextMenuShortcut>Ctrl+]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Delete Layer
                  <ContextMenuShortcut>Delete</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Duplicate Layer
                  <ContextMenuShortcut>Ctrl+J</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </>
      )}
    </GridListItem>
  )
}

function MyCheckbox({ children, ...props }: CheckboxProps) {
  return (
    <Checkbox {...props}>
      {({ isIndeterminate }) => (
        <>
          <div className="checkbox">
            <svg viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate ? (
                <rect x={1} y={7.5} width={15} height={3} />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </svg>
          </div>
          {children}
        </>
      )}
    </Checkbox>
  )
}

interface ItemValue {
  id: number
  name: string
}
export function LayerPanel(props: GridListProps<ItemValue>) {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Layer 1' },
      { id: 2, name: 'Layer 2' },
      { id: 3, name: 'Layer 3' },
      { id: 4, name: 'Layer 4' },
      { id: 5, name: 'Layer 5' },
      { id: 6, name: 'Layer 6' },
      { id: 7, name: 'Layer 7' },
      { id: 8, name: 'Layer 8' },
      { id: 9, name: 'Layer 9' },
      { id: 10, name: 'Layer 10' },
      { id: 11, name: 'Layer 11' },
      { id: 12, name: 'Layer 12' },
    ],
  })

  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([1]))

  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) => [...keys].map((key) => ({ 'text/plain': list.getItem(key)?.name ?? '' })),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys)
      }
    },
  })

  return (
    <MyGridList
      aria-label="Reorderable list"
      selectionMode="single"
      selectionBehavior="toggle"
      defaultSelectedKeys={[1]}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
      {...props}
      className={
        'pointer-events-auto mx-auto flex w-[124px] flex-col content-center justify-center gap-2 px-1 pt-2 align-middle'
      }
    >
      {(item) => (
        <MyItem
          className={({ isSelected }) =>
            isSelected
              ? 'w-[116px] rounded-md border-2 border-transparent outline outline-offset-1 outline-blue-500'
              : 'w-[116px] rounded border-2 border-transparent outline-3 outline-offset-1 outline-transparent'
          }
        >
          {item.name}
        </MyItem>
      )}
    </MyGridList>
  )
}
