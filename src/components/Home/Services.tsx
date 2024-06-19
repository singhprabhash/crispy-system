import { Header } from "@/src/UI/Header/Header";
import styles from "../Cards/styles.module.css";
import { Card } from "../Cards/Card";
import { Button } from "../Button/Button";
import ourServices from "../../../FactoryData/ourServices.json";
import { SubHeader } from "@/src/UI/Header/SubHeader";

export const Services = () => {
    return (
        <div className="service__container">
            <div className="service__list h-auto bg-[#eefff7] p-14">
                <div className="service_title w-full text-left">
                    <Header
                        highlightedHeader
                        highlightedText="Our Services"
                    />
                </div>
                <br />
                <div className="subtitle text-2xl">
                    <SubHeader content="Explore our digital services stack"/>
                </div>
                <div className="service__list flex justify-start mt-4 overflow-x-scroll">
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
                </div>
            </div>
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