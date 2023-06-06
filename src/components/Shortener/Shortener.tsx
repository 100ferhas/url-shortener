import { useState } from 'react';
import Button from '../Button/Button';
import style from './Shortener.module.scss';
import { HISTORY_KEY, saveHistory } from "../../service/storage";

const Shortener = () => {
    const [link, setLink] = useState<string>("");
    const [error, setError] = useState<string>("");

    const isValidURL = (link: string): boolean => {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(link);
    }

    const shorten = () => {
        if (!link) {
            setError("Please add a link");
        } else if (!isValidURL(link)) {
            setError("Please add a valid link");
        } else {
            setError("");

            saveHistory(window.localStorage, {
                inputLink: link,
                shortenLink: link,
                shortenDate: new Date(),
            });

            setLink("");
            window.dispatchEvent(new StorageEvent("storage", { key: HISTORY_KEY }));
        }
    }

    return (
        <div className={style.shortener}>
            <div className={style.form}>
                <div className={style.input}>
                    <input value={link} autoFocus={true} type="text" placeholder='Shorten a link here...'
                        onChange={(e) => setLink(e.target.value)} className={`${style.field} ${error ? style.error : ''}`} />
                    <small className={style.error}>
                        {error}&nbsp;
                    </small>
                </div>
                <Button text='Shorten It!' type='primary' shape="square" href='#!' onClick={shorten} />
            </div>
        </div>
    );
}

export default Shortener;