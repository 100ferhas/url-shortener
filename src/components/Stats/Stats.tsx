import style from "./Stats.module.scss";

const Stats = () => {
    return <div className={style.stats}>
        <span className={style.title}>Advanced Statistics</span>
        <span className={style.subtitle}>Track how your links are performing across the web with our advanced statistics dashboard.</span>
    </div>
}

export default Stats;