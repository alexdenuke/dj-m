import Image from "next/image";
import { Inter } from "next/font/google";
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export default function ProductCard() {
  return (
    <div className="containerUser">
      <Breadcrumbs />
      <h1 className=" title-h1">Название товара</h1>
      <p className="text-sm mb-2">Номер детали</p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="justify-self-center md:justify-self-start">
          <Image
            src="/productCard.png"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nulla doloremque reiciendis molestiae ea illum omnis dignissimos voluptas distinctio facere quidem minus similique officia et suscipit, rerum, vero accusantium quo.
          Ipsam nobis quidem ab perferendis similique expedita suscipit tempora sequi harum, magni enim doloribus, neque nam maxime sapiente nulla alias cupiditate ratione eaque eveniet dolorem natus velit? Quos, illo quisquam?
          Eos dolores, officiis quidem aperiam, dicta vitae vero explicabo a voluptas sunt voluptates molestiae ex sequi distinctio totam debitis aliquid omnis quibusdam. Sunt qui illo ab dolores voluptates sequi eum!
          Itaque aperiam, ducimus distinctio odio tempora hic! Deserunt dolorum debitis in, excepturi pariatur eligendi. Praesentium, cumque! Debitis eligendi dolorem tempore qui tenetur corrupti voluptatibus aliquam expedita, fugit laudantium natus delectus!
          Odio optio minima magni recusandae laudantium! Dicta delectus molestiae voluptatibus voluptatem nisi, ex eveniet, corporis deserunt, accusantium accusamus aliquam repellat quas quasi. Alias quasi nisi architecto. Reiciendis blanditiis expedita corporis.</p>
        </div>
        <div className=" flex flex-col bg-gray-200 p-5 rounded">
          <p className="text-2xl mb-5 font-bold">6450 р</p>
          <p className="mb-14">Наличие</p>
          <button className=" w-full bg-gray-700 px-6 py-4 rounded text-white font-bold text-xl tracking-widest ">Купить</button>
        </div>
      </div>
    </div>
  );
}
