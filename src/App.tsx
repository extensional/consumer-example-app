import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { ListOfExamples } from './ListOfExamples';
import { Header } from './header/Header';
import { routes } from './routes';
import { Landing } from './landing/Landing';

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header />
                <div className="app-content">
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/examples' element={<ListOfExamples />} />
                        {
                            routes.map(r =>
                                <Route key={r.path} path={r.path} element={r.element} />
                            )
                        }
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
