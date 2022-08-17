import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import Images from '~/assets/Images';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = Images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.node,
};
export default Image;
