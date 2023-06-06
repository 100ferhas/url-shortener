import { MouseEventHandler } from 'react';
import style from './Button.module.scss';

const Button = (props: {
    text: string,
    href: string,
    type?: 'default' | 'primary' | 'dark',
    shape?: 'square' | 'rounded',
    onClick?: MouseEventHandler<Element>,
}) => {

    return <a
        className={`btn ${style['btn']} ${style[props.type || 'default']} ${style[props.shape || 'rounded']}`}
        href={props.href}
        onClick={props.onClick}>
        {props.text}
    </a>
}

export default Button;