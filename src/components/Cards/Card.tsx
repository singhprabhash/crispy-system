import Image from 'next/image';
import styles from './styles.module.css';

type Props = {
    img: string,
    classes?: string,
    anim?: string
}

export const Card = (props: Props) => {
    return(
        <div className={`${styles.infoCard}`}>
            <Image className={props.classes} src={props.img} alt='dummy' width={250} height={250}/>
            <h2 className='text-xl font-medium mt-5'>Spend Money</h2>
            <p className=' text-[#575757]'>Packed with options, they are highly flexible for any design & for any purpose. The only limit is your imagination.</p>
            {/* <button>Click Me</button> */}
        </div>
    );
}