import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
//component
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <div className={cx('menu-item')}>
            <Button icon={data.icon} normal className={cx('button')} to={data.to}>
                {data.title}
            </Button>
        </div>
    );
}
MenuItem.prototypes = {
    data: PropTypes.object.isRequired,
};
export default MenuItem;
