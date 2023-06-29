import { useRef } from "react";
import Banner from "../../components/Banner/Banner";
import Menu from "../../components/Menu/Menu";
import illustration from "../../assets/images/illustration-working.svg";
import Shortener from "../../components/Shortener/Shortener";
import style from "./Home.module.scss";
import History from "../../components/History/History";
import Stats from "../../components/Stats/Stats";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const inputShortener = useRef<HTMLInputElement>(null);

    const scrollToInput = () => {
        inputShortener?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        inputShortener?.current?.focus({ preventScroll: true });
    }

    return (
        <>
            <Menu />

            <Banner
                title="More than just shorter links"
                subtitle="Build your brand's recognition and get detailed insights on how your links are performing"
                buttonText="Get Started"
                buttonOnClick={scrollToInput}
                image={illustration} />

            <Shortener inputShortenerRef={inputShortener} />

            <div className={style.content}>
                <History />
                <Stats />

                <div className={style.boost}>
                    <div className={style.title}>Boost your links today</div>
                    <Button href="#!" onClick={scrollToInput} text="Get Started" type="primary" shape="rounded" />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;