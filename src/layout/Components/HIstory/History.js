import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './History.module.scss';
import Tippy from '@tippyjs/react';
import Headless from '@tippyjs/react/headless';
//icon
import { BiHistory, BiDotsVerticalRounded } from 'react-icons/bi';
//component
import { PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import HistoryItem from './HistoryItem';
import Images from '~/assets/Images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function History({ currentUser }) {
    const [historyResult, setHistoryResult] = useState([]);
    useEffect(() => {
        setHistoryResult([1]);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Tippy content="History">
                <Headless
                    interactive
                    trigger="click"
                    placement="bottom"
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                {currentUser && historyResult.length > 0 ? (
                                    <div className={cx('tippy-History')}>
                                        <div className={cx('container')}>
                                            {historyResult.map((result, index) => (
                                                <HistoryItem data={result} key={index} />
                                            ))}
                                        </div>
                                        <div className={cx('other-button')}>
                                            <Button
                                                iconRight
                                                icon={<BiDotsVerticalRounded />}
                                                normal
                                                className={cx('button')}
                                                textCenter
                                            >
                                                khác
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx('tippy-History')}>
                                        <div className={cx('box-none')}>
                                            <Image src={Images.boxNone} alts="box" />
                                        </div>
                                        <div className={cx('title-history')}>
                                            Đăng nhập để quản lý lịch sử xem nội dung trên các thiết bị khác nhau.
                                        </div>
                                    </div>
                                )}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <Button radius iconOnly>
                        <BiHistory />
                    </Button>
                </Headless>
            </Tippy>
        </div>
    );
}

export default History;
