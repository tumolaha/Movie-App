import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
//icon
import { BiHome, BiGridAlt, BiCompass, BiSearch, BiChart, BiCalendar, BiChevronLeft } from 'react-icons/bi';

import Image from '~/components/Image';
import Images from '~/assets/Images';
import Button from '~/components/Button';
import { useState } from 'react';
import configRouter from '~/config/router';
const cx = classNames.bind(styles);
function Sidebar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);

    const openHideMenu = () => {
        if (openMenu) {
            setOpenMenu(false);
        } else {
            setOpenMenu(true);
        }
    };
    return (
        <div>
            <div className={cx('sub', `${openMenu ? 'close' : ''}`)}>
                <div className={cx('wrapper', `${openMenu ? 'close' : ''}`)}>
                    <div className={cx('icon-open')} onClick={openHideMenu}>
                        <BiChevronLeft />
                    </div>
                    <div className={cx('logo')}>Image</div>
                    <div className={cx('container')}>
                        <div className={cx('sub-header')}>Menu</div>
                        <div className={cx('control')}>
                            <Button
                                className={cx('item', 'active')}
                                icon={<BiHome />}
                                text
                                textCenter
                                iconLeftTop
                                sizeIcon={'2.3rem'}
                                to={configRouter.Home}
                            >
                                Home
                            </Button>
                            <Button
                                className={cx('item')}
                                icon={<BiGridAlt />}
                                text
                                textCenter
                                iconLeftTop
                                sizeIcon={'2.3rem'}
                                to={configRouter.Category}
                            >
                                Category
                            </Button>
                            <Button
                                className={cx('item')}
                                icon={<BiCompass />}
                                text
                                textCenter
                                iconLeftTop
                                sizeIcon={'2.3rem'}
                                to={configRouter.Explore}
                            >
                                Explore
                            </Button>
                            <Button
                                className={cx('item')}
                                icon={<BiSearch />}
                                text
                                textCenter
                                iconLeftTop
                                sizeIcon={'2.3rem'}
                                to={configRouter.Search}
                            >
                                Search
                            </Button>
                            <Button
                                className={cx('item')}
                                icon={<BiChart />}
                                text
                                textCenter
                                iconLeftTop
                                sizeIcon={'2.3rem'}
                                to={configRouter.RankMovie}
                            >
                                Rank Movie
                            </Button>
                            <Button
                                className={cx('item')}
                                icon={<BiCalendar />}
                                text
                                textCenter
                                iconLeftTop
                                sizeIcon={'2.3rem'}
                                to={configRouter.ComingOut}
                            >
                                Coming Out
                            </Button>
                            <div className={cx('active-control')}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
