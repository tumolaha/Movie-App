import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/layout/Components/Header';
import Sidebar from '../Components/Sidebar';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
