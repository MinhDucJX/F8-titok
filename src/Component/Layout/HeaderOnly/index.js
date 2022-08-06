import Header from '../Components/Header';

function HeaderOnly({ children }) {
    return (
        <header>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </header>
    );
}

export default HeaderOnly;
