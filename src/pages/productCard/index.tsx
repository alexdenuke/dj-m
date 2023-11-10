import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logos from '@/components/ui/Logos/Logos'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'


const inter = Inter({ subsets: ['latin'] })

export default function ProductCard() {
  return (
    <>
    <Breadcrumbs/>
    <h1 className=' text-3xl my-4'>Название товара</h1>
    <div className='grid   grid-cols-1 md:grid-cols-3'>
    <div className='justify-self-center md:justify-self-start'>
    <Image
      src="/productCard.png"
      alt="Picture of the author"
      width={200}
      height={200}
    />
    </div>
    <div>
    <p>Описание товара</p>
    </div>
    <div className=''>
    <p>6450 р</p>
    <button className=' w-full bg-slate-300 px-6 py-4'>
      Купить
    </button>
    </div>
    </div>

    </>
  )
}