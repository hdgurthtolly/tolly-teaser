import { CallToAction } from '@/components/CallToAction'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <PrimaryFeatures />
      <CallToAction />
      {/* <SecondaryFeatures /> */}
    </>
  )
}
