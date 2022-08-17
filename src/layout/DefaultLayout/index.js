import Header from '~/layout/Components/Header';
import Sidebar from '../Components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'stretch', position: 'relative' }}>
            <Sidebar />
            <div className="container" style={{ marginLeft: 'var(--width-sidebar)', width: '100%' }}>
                <Header />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
