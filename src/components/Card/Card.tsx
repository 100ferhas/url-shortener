import style from "./Card.module.scss";

const Card = (props: {
    icon: string,
    title: string,
    description: string,
}) => {
    return <div className={style.card}>
        <span className={style.icon}>
            <img src={props.icon} alt="icon" />
        </span>
        <div className={style.title}>
            {props.title}
        </div>
        <div className={style.description}>
            {props.description}
        </div>
    </div>
}

export default Card;