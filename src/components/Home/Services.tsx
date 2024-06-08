import { Header } from "@/src/UI/Header/Header";
import styles from "../Cards/styles.module.css";
import { Card } from "../Cards/Card";
import { Button } from "../Button/Button";
import ourServices from "../../../FactoryData/ourServices.json";

export const Services = () => {
    return (
        <div className="service__container">
            <div className="service__list h-[100vh] bg-[#eefff7] p-10">
                <div className="service_title flex">
                    <div className="main_title">
                        <h4 className="text-sm"> WHAT WE DO </h4>
                        <h1 className="text-4xl">Services We Offer</h1>
                    </div>
                    <p>Malesuada fames ac turpis egestas integer eget aliquet. Ultricies mi quis hendrerit dolor magna eget est lorem. </p>
                </div>
            </div>
            {/* <div className="service__list grid justify-center mt-10">
                {
                    ourServices.map((service, idx) => (
                        <Card
                            key={idx}
                            img={`/service${service.image}`}
                            alt={service.altText}
                            {...service}
                        />
                    ))
                }
            </div> */}
            <div className="flex justify-center">
                <Button
                    content="Discover More"
                    mailIcon={false}
                    arrowIcon={true}
                />
            </div>
        </div>
    )
}