import classNames from 'classnames/bind';
import styles from '../Header.module.scss';
import { BiCrown, BiChevronRight } from 'react-icons/bi';
import { BsTvFill, BsFillBadgeHdFill, BsDropletFill, BsFillShieldFill } from 'react-icons/bs';

//component
import Button from '~/components/Button';
import Image from '~/components/Image';
import Headless from '@tippyjs/react/headless';
import { PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function VipAccount() {
    return (
        <div className={cx('vip-account')}>
            <Headless
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('vip-container')}>
                                <div className={cx('vip-header')}>
                                    <Button text iconRight icon={<BiChevronRight />}>
                                        Quyền lợi thành viên
                                    </Button>
                                </div>
                                <div className={cx('vip-control')}>
                                    <Button
                                        icon={<BsTvFill />}
                                        sizeChildren={'1.2rem'}
                                        sizeIcon={'2.1rem'}
                                        normal
                                        className={cx('button-control')}
                                    >
                                        <span>Hỗ Trợ Đa Nền Tảng</span>
                                    </Button>
                                    <Button
                                        icon={<BsFillBadgeHdFill />}
                                        sizeChildren={'1.2rem'}
                                        sizeIcon={'2.1rem'}
                                        normal
                                        className={cx('button-control')}
                                    >
                                        <span>Blu-ray 1080P</span>
                                    </Button>
                                    <Button
                                        icon={<BsDropletFill />}
                                        sizeChildren={'1.2rem'}
                                        sizeIcon={'2.1rem'}
                                        normal
                                        className={cx('button-control')}
                                    >
                                        <span>Nội Dung Độc Quyền</span>
                                    </Button>
                                    <Button
                                        icon={<BsFillShieldFill />}
                                        sizeChildren={'1.2rem'}
                                        sizeIcon={'2.1rem'}
                                        normal
                                        className={cx('button-control')}
                                    >
                                        <span>Không Quảng Cáo</span>
                                    </Button>
                                </div>
                                <Button primary>Kích hoạt VIP chỉ 400đ/ngày</Button>
                                <Button text>Mã đổi quà</Button>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <Button highlight icon={<BiCrown />}>
                    VIP
                </Button>
            </Headless>
        </div>
    );
}

export default VipAccount;
