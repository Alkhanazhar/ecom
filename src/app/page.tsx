import Image from 'next/image'
import Hero from "./components/Hero"
import Feature from "./Components/Feature"
import NewArrival from "./Components/NewArrival"
import Category from "./Components/Category"
import BlogSection from "./Components/BlogSection"

import FeatureCard from "./Components/FeatureCsard"
import img from "../assets/cosmetics.png"


export default function Home() {
  return (
   <main>
    <Hero />
    <Feature />
    <NewArrival />
    {/* <Category /> */}
    <BlogSection />
   </main>
  )
}
