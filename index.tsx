import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Scroll Reveal Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Function to observe all reveal elements
const observeElements = () => {
  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
};

// Initial observation
observeElements();

// Re-observe on changes (useful for dynamic content)
const mutationObserver = new MutationObserver(() => {
  observeElements();
});

mutationObserver.observe(rootElement, { childList: true, subtree: true });