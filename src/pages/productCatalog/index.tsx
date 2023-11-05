import Link from "next/link";
import Image from "next/image";

const ProductCatalog = () => {
  return (
    <>
      <h1 className=" text-3xl mb-6">Каталог продуктов</h1>
      <div className="flex">
        <div className="grid gap-x-5 grid-cols-2 sm:grid-cols-3 w-full md:w-2/3">

          <div className="flex flex-col mb-5 ">
            <div className="  flex justify-center w-full ">
              <Image
                className=""
                src="/catalog-img.png"
                width={120}
                height={120}
                alt="Description of Image"
              />
            </div>
            <span className=" text-center my-3">Описание</span>
          </div>

          <div className="flex flex-col mb-5 ">
            <div className="  flex justify-center w-full ">
              <Image
                className=""
                src="/catalog-img.png"
                width={120}
                height={120}
                alt="Description of Image"
              />
            </div>
            <span className=" text-center my-3">Описание</span>
          </div>

          <div className="flex flex-col mb-5 ">
            <div className="  flex justify-center w-full ">
              <Image
                className=""
                src="/catalog-img.png"
                width={120}
                height={120}
                alt="Description of Image"
              />
            </div>
            <span className=" text-center my-3">Описание</span>
          </div>

          <div className="flex flex-col mb-5 ">
            <div className="  flex justify-center w-full ">
              <Image
                className=""
                src="/catalog-img.png"
                width={120}
                height={120}
                alt="Description of Image"
              />
            </div>
            <span className=" text-center my-3">Описание</span>
          </div>

         

        </div>
        <aside className=" hidden md:block text-2xl text-center h-auto w-full   bg-slate-200 flex-grow-0  w-1/3">
          Фильтры
        </aside>
      </div>
    </>
  );
};

export default ProductCatalog;
