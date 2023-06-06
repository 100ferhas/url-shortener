import { useEffect, useState } from "react";
import IShorten from "../../models/shortens";
import { HISTORY_KEY, readHistory } from "../../service/storage";
import Button from "../Button/Button";
import style from "./History.module.scss";

const History = () => {
    const BUTTON_TIMEOUT_MS = 3000;

    const [history, setHistory] = useState<IShorten[]>([]);
    const [activeButtonIndex, setActiveButtonIndex] = useState<number>(-1);
    const [timeoutElement, setTimeoutElement] = useState<NodeJS.Timeout>();

    const updateHistory = () => {
        const history = readHistory(window.localStorage);
        setHistory(history);
    }

    useEffect(() => {
        updateHistory();

        const storageEventHandler = (event: StorageEvent) => {
            if (event.key === HISTORY_KEY) {
                updateHistory();
            }
        }

        window.addEventListener("storage", storageEventHandler);
        return () => window.removeEventListener("storage", storageEventHandler);

    }, []);

    return <div className={style.history}>
        {
            history.map((el: IShorten, index: number) => {
                return <div key={index} className={style.url}>
                    <div className={style.long}>{el.inputLink}</div>
                    <hr />
                    <div className={style.short}>
                        <a href={`//${el.shortenLink}`} target="_blank" rel="noreferrer">
                            {el.shortenLink}
                        </a>
                    </div>
                    <Button shape="square" href="#!"
                        text={activeButtonIndex === index ? "Copied!" : "Copy"}
                        type={activeButtonIndex === index ? "dark" : "primary"}
                        onClick={() => {
                            navigator.clipboard.writeText(el.shortenLink);
                            setActiveButtonIndex(index);
                            clearTimeout(timeoutElement);
                            let timeout = setTimeout(() => setActiveButtonIndex(-1), BUTTON_TIMEOUT_MS);
                            setTimeoutElement(timeout);
                        }} />
                </div>
            })
        }
    </div>
}

export default History;