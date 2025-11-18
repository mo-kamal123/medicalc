import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.jsx';

/**
 * Application Entry Point
 *
 * This is the main entry point of the MediConsult Installments Calculator application.
 * It renders the App component inside React's StrictMode for better development experience.
 *
 * StrictMode helps identify potential problems in the application by:
 * - Identifying components with unsafe lifecycles
 * - Warning about legacy string ref API usage
 * - Detecting unexpected side effects
 * - Warning about deprecated findDOMNode usage
 */

// Get the root DOM element and create a React root
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the App component wrapped in StrictMode
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
