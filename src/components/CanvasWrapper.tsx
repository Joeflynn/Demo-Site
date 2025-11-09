import React, { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const CanvasWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="inset-0 z-0 col-start-1 row-start-1 h-full w-full p-0">
      <div className="inset-0 m-auto flex h-full w-full grow content-center items-center justify-center p-0">
        <div className="bg-checkerboard inset-0 h-fit w-fit cursor-crosshair border border-slate-300 p-0">
          {children}
        </div>
      </div>
    </div>
  )
}

export default CanvasWrapper
