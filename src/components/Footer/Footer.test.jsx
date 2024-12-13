import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom";

import Footer from './Footer';

describe('Footer', () => {
  it("renders quick link columns", () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Information")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("renders the payment trust badges", () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );

    expect(screen.getByTitle("American Express")).toBeInTheDocument();
    expect(screen.getByTitle("Apple Pay")).toBeInTheDocument();
    expect(screen.getByTitle("Google Pay")).toBeInTheDocument();
    expect(screen.getByTitle("Mastercard")).toBeInTheDocument();
    expect(screen.getByTitle("PayPal")).toBeInTheDocument();
    expect(screen.getByTitle("Shop Pay")).toBeInTheDocument();
    expect(screen.getByTitle("Union Pay")).toBeInTheDocument();
    expect(screen.getByTitle("Visa")).toBeInTheDocument();
  });
});