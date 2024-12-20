import { render, screen, fireEvent } from "@testing-library/react";
import { TextInput } from "../components/TextInput";

describe("TextInput Component", () => {
  test("renders input with correct label", () => {
    render(<TextInput label="Username" />);

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  test("does not render label when label prop is not provided", () => {
    render(<TextInput />);

    expect(screen.queryByLabelText("Username")).not.toBeInTheDocument();
  });

  test("shows error message when error prop is provided", () => {
    render(<TextInput label="Username" error="This field is required" />);

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  test("does not show error message when error prop is not provided", () => {
    render(<TextInput label="Username" />);

    expect(
      screen.queryByText("This field is required")
    ).not.toBeInTheDocument();
  });

  test("input is disabled when disabled prop is true", () => {
    render(<TextInput label="Username" disabled={true} />);

    expect(screen.getByLabelText("Username")).toBeDisabled();
  });

  test("input is enabled when disabled prop is false", () => {
    render(<TextInput label="Username" disabled={false} />);

    expect(screen.getByLabelText("Username")).not.toBeDisabled();
  });

  test("input value changes when user types", () => {
    render(<TextInput label="Username" />);

    const input = screen.getByLabelText("Username") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "new username" } });

    expect(input.value).toBe("new username");
  });
});
