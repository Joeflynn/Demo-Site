const app = new PIXI.Application({
  backgroundColor: 0xf3f4f6,
  resizeTo: window,
})

document.body.appendChild(app.view)

const stamps = new PIXI.ParticleContainer(10000, {
  scale: true,
  position: true,
  rotation: true,
  alpha: true,
})

app.stage.addChild(stamps)

const brushStrokes = []

const totalSprites = 10000

for (let i = 0; i < totalSprites; i++) {
  // create a new Sprite
  const tip = PIXI.Sprite.from('../Images/soft-circle.png')
  // set the anchor point so the texture is centerd on the sprite
  // tip.anchor.set(0.5);
  tip.alpha = 0.1

  // Push the tip into the brushStrokes array so it it can be easily accessed later
  brushStrokes.push(tip)
}

// Css style for icons
const defaultIcon = "url('../Images/soft-circle.png'),auto"

// Add custom cursor styles
if (app.renderer.plugins && app.renderer.plugins.interaction) {
  app.renderer.plugins.interaction.cursorStyles.default = defaultIcon
}

app.stage.interactive = true
app.stage.hitArea = app.screen
app.stage
  .on('pointerdown', pointerDown)
  .on('pointerup', pointerUp)
  .on('pointerupoutside', pointerUp)
  .on('pointermove', pointerMove)
  .on('pointerleave', pointerUp)
  .on('pointercancel', pointerUp)
  .on('pointerout', pointerUp)
  .on('pointerupoutside', pointerUp)

let isDrawing = false
let lastDrawnPoint = null
let pressure = 1 // Placeholder for pressure
let spacingRatio = 0.05 // Similar to your canvas code

// Helper functions for distance and angle
function distanceBetween(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))
}

function angleBetween(point1, point2) {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y)
}

// Arrays for used and unused sprites
let unusedBrushStrokes = [...brushStrokes]
let usedBrushStrokes = []

function pointerMove({ global: { x, y } }) {
  if (!isDrawing) return

  let currentPoint = { x, y }
  let dist = distanceBetween(lastDrawnPoint || currentPoint, currentPoint)
  let angle = angleBetween(lastDrawnPoint || currentPoint, currentPoint)

  let brushSize = 50 * pressure
  let stampSpacing = brushSize * spacingRatio

  for (let i = 0; i < dist; i += stampSpacing) {
    // Reuse sprite if possible, otherwise create new
    let tip = unusedBrushStrokes.length > 0 ? unusedBrushStrokes.pop() : createNewSprite()
    //let normalAngle = angle - Math.PI / 2; // Right normal
    //tip.rotation = normalAngle; // Set sprite rotation to the normal angle
    tip.x = x + Math.sin(angle) * i
    tip.y = y + Math.cos(angle) * i

    // Add sprite to ParticleContainer instead of stage for performance
    stamps.addChild(tip)

    // Move this sprite to the 'used' array
    usedBrushStrokes.push(tip)
  }

  lastDrawnPoint = currentPoint
}

const offscreenContainer = new PIXI.Container()
app.stage.addChild(offscreenContainer)

function pointerUp(event) {
  isDrawing = false
  lastDrawnPoint = null

  // 1. Move all used sprites to the offscreen container
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity

  while (usedBrushStrokes.length > 0) {
    let sprite = usedBrushStrokes.pop()
    offscreenContainer.addChild(sprite)

    // Update bounding box
    minX = Math.min(minX, sprite.x)
    minY = Math.min(minY, sprite.y)
    maxX = Math.max(maxX, sprite.x)
    maxY = Math.max(maxY, sprite.y)
  }

  // 2. Generate a texture from the offscreen container
  const texture = app.renderer.generateTexture(offscreenContainer)

  // 3. Create a new sprite from the generated texture
  const newSprite = new PIXI.Sprite(texture)

  // Set the position based on the bounding box
  newSprite.x = minX
  newSprite.y = minY

  // Add it to the main stage
  app.stage.addChild(newSprite)

  // 4. Clear the offscreen container and put the sprites back in the unused pool
  for (let i = offscreenContainer.children.length - 1; i >= 0; i--) {
    let sprite = offscreenContainer.removeChildAt(i)
    unusedBrushStrokes.push(sprite)
  }
}

// Function to create a new sprite (this can also be optimized)
function createNewSprite() {
  const tip = PIXI.Sprite.from('../Images/soft-circle.png')
  tip.anchor.set(0.5)
  tip.alpha = 0.5
  return tip
}

function pointerDown(event) {
  isDrawing = true
  pointerMove(event)
}
