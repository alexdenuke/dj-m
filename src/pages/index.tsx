import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/ui/Hero/Hero'
import Swiper from '../components/ui/Swiper/Swiper'
import Logos from '@/components/ui/Logos/Logos'
import MainCategories from '../components/ui/MainCategories/Maincategories'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Swiper/>
    <Logos/>
    <MainCategories/>
    </>
  )
}
