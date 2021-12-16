import { render, screen } from '@testing-library/react';
import App from './App';
import { Routes, Switch, BrowserRouter } from 'react-router-dom';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
