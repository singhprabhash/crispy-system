import { Header } from "@/src/UI/Header/Header";
import styles from "../Cards/styles.module.css";
import { Card } from "../Cards/Card";
import { Button } from "../Button";
export const Services = () => {
    return(
        <div className="px-10">
            <Header
                highlightedHeader
                heading=""
                highlightedText="Services"
                remainingText=" We Offer"
            />
            <div className="service_list grid gap-3 sm:grid-cols-3 justify-center mt-10">
                <Card img="/service6.jpg" classes=""/>
                <Card img="/service4.jpg" classes=""/>

                <Card img="/service3.jpg" anim="img"/>
                <Card img="/service4.jpg" anim="img"/>
                <Card img="/service1.jpg" classes=""/>
                <Card img="/service6.jpg" classes=""/>
            </div>
            <div className="flex justify-center">
                <Button 
                    content="Discover More" 
                    icon={false} 
                    arrowIcon={true}
                />
            </div>
        </div>
    )
}