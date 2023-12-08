import Link from "next/link";
import Image from "next/image";
import CardShort from "@/components/ui/CardShort/CardShort";

const ProductCatalog = () => {
  return (
    <div className="containerUser">
      <h1 className="title-normal">Каталог продуктов</h1>
      <div className="flex">
        <div className="grid gap-x-5 grid-cols-2 sm:grid-cols-3 w-full md:w-23">
         


        <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
        <Link className="shrink-0" href="/" id="link">
          <Image
            className=""
            src="/plus-cart.svg"
            width={28}
            height={25} // Округленное значение высоты
            alt="Description of Image"
          />
        </Link>
      </div>
    </div>


    <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
        <Link className="shrink-0" href="/" id="link">
          <Image
            className=""
            src="/plus-cart.svg"
            width={28}
            height={25} // Округленное значение высоты
            alt="Description of Image"
          />
        </Link>
      </div>
    </div>


    <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
        <Link className="shrink-0" href="/" id="link">
          <Image
            className=""
            src="/plus-cart.svg"
            width={28}
            height={25} // Округленное значение высоты
            alt="Description of Image"
          />
        </Link>
      </div>
    </div>


    <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
        <Link className="shrink-0" href="/" id="link">
          <Image
            className=""
            src="/plus-cart.svg"
            width={28}
            height={25} // Округленное значение высоты
            alt="Description of Image"
          />
        </Link>
      </div>
    </div>

    <div className="flex  flex-col mb-5">
      <div className="flex bg-gray-100 justify-center">
        <Image
          className=""
          src="/item1.png"
          alt= 'name'
          width={200}
          height={200}
        />
      </div>

      <Link className="text-center my-2 line-clamp-3 overflow-ellipsis overflow-hidden " href="/productCard" id="link">
      </Link>
      <div className="flex justify-between mb-3">
      <p>Артикул:</p>
        <p>Наличие</p>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Цена: р</div>
        <Link className="shrink-0" href="/" id="link">
          <Image
            className=""
            src="/plus-cart.svg"
            width={28}
            height={25} // Округленное значение высоты
            alt="Description of Image"
          />
        </Link>
      </div>
    </div>

          
        </div>
        <aside className=" hidden md:block text-2xl text-center h-auto  bg-slate-200 flex-grow-0  w-1/3">
          Фильтры
        </aside>
      </div>
    </div>
  );
};

export default ProductCatalog;








{/* <div className="flex flex-col mb-5  p-4">
<div className="flex justify-center w-full ">
  <Image
    className=""
    src="/catalog-img.png"
    width={120}
    height={120}
    alt="Description of Image"
  />
</div>
<span className=" text-center my-3">Описание</span>
<div className="flex justify-between">
  <div>100 р</div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  </div>
</div>
</div> */}