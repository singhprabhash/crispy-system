import { Header } from "@/src/UI/Header/Header";
import styles from "../Cards/styles.module.css";
import { Card } from "../Cards/Card";
import { Button } from "../Button";
import ourServices from "../../../FactoryData/ourServices.json";

export const Services = () => {
    return (
        <div className="px-10">
            <Header
                highlightedHeader
                heading=""
                highlightedText="Services"
                remainingText=" We Offer"
            />
            <div className="service_list grid gap-3 sm:grid-cols-3 justify-center mt-10">
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