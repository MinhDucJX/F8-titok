import Header from '../Components/Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <header>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </header>
    );
}

export default DefaultLayout;
