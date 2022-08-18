import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
//icon

//components
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button(
    {
        to,
        href,
        normal = false,
        primary = false,
        outline = false,
        radius = false,
        text = false,
        textCenter = false,
        highlight = false,
        iconOnly = false,
        background,
        sizeChildren,
        sizeIcon,
        icon,
        iconLeftTop = false,
        iconRight = false,
        iconTop,
        className,
        children,
        onClick,
        ...passProp
    },
    ref,
) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProp,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        normal,
        primary,
        highlight,
        outline,
        radius,
        icon,
        text,
        iconOnly,
        iconLeftTop,
        iconRight,
        iconTop,
        textCenter,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props} ref={ref}>
            {icon && iconTop && (
                <div className={cx('icon')} style={{ fontSize: `${sizeIcon}` }}>
                    {icon}
                </div>
            )}
            {icon && iconLeftTop && (
                <div className={cx('icon')} style={{ fontSize: `${sizeIcon}` }}>
                    {icon}
                </div>
            )}
            {icon && !iconRight && !iconLeftTop && !iconTop && (
                <div className={cx('icon-left', 'icon')} style={{ fontSize: `${sizeIcon}` }}>
                    {icon}
                </div>
            )}
            <div className={cx('content')} style={{ fontSize: `${sizeChildren}` }}>
                {children}
            </div>
            {icon && iconRight && (
                <div className={cx('icon-right', 'icon')} style={{ fontSize: `${sizeIcon}` }}>
                    {icon}
                </div>
            )}
        </Comp>
    );
}
Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    normal: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    radius: PropTypes.bool,
    text: PropTypes.bool,
    textCenter: PropTypes.bool,
    highlight: PropTypes.bool,
    iconOnly: PropTypes.bool,
    iconLeftTop: PropTypes.bool,
    iconRight: PropTypes.bool,
    icon: PropTypes.node,
    iconTop: PropTypes.node,

    size: PropTypes.string,
    sizeChildren: PropTypes.string,
    sizeIcon: PropTypes.string,

    background: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
export default forwardRef(Button);
