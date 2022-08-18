import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
//icon
import {
    BiDownload,
    BiCrown,
    BiUserCircle,
    BiCog,
    BiUser,
    BiWorld,
    BiLogOutCircle,
    BiQuestionMark,
    BiBookAdd,
    BiAlarm,
    BiAdjust,
} from 'react-icons/bi';

//component
import Search from '../Search';
import Button from '~/components/Button';
import Headless from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu/Menu';
import { PopperWrapper } from '~/components/Popper';
import History from '../HIstory/History';
import Images from '~/assets/Images';
import Image from '~/components/Image';
import VipAccount from './VipAccount';

const cx = classNames.bind(styles);

const ACCOUNT_ITEMS = [
    {
        icon: <BiUser />,
        title: 'Xem hồ sơ',
    },

    {
        icon: <BiBookAdd />,
        title: 'Sưu tập của tôi ',
    },
    {
        icon: <BiAlarm />,
        title: 'Phim đặt trước ',
    },
    {
        icon: <BiQuestionMark />,
        title: 'Phản hồi và trợ giúp ',
    },
    {
        icon: <BiLogOutCircle />,
        title: 'Đăng xuất ',
    },
];
const SETTING_ITEMS = [
    {
        icon: <BiWorld />,
        title: 'Tiếng Việt',
    },
    {
        icon: <BiAdjust />,
        title: 'Giao diện',
    },
];
function Header() {
    const [currentUser, setCurrentUser] = useState(false);
    useEffect(() => {
        setCurrentUser(true);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <Search />
            </div>
            <div className={cx('right')}>
                <div className={cx('history', 'item')}>
                    <History currentUser={currentUser} />
                </div>
                <div className={cx('setting', 'item')}>
                    <Headless
                        interactive
                        trigger="click"
                        placement="bottom"
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <Menu items={SETTING_ITEMS} />
                            </div>
                        )}
                    >
                        <Button radius iconOnly>
                            <BiCog />
                        </Button>
                    </Headless>
                </div>
                <div className={cx('account', 'item')}>
                    <Headless
                        interactive
                        trigger="click"
                        placement="bottom"
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                {currentUser ? (
                                    <Menu items={ACCOUNT_ITEMS} />
                                ) : (
                                    <div className={cx('account-login')}>
                                        <PopperWrapper>
                                            <div className={cx('account-container')}>
                                                <div className={cx('account-title')}>
                                                    Đăng nhập để theo dõi các nội dung mới nhất
                                                </div>
                                                <Button primary>Đăng nhập</Button>
                                            </div>
                                        </PopperWrapper>
                                    </div>
                                )}
                            </div>
                        )}
                    >
                        <Button radius iconOnly>
                            <BiUserCircle />
                        </Button>
                    </Headless>
                </div>
                <div className={cx('get-app', 'item')}>
                    <Headless
                        interactive
                        placement="bottom"
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <div className={cx('app-container')}>
                                        <div className={cx('app-title')}>
                                            <p className={cx('text-highlight')}>
                                                Quét mã QR tải ứng dụng về điện thoại di động, nhận VIP miễn phí
                                            </p>
                                            <span>Chỉ dành cho khách hàng mới trên điện thoại di động nhé</span>
                                        </div>
                                        <div className={cx('app-qr')}>
                                            <Image src={Images.appQr} alt="app" />
                                        </div>
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <Button outline icon={<BiDownload />}>
                            <span> APP</span>
                        </Button>
                    </Headless>
                </div>
                <div className={cx('account-vip', 'item')}>
                    <VipAccount />
                </div>
            </div>
        </div>
    );
}

export default Header;
