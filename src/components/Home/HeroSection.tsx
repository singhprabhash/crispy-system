import styles from "../../../styles/home.module.css";
import { TypedAnimator } from "../../UI/TypedAnimator";
import { typedContent } from "../../../FactoryData/TypedContent";
import { Button } from "../Button/Button";
import Image from "next/image";
import { Customers } from "./Customers";
import { motion } from "framer-motion";
import serviceGroups from "../../../FactoryData/serviceGroup.json";

export default function HeroSection() {
  return (
    <>
      <div className="h-auto w-screen relative">
        <div className="flex flex-col justify-between items-center lg:flex-row px-5 py-4 sm:px-10 mt-16 md:mt-20">
          <div className="left__hero py-4">
            <TypedAnimator wordArray={typedContent} />
            <Button animateOnLoad content="Know More" mailIcon={true} arrowIcon={false} />
          </div>

          <motion.div 
            initial={{
              x: 1000
            }}
            animate={{
              x: 0
            }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3
            }}
          className="hero__img">
            <Image
              src="/hero3.jpg"
              alt="gst"
              width={700}
              height={700}
              className={`${styles.imageRotator}`}
            />
          </motion.div>
        </div>
      </div>
      {/* <div
        className={`customer__wrapper grid gap-4 justify-center grid-cols-2 xs:grid-cols-1 px-10`}
      >
        {
          serviceGroups.map((data, idx) => (
            <Customers key={idx} bgColor={data.bgColor} title={data.title} forText={data.for} />
          ))
        }
      </div> */}
    </>
  );
}
