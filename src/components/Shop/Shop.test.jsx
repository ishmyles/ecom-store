import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Shop from './Shop';

describe('Shop', () => {
  it("renders correct heading", () => {
    render(<Shop />)
    expect(screen.getByRole("heading").textContent).toMatch(/shop/i);
  });
});