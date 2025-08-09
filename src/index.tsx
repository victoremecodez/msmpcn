import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import BackToTop from './components/common/BackToTop.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const backToTopRootElement = document.getElementById('back-to-top-root');
if (backToTopRootElement) {
    const backToTopRoot = ReactDOM.createRoot(backToTopRootElement);
    backToTopRoot.render(
        <React.StrictMode>
            <BackToTop />
        </React.StrictMode>
    );
}