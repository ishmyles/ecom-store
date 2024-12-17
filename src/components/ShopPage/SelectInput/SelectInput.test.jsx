import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import SelectInput from "./SelectInput";

const mockData = ["all","electronics","jewelery","men's clothing","women's clothing"]

describe('SelectInput component', () => {
  it("renders the props passed into it", async () => {

    render(<SelectInput id={"selected-category"} label={"Filter by"} values={mockData} options={mockData} />);
    
    expect(screen.getByLabelText("Filter by:")).toBeInTheDocument();
    expect(screen.getByText("all")).toBeInTheDocument();
    expect(screen.getByText("electronics")).toBeInTheDocument();
    expect(screen.getByText("jewelery")).toBeInTheDocument();
    expect(screen.getByText("men's clothing")).toBeInTheDocument();
    expect(screen.getByText("women's clothing")).toBeInTheDocument();
  });
});