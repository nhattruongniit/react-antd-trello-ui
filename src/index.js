import ReactDOM from 'react-dom/client';
import App from './App';
import Report from './Report';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
// styles
import './index.css';
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AppProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </AppProvider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
