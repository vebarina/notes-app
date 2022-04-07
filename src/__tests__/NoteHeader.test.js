import { render, screen } from "@testing-library/react";
import NoteHeader from "../components/NoteHeader";

describe("NoteHeader", () => {
  test("Should render div component", () => {
    render(<NoteHeader />);
    const divElement = screen.getByTitle(/note-header/i);
    expect(divElement).toBeInTheDocument();
  });

  test("Should render button", () => {
    render(<NoteHeader />);
    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeInTheDocument();
  });
});
