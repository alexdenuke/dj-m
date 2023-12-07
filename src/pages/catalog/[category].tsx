import { useRouter } from "next/router";
import CardShort from "@/components/ui/CardShort/CardShort";


// export async function getServerSideProps(context) {
//   const { category } = context.params;
//   const res = await fetch(`http://localhost:3000/api/products/${encodeURIComponent(category)}`);
//   const products = await res.json();

//   return {
//       props: {
//           products,
//       },
//   };
// }

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  // Здесь код для загрузки и отображения товаров выбранной категории
  // Используйте category для запроса к вашему API или серверу

  return (
    <div className="containerUser">
      <h1>Каталог товаров для категории: {category}</h1>
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

export default CategoryPage;
