import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/ui/Hero/Hero'
import Swiper from '../components/ui/Swiper/Swiper'
import Swiper2 from '../components/ui/Swiper/Swiper2/Swiper2'
import MainCategories from '../components/ui/MainCategories/Maincategories'
import SwiperLogo from '@/components/ui/Swiper/Swiper-logo'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Swiper/>
    <h2 className='title-normal mt-10 '>Брэнды</h2>
    <SwiperLogo/>
    <MainCategories/>
    <h2
    className=' title-normal mt-10'
    >Популярные товары</h2>
    <Swiper2/>
    </>
  )
}
