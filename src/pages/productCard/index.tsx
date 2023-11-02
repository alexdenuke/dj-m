import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logos from '@/components/ui/Logos/Logos'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Breadcrumbs/>
    <h1>Карточка товара</h1>
    </>
  )
}