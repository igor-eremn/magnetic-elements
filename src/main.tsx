import { StrictMode } from 'react'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'
import { ThemeProvider } from './context/ThemeContext';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
