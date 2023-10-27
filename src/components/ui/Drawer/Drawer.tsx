import React from 'react';
import styles from './Drawer.module.scss';

interface DrawerProps {
  margin?: string; // Пропс для задания отступов, например "mt-4" или "mb-4"
}

const Drawer: React.FC<DrawerProps> = ({ margin = "" }) => {
    return (
        <div className={`drawer w-auto tracking-widest hidden md:block ${margin}`}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer" className="btn  btn-primary drawer-button bg-neutral-800 border-0 text-white">Каталог</label>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer;

