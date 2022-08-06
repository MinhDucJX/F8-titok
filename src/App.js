import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicPage } from './Routers';
import { DefaultLayout, HeaderOnly } from '~/Component/Layout';

function App() {
    return (
        <Router>
            <Routes>
                {publicPage.map((page, index) => {
                    //Layout Default is DefaultLayout
                    let Layout = DefaultLayout;
                    if (page.layout) {
                        Layout = page.layout;
                    } else if (page.layout === null) {
                        Layout = HeaderOnly;
                    }

                    const Page = page.component;
                    return (
                        <Route
                            key={index}
                            path={page.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
