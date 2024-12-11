import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from '../src/App';

describe('App', () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/ecom store/i);
  });
});