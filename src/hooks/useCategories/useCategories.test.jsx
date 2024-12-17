import jest from "jest-mock"
import { describe, it, expect } from 'vitest';

import useCategories from './useCategories';
import { renderHook, waitFor } from "@testing-library/react";

describe('useCategories hook', () => {
  it("successfully returns the api call of categories", async () => {
    window.fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve(["electronics","jewelery","men's clothing","women's clothing"])}))

    const { result } = renderHook(() => useCategories());

    await waitFor(() => expect(result.current.categoryList).toHaveLength(5));
  });

  it("unsuccessful request returns the predefined categories", async () => {
    window.fetch = jest.fn(() => Promise.reject(new Error("Bad request")));

    const { result } = renderHook(() => useCategories());

    await waitFor(() => expect(result.current.categoryList).toHaveLength(5));
  });
});