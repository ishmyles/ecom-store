import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar";

describe("Navbar component", () => {
    it("renders all navbar elements", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Shop")).toBeInTheDocument();
        expect(screen.getByTitle("cart")).toBeInTheDocument();
    })
});