import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
//icon

//component
import MenuItem from './MenuItem';
import { PopperWrapper } from '~/components/Popper';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Menu({ items = [] }) {
    return (
        <PopperWrapper>
            <div className={cx('Wrapper')}>
                {items.map((item, index) => (
                    <MenuItem key={index} data={item} />
                ))}
            </div>
        </PopperWrapper>
    );
}
Menu.prototypes = {
    items: PropTypes.array.isRequired,
};
export default Menu;
