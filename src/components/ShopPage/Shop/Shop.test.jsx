import jest from 'jest-mock'
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from "@testing-library/user-event";

import Shop from '../../../components/ShopPage/Shop/Shop'

const initialMockData = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
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
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  }
];

const resultMockData = [
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  }
];

describe('Shop', () => {
  it("renders the correct heading", () => {
    render(<Shop />)
    expect(screen.getByRole("heading").textContent).toMatch(/products/i);
  });

  it("renders all the categories received by the API", async () => {
    window.fetch = jest
    .fn(() => Promise.resolve({json: () => Promise.resolve(resultMockData)}))
    .mockImplementationOnce(() => Promise.resolve({json: () => Promise.resolve(["electronics","jewelery","men's clothing","women's clothing"])}))
    .mockImplementationOnce(() => Promise.resolve({json: () => Promise.resolve(initialMockData)}))

    render(<Shop />)
    
    await waitFor(() => expect(screen.getByText("all")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("electronics")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("jewelery")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("men's clothing")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("women's clothing")).toBeInTheDocument());

  });

  it("renders the products received from the API", async () => {
    window.fetch = jest
    .fn(() => Promise.resolve({json: () => Promise.resolve(resultMockData)}))
    .mockImplementationOnce(() => Promise.resolve({json: () => Promise.resolve(["electronics","jewelery","men's clothing","women's clothing"])}))
    .mockImplementationOnce(() => Promise.resolve({json: () => Promise.resolve(initialMockData)}))

    render(<Shop />)

    screen.debug()

    await waitFor(() => expect(screen.getByText(/Fjallraven/)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Mens Casual Premium Slim Fit T-Shirts")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Mens Cotton Jacket")).toBeInTheDocument());
  });

  it("it displays the filtered products received from the API", async () => {
    window.fetch = jest
    .fn(() => Promise.resolve({json: () => Promise.resolve(resultMockData)}))
    .mockImplementationOnce(() => Promise.resolve({json: () => Promise.resolve(["electronics","jewelery","men's clothing","women's clothing"])}))
    .mockImplementationOnce(() => Promise.resolve({json: () => Promise.resolve(initialMockData)}))

    render(<Shop />)
    screen.debug()

    await waitFor(() => expect(screen.getByText(/Fjallraven/)).toBeInTheDocument());

    await userEvent.selectOptions(screen.getAllByRole('combobox')[0], 'electronics');
    await waitFor(() => expect(screen.getByText(/SanDisk/)).toBeInTheDocument());
  })

  it("it displays the sorted products by Price (descending) ", async () => {
    window.fetch = jest
    .fn(() => Promise.resolve({json: () => Promise.resolve(resultMockData)}))
    .mockImplementationOnce(() => Promise.resolve({json: () => Promise.resolve(["electronics","jewelery","men's clothing","women's clothing"])}))
    .mockImplementationOnce(() => Promise.resolve({json: () => Promise.resolve(initialMockData)}))

    render(<Shop />)
    screen.debug()

    await userEvent.selectOptions(screen.getAllByRole('combobox')[1], 'Price (descending)');
    
    await waitFor(() => expect(screen.getAllByRole("heading")[1].textContent).toMatch(/Fjallraven/));
    await waitFor(() => expect(screen.getAllByRole("heading")[2].textContent).toMatch("Mens Cotton Jacket"));
    await waitFor(() => expect(screen.getAllByRole("heading")[3].textContent).toMatch("Mens Casual Premium Slim Fit T-Shirts"));
  })
});
