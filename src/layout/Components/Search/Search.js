import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
//icon
import { BiSearch, BiXCircle, BiLoaderAlt } from 'react-icons/bi';
//component
import useDebounce from '~/hooks/useDebounce';
import * as SearchServices from '~/services/SearchService';
import Images from '~/assets/Images';
import SearchItem from './SearchItem';

const cx = classNames.bind(styles);

const itemMovie = [
    {
        imageMovie: Images.noneImage,
        titel: 'test ting lam ',
    },
];
function Search() {
    const [valueSearch, setValueSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [focusInput, setFocusInput] = useState(false);

    const debouncedValue = useDebounce(valueSearch, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setResultSearch([]);
            return;
        }

        const fetchApi = async () => {
            setLoadingSearch(true);
            const result = await SearchServices.search(debouncedValue);
            const resultSlice = result.results.slice(0, 10);
            setResultSearch(resultSlice);
            setLoadingSearch(false);
        };
        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setValueSearch('');
        setResultSearch([]);
        inputRef.current.focus();
    };
    const handleChange = (e) => {
        const valueSearch = e.target.value;
        if (!valueSearch.startsWith(' ')) {
            setValueSearch(valueSearch);
        }
    };

    return (
        <div className={cx('search')}>
            <div className={cx('container')}>
                <BiSearch className={cx('icon')} />
                <input
                    ref={inputRef}
                    placeholder="Search..."
                    className={cx('input')}
                    onChange={handleChange}
                    value={valueSearch}
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => setFocusInput(false)}
                ></input>
                <div className={cx('control')}>
                    {!loadingSearch && valueSearch && (
                        <div className={cx('clear')} onClick={handleClear}>
                            <BiXCircle />
                        </div>
                    )}
                    {loadingSearch && (
                        <div className={cx('loading')}>
                            <BiLoaderAlt />
                        </div>
                    )}
                </div>
            </div>
            <div className={!focusInput ? cx('search-result') : cx('search-result', 'active')}>
                {focusInput && (
                    <div className={cx('result-container')}>
                        <SearchItem data={resultSearch} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
