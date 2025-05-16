
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Define the render function that takes elementId and token as parameters
const renderMyApp = (elementId: string, token: string) => {
  const container = document.getElementById(elementId);
  
  if (!container) {
    console.error(`Failed to find the element with id: ${elementId}`);
    return;
  }
  
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App token={token} />
    </StrictMode>
  );
};

// Define the specific key for the window object
const KEY = 'remote-app';

// Expose the render function to the window object
(window as any)[KEY] = renderMyApp;

// Initialize the app in the default root element if needed
renderMyApp('root', '');
