import style from "./Footer.module.scss";
import { ReactComponent as Logo } from "./../../assets/images/logo.svg";
import { ReactComponent as FacebookLogo } from "./../../assets/images/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "./../../assets/images/icon-twitter.svg";
import { ReactComponent as PinterestLogo } from "./../../assets/images/icon-pinterest.svg";
import { ReactComponent as InstagramLogo } from "./../../assets/images/icon-instagram.svg";

const Footer = () => {
    return <div className={style.footer}>
        <div className={`${style.column} ${style.large}`}>
            <a href="#!"><Logo className={style.logo} /></a>
        </div>

        <div className={style.column}>
            <span className={style.title}>Features</span>
            <a href="#!">Link Shortening</a>
            <a href="#!">Branded Links</a>
            <a href="#!">Analytics</a>
        </div>

        <div className={style.column}>
            <span className={style.title}>Resources</span>
            <a href="#!">Blog</a>
            <a href="#!">Developers</a>
            <a href="#!">Support</a>
        </div>

        <div className={style.column}>
            <span className={style.title}>Company</span>
            <a href="#!">About</a>
            <a href="#!">Our Team</a>
            <a href="#!">Careers</a>
            <a href="#!">Contact</a>
        </div>

        <div className={style.socials}>
            <a href="#!"><FacebookLogo /></a>
            <a href="#!"><TwitterLogo /></a>
            <a href="#!"><PinterestLogo /></a>
            <a href="#!"><InstagramLogo /></a>
        </div>
    </div>
}

export default Footer;