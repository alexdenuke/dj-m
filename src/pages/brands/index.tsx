import knex from "knex";
import knexConfig from '../../../knexfile'
import { Brand } from "@/types/types";
import type { GetServerSideProps, NextPage } from 'next';
const db = knex(knexConfig[process.env.NODE_ENV || 'development']);

interface BrandsProps {
    brands: Brand[];
}

export const getServerSideProps: GetServerSideProps = async () => {
    const brands = await db.select('*').from<Brand>('brands'); // Предполагается, что таблица называется 'brands'
    return { props: { brands } };
};

const Brands: React.FC<BrandsProps> = ({brands}) => {
    return(
        <>
        <div className="containerUser">
            <h1>Бренды</h1>
            <ul>
                {brands.map(brand => (
                    <li key={brand.id}>{brand.name}</li> // Предполагается, что у брендов есть поля id и name
                ))}
            </ul>
        </div>
        
        </>
    )
}

export default Brands;