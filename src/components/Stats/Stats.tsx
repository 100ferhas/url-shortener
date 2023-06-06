import style from "./Stats.module.scss";
import icon_brand from "../../assets/images/icon-brand-recognition.svg"
import icon_records from "../../assets/images/icon-detailed-records.svg"
import icon_customzable from "../../assets/images/icon-fully-customizable.svg"
import Card from "../Card/Card";

const Stats = () => {
    return <div className={style.stats}>
        <span className={style.title}>Advanced Statistics</span>
        <span className={style.subtitle}>Track how your links are performing across the web with our advanced statistics dashboard.</span>

        <div className={style.cards}>
            <Card icon={icon_brand} title="Brand Recognition"
                description="Boost your brand recogniton with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." />
            <Card icon={icon_records} title="Detailed Records"
                description="Gain Insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
            <Card icon={icon_customzable} title="Fully Customizable"
                description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
        </div>
    </div>
}

export default Stats;