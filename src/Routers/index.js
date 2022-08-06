import Home from '~/Pages/Home';
import Follow from '~/Pages/Follow';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';

// Page public
const publicPage = [
    { path: '/', component: Home },
    { path: '/follow', component: Follow },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null },
];

// Page private
const privatePage = [];

export { publicPage, privatePage };
