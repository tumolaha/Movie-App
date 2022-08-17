import classNames from 'classnames/bind';
import styles from './History.module.scss';
//component
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function HistoryItem() {
    return (
        <div className={cx('history-item')}>
            <div className={cx('image')}>
                <Image className={cx('img')} src={require('~/assets/Images/no-image.png')} alt="movie" />
            </div>
            <div className={cx('content')}>
                <h5 className={cx('title')}>header</h5>
                <p className={cx('episode')}>Tập 1</p>
                <div className={cx('time-bar')}>
                    <div className={cx('time')} style={{ width: '100%' }}></div>
                </div>
            </div>
        </div>
    );
}

export default HistoryItem;
