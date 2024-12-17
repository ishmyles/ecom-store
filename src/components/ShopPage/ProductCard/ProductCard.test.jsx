import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ProductCard from "./ProductCard";

const mockData =   {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
}

describe('Product Card component', () => {
  it("renders the props passed into it", () => {
    render(<ProductCard key={mockData.id} id={mockData.id} title={mockData.title} rating={mockData.rating} price={mockData.price} image={mockData.image} />);

    expect(screen.getByText("Mens Casual Premium Slim Fit T-Shirts")).toBeInTheDocument();
    expect(screen.getByText("⭐ 4.1 (259)")).toBeInTheDocument();
    expect(screen.getByText("$22.3")).toBeInTheDocument();
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });
});