import Banner from "../../components/Banner/Banner";
import Menu from "../../components/Menu/Menu";
import illustration from "../../assets/images/illustration-working.svg";
import Shortener from "../../components/Shortener/Shortener";
import style from "./Home.module.scss";
import History from "../../components/History/History";
import Stats from "../../components/Stats/Stats";

const Home = () => {
    return (
        <>
            <Menu />

            <Banner
                title="More than just shorter links"
                subtitle="Build your brand's recognition and get detailed insights on how your links are performing"
                image={illustration} />

            <Shortener />

            <div className={style.content}>
                <History />
                <Stats />
            </div>
        </>
    );
}

export default Home;