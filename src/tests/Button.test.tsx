import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button";
import { BiLoader } from "react-icons/bi";

describe("Button Component", () => {
  test("renders button with correct label", () => {
    render(<Button label="Click Me" />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("button is disabled when loading is true", () => {
    render(<Button label="Submit" loading={true} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("button is disabled when disabled is true", () => {
    render(<Button label="Submit" disabled={true} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("button is enabled when disabled and loading are false", () => {
    render(<Button label="Click Me" disabled={false} loading={false} />);

    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  test("applies correct styles based on variant prop", () => {
    const { rerender } = render(<Button label="Click Me" variant="fill" />);

    expect(screen.getByRole("button")).toHaveClass(
      "bg-primary text-white hover:bg-secondary"
    );

    rerender(<Button label="Click Me" variant="outline" />);

    expect(screen.getByRole("button")).toHaveClass(
      "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white"
    );
  });
});
