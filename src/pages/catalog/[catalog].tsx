import { useRouter } from "next/router";
import CardShort from "@/components/ui/CardShort/CardShort";
import { GetServerSideProps, NextPage } from 'next';
import Pagination from "@/components/ui/Pagination/Pagination";

interface Product {
  id: number,
  name: string,
  price: number,
  sku: string,
  imageUrl: string

}
interface CategoryPageProps {
  products: Product[];
  error?: string;
}

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async (context) => {
  const category = context.params?.catalog;
  console.log(context.params)
  if (!category || Array.isArray(category)) {
    // Обработка случая, когда category не предоставлено или представляет собой массив
    return { props: { products: [], error: 'Некорректная категория' }};
  }

  try {
    const response = await fetch(`http://localhost:3000/api/categories/${encodeURIComponent(category)}`);
    if (!response.ok) {
      throw new Error('Проблема при запросе данных продукта');
    }
    const products: Product[] = await response.json();
    return { props: { products } };
  } catch (error) {
    console.error('Ошибка при запросе к API:', error);
    return { props: { products: [], error: 'Не удалось получить данные о продуктах' }};
  }
};

const CategoryPage: NextPage<CategoryPageProps> = ({ products }) => {
  console.log(products);
  const router = useRouter();
  const { catalog } = router.query;

  return (
    <div className="containerUser">
      <h1>Каталог товаров для категории: {catalog}</h1>
      <div className="flex">
        <div className="grid gap-x-5 grid-cols-2 sm:grid-cols-3 w-full md:w-2/3">

        {products.map(product => (
            <CardShort 
              key={product.id} 
              name={product.name} 
              price={product.price}
              sku={product.sku}
              imageUrl={product.imageUrl} // Предполагается, что у вас есть поле imageUrl
            />
          ))}

        </div>
        <aside className="hidden md:block text-2xl text-center h-auto bg-slate-200 flex-grow-0 w-1/3">
          Фильтры: Категории, цена, Наличие на складе, Модель устройства, Бренд
        </aside>
      </div>

          <Pagination/>

    </div>
  );
};

export default CategoryPage;
