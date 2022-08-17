import classNames from 'classnames/bind';
import ApiConfig from '~/api/ApiConfig';
import Image from '~/components/Image';
import styles from './Search.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function SearchItem({ data }) {
    return (
        <>
            {data.map((result) => (
                <div className={cx('search-item')} key={result.id}>
                    <div className={cx('search-item-icon')}></div>
                    <div className={cx('search-item-image')}>
                        <Image src={ApiConfig.originalImage(result.backdrop_path)} alt="movie" />
                    </div>
                    <div className={cx('search-item-content')}>
                        <h5 className={cx('title')}>{result.original_title}</h5>
                        <p>{result.release_date}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
SearchItem.prototypes = {
    data: PropTypes.object.isRequired,
};
export default SearchItem;
