import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hellow world in the app output", () => {
    render(<App />);
    const linkElement = screen.getByText(/echo "Hello World!"/i);
    expect(linkElement).toBeInTheDocument();
});
