import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Home from './Home';

describe('Home', () => {
  it("renders correct section headings", () => {
    render(<Home />)
    
    expect(screen.getByText("Why Shop With Us")).toBeInTheDocument();
    expect(screen.getByText("Our Products")).toBeInTheDocument();
  });
});