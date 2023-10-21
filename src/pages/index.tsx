import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/ui/Hero/Hero'
import Swiper from '../components/ui/Swiper/Swiper'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Swiper/>
    </>
  )
}
