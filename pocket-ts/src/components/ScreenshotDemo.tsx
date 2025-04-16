import Image from 'next/image'

export function ScreenshotDemo() {
  return (
    <div className="relative overflow-hidden h-full bg-white">
      <Image 
        src="/screenshot.png" 
        alt="App screenshot" 
        className="w-full h-full object-cover object-[center_top]"
        priority
        fill
        sizes="(max-width: 768px) 100vw, 366px"
      />
    </div>
  )
} 