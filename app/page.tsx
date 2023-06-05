'use client'
import Image from 'next/image';
import {motion} from "framer-motion";
import { TypedAnimator } from '@/src/UI/TypedAnimator';

export default function Home() {
    return (
        <div className="h-[90vh] lg:h-screen">
            <div className="h-full flex flex-col items-center justify-center">
                <Image
                    src="/logo.svg"
                    width={300}
                    height={300}
                    alt="Logo"
                />
                <div className="text-center w-full">
                    <TypedAnimator wordArray={["Coming Soon..."]} hideRest/>
                    <p className="text-center text-app-black-600 text-lg mt-5">
                        <a href='mailto:contact@helpinfinance.com?subject = Support' className='font-light'>contact@helpinfinance.com</a> | <a href='tel:+918299159517' className='font-light'>8299159517</a></p>
                </div>
            </div>
        </div>
    )
}