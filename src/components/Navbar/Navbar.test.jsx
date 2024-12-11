import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";

describe("Navbar component", () => {
    it("renders all navbar elements", () => {
        render(<Navbar />);

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Shop")).toBeInTheDocument();
        expect(screen.getByTitle("cart")).toBeInTheDocument();
    })
});