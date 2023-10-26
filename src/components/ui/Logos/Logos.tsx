import Image from "next/legacy/image";
import styles from './Logos.module.scss';

interface LinkProps {
    margin?: string; // Пропс для задания отступов, например "mt-4" или "mb-4"
  }

const Logos: React.FC<LinkProps> = () => {
  return (
    <>
      <div className= "">
        <div className= {styles.logos} >
            <div className= {styles.imgWrap}>
            <Image
            className="w-full"
            src="/pioneer.png"
            alt="Description of Image"
            layout="fill" 
            objectFit="contain" 
          />
            </div>
            <div className={styles.imgWrap}>
            <Image
            className="w-full"
            src="/pioneer.png"
            alt="Description of Image"
            layout="fill" 
            objectFit="contain" 
          />
            </div>
            <div className={styles.imgWrap}>
            <Image
            className="w-full"
            src="/pioneer.png"
            alt="Description of Image"
            layout="fill" 
            objectFit="contain" 
          />
            </div>

            <div className={styles.imgWrap}>
            <Image
            className="w-full"
            src="/pioneer.png"
            alt="Description of Image"
            layout="fill" 
            objectFit="contain" 
          />
            </div>

        </div>
      </div>
    </>
  );
};

export default Logos;
