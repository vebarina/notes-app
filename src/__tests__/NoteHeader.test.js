import { fireEvent, render, screen } from "@testing-library/react";
import NoteHeader from "../components/NoteHeader";

describe("NoteHeader", () => {
  test("Should render div component", () => {
    render(<NoteHeader />);
    const divElement = screen.getByTitle(/note-header/i);
    expect(divElement).toBeInTheDocument();
  });

  test("Should render button", () => {
    render(<NoteHeader />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("Button should change background color when hovering over and out", () => {
    render(<NoteHeader />);
    const buttonElement = screen.getByRole("button");
    fireEvent.mouseOver(buttonElement);
    expect(buttonElement).toHaveStyle("background: var(--super-light-purple)");
    fireEvent.mouseOut(buttonElement);
    expect(buttonElement).toHaveStyle("background: var(--light-purple)");
  });
});
