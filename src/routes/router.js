// Layouts
import { HeaderOnly } from '~/layout';
import configRouter from '~/config/router';
// Pages
import Home from '~/pages/Home/Home';
import Category from '~/pages/Category';
import Explore from '~/pages/Explore';
import Search from '~/pages/Search';

import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import RankMovie from '~/pages/RankMovie/RankMovie';
import ComingOut from '~/pages/ComingOut';

// Public routes
const publicRoutes = [
    { path: configRouter.Home, component: Home },
    { path: configRouter.Category, component: Category },
    { path: configRouter.Explore, component: Explore },
    { path: configRouter.Search, component: Search },
    { path: configRouter.RankMovie, component: RankMovie },
    { path: configRouter.ComingOut, component: ComingOut },
    { path: configRouter.Following, component: Following },
    { path: configRouter.Profile, component: Profile },
    { path: configRouter.History, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
