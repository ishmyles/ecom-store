import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Home from './Home';

describe('Home', () => {
  it("renders correct heading", () => {
    render(<Home />)
    expect(screen.getByRole("heading").textContent).toMatch(/home/i);
  });
});