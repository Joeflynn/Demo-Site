export default function Demo3() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-6 px-4 py-10">
      <h1 className="text-3xl font-bold">Pixi.js Brush Engine Demo proof of concept</h1>
      <p className="max-w-2xl text-center text-muted-foreground">
        A raster brush engine proof of concept built with Pixi.js. This demo showcases what is to my
        knowledge the most performant raster stamp brush implementation. Uses the Pixi.js Particle
        Container for optimal performance.
      </p>
      <div
        className="w-full overflow-hidden rounded-lg border shadow-lg"
        style={{ height: '70vh' }}
      >
        <iframe
          src="/Demo-Site/pixi-demo/index.html"
          title="Pixi.js Brush Engine Demo"
          className="h-full w-full"
          style={{ border: 'none' }}
        />
      </div>
      <p className="text-sm text-muted-foreground">Note: This is an embedded vanilla JS demo.</p>
    </div>
  )
}
