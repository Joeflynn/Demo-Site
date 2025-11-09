// import { ExpandedCardDialog } from '@/ExpandedCardDialog'
// import PlaceHolderImage from '../../public/Images/PixelPaint.jpg'

export default function Home() {
  return (
    <div>
      <div className="inline-flex w-full flex-col items-start justify-start gap-4 p-4 lg:w-3/5">
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-foreground justify-start self-stretch text-xl leading-relaxed font-medium">
            Vite
          </div>
          <div className="text-secondary-foreground/70 justify-start self-stretch text-base leading-6 font-normal">
            Great for creating a basic React app with sensible defaults.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-foreground justify-start self-stretch text-xl leading-relaxed font-medium">
            Next.js
          </div>
          <div className="text-secondary-foreground/70 justify-start self-stretch text-base leading-6 font-normal">
            Popular React framework focused on server side rendering, offers useful quality of life
            features like Next Image, Next Theme, Middleware, Next Font.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-foreground justify-start self-stretch text-xl leading-relaxed font-medium">
            Tailwind CSS
          </div>
          <div className="text-secondary-foreground/70 justify-start self-stretch text-base leading-6 font-normal">
            Great for speed with sensible defaults. Beyond the benefits of a well designed utility
            class, it has performance and linting benefit. Overall pairs well with React/Modern web
            dev.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-foreground justify-start self-stretch text-xl leading-relaxed font-medium">
            Framer Motion
          </div>
          <div className="text-secondary-foreground/70 justify-start self-stretch text-base leading-6 font-normal">
            Framer motion (now called motion) is great for basic animations uses CSS instead of Js
            for hardware acceleration, motion design/react friendly declarative syntax. Things like
            exit animations are easy by default comparative to other options like GSAP.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-foreground justify-start self-stretch text-xl leading-relaxed font-medium">
            ShadCN
          </div>
          <div className="text-secondary-foreground/70 justify-start self-stretch text-base leading-6 font-normal">
            Popular component structure for React projects. Combining accessible headless components
            with basic themed styling makes it have good utility out of the box, and it has a
            structure that allows easy friction free customizability within the project itself. Has
            grown far beyond initial components to function as a format for reusable UI components
            used by many UI projects.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-foreground justify-start self-stretch text-xl leading-relaxed font-medium">
            Rive + Lottie
          </div>
          <div className="text-secondary-foreground/70 justify-start self-stretch text-base leading-6 font-normal">
            For more advanced animations combined with rich interaction needs for hardware
            acceleration, motion design friendly asset creation. Rive for interaction driven
            animation, Lottie for more specific effects possible with After Effects.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-foreground justify-start self-stretch text-xl leading-relaxed font-medium">
            Pixi.js
          </div>
          <div className="text-secondary-foreground/70 justify-start self-stretch text-base leading-6 font-normal">
            Graphics library for more advanced effects that can be combined with interaction needs
            with high performance including WebGPU hardware acceleration, Not motion design
            friendly. Uses more low level syntax, New versions continually introduce breaking
            changes, and the documentation is poor. highest graphics capabilities/performance
            without requiring a game engine.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-foreground justify-start self-stretch text-xl leading-relaxed font-medium">
            GSAP
          </div>
          <div className="text-secondary-foreground/70 justify-start self-stretch text-base leading-6 font-normal">
            GSAP recently adopted a more permissive license it is comparable to Framer motion
            overall for scope. The area that it is worth considering vs Framer motion is for
            animating SVG and Canvas elements.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 self-stretch">
          <div className="text-foreground justify-start self-stretch text-xl leading-relaxed font-medium">
            Three.js/ReactThreeFiber
          </div>
          <div className="text-secondary-foreground/70 justify-start self-stretch text-base leading-6 font-normal">
            Popular framework/library for interactive 3D on the web. A lot of fun to be had in 3D.
            Not the biggest fan of the poor performance on most Three.js sites. Only use if you
            really want interactive 3D scenes and you can either optimize or you are fine with it
            taxing most devices.{' '}
          </div>
        </div>
      </div>
      {/* <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <ExpandedCardDialog
          triggerImage={PlaceHolderImage}
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage={PlaceHolderImage}
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage={PlaceHolderImage}
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage={PlaceHolderImage}
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage={PlaceHolderImage}
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage={PlaceHolderImage}
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage={PlaceHolderImage}
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage={PlaceHolderImage}
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage={PlaceHolderImage}
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage={PlaceHolderImage}
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage={PlaceHolderImage}
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage={PlaceHolderImage}
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
      </div> */}
    </div>
  )
}
