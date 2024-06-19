import Image from 'next/image';
import styles from './styles.module.css';

type Props = {
    img: string,
    classes?: string,
    anim?: string,
    alt: string,
    title: string,
    desc: string
}

export const Card = (props: Props) => {
    return(
        <div className={`${styles.infoCard} flex flex-col`}>
            <Image src={props.img} alt={props.alt} width={200} height={200}/>
            <h2 className='text-md font-medium mt-5 text-[#71717A] text-center'>{props.title}</h2>
        </div>
    );
}