import style from "./Menu.module.scss";
import { ReactComponent as Logo } from "./../../assets/images/logo.svg";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className={style.menu}>
                <div className={style.left_menu}>
                    <a href="#!"><Logo className={style.logo} /></a>
                    <a href="#!">Features</a>
                    <a href="#!">Pricing</a>
                    <a href="#!">Resources</a>
                </div>

                <div className={style.right_menu}>
                    <a href="#!">Login</a>
                    <Button type="primary" href="#!" text="Sign up" />
                </div>

                <div className={style.mobile_menu}>
                    <a href="#!"><Logo className={style.logo} /></a>
                    <a href="#!" onClick={() => setOpen(!open)}>
                        {
                            open && <FontAwesomeIcon icon={faXmark} size="2x" />
                        }
                        {
                            !open && <FontAwesomeIcon icon={faBars} size="2x" />
                        }
                    </a>
                </div>
            </div>

            <div className={`${style.mobile_dropdown} ${open ? '' : style.hidden}`}>
                <a href="#!">Features</a>
                <a href="#!">Pricing</a>
                <a href="#!">Resources</a>
                < hr />
                <a href="#!">Login</a>
                <Button type="primary" href="#!" text="Sign up" />
            </div>
        </>
    );
}

export default Menu;