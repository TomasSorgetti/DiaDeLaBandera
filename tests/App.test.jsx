import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("<App/>", () => {
  test("should render App", () => {
    render(<App />);
  });
  test("should render 'Día de la Bandera'", () => {
    expect(screen.getByText("Día de la Soberanía Nacional")).toBeDefined();
  });
  test("should render 'Adiviná las palabras' in a p tag", () => {
    expect(screen.findByTitle("Adiviná las palabras")).toBeDefined();
  });
  test("should render 4 hidden words for complete", () => {
    const words = screen.getAllByTestId("word");
    expect(words).toHaveLength(4);
  });

  // test("should show the word if match", () => {
  //     const user = userEvent.setup()
  //     render(<App />)
  //     const buttons = screen.getByRole("button");
  //     expect(buttons).toBeDefined()
  // })
});
