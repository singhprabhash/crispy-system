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
        <div className={`${styles.infoCard}`}>
            <Image src={props.img} alt={props.alt} width={250} height={250}/>
            <h2 className='text-xl font-medium mt-5'>{props.title}</h2>
            <p className=' text-[#575757]'>{props.desc}</p>
        </div>
    );
}