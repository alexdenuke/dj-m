import Link from "next/link";
import Image from "next/image";
import CardShort from "@/components/ui/CardShort/CardShort";

const ProductCatalog = () => {
  return (
    <div className="containerUser">
      <h1 className="title-normal">Каталог продуктов</h1>
      <div className="flex">
        <div className="grid gap-x-5 grid-cols-2 sm:grid-cols-3 w-full md:w-2/3">
         

          <CardShort />

          <CardShort />

          <CardShort />

          <CardShort />

          <CardShort />

          
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