import { ExpandedCardDialog } from '@/ExpandedCardDialog'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <ExpandedCardDialog
          triggerImage="../public/Images/PixelPaint.jpg"
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage="../public/Images/PixelPaint.jpg"
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage="../public/Images/PixelPaint.jpg"
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage="../public/Images/PixelPaint.jpg"
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage="../public/Images/PixelPaint.jpg"
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage="../public/Images/PixelPaint.jpg"
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage="../public/Images/PixelPaint.jpg"
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage="../public/Images/PixelPaint.jpg"
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage="../public/Images/PixelPaint.jpg"
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage="../public/Images/PixelPaint.jpg"
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
        <ExpandedCardDialog
          triggerImage="../public/Images/PixelPaint.jpg"
          triggerImageAlt="Alt text"
          title="My Title"
          subtitle="My Subtitle"
          dialogImage="../public/Images/PixelPaint.jpg"
          dialogImageAlt="Alt text"
          description={<p>Custom description content</p>}
        >
          <button className="...">Custom button</button>
        </ExpandedCardDialog>
      </div>
    </div>
  )
}
