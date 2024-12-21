import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ShoppingCart from './ShoppingCart';

describe('ShoppingCart', () => {
  it("renders correct heading", () => {
    render(<ShoppingCart />)
    expect(screen.getByRole("heading").textContent).toMatch(/shopping cart/i);
  });
});