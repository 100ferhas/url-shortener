import Button from '../Button/Button';
import style from './Banner.module.scss';

const Banner = (props: {
    title: string,
    subtitle: string,
    image: string,
    buttonText: string,
}) => {

    return (
        <div className={style.banner}>
            <div className={style.text}>
                <div className={style.content}>
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                    <Button href='#' text={props.buttonText} type='primary' />
                </div>
            </div>

            <div className={style.image}>
                <img alt='banner-img' src={props.image} />
            </div>
        </div>
    );
}

export default Banner;