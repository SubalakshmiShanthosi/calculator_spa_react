import { render, screen } from "@testing-library/react";
import React from "react";
import Calculator from "./components/Calculator";

describe("Check if calculator component has numeric numbers", () => {
    it("shows numbers", () => {
      render(<Calculator />);
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
      numbers.forEach((n) => {
        expect(screen.getByText(n.toString())).toBeInTheDocument();
      });
    });
  });

describe("Check if calculator buttons are grouped",() =>{
    it("check for rows of keys",() => {
        render(<Calculator/>);
        const rows = screen.getAllByRole("row");
        expect(rows).toHaveLength(4);
    });
});

describe("Check if mathematical operations are listed",() =>{
    it("check if math operators available on screen",() =>{
        render(<Calculator/>);
        const calcOperators =["+","-","x","÷"];
        calcOperators.forEach((operator) => {
           expect(screen.getByText(operator.toString())).toBeInTheDocument();
        });
    });
});

describe("Check if equals symbol and close braces exists on screen", () => {
  it("check if equal and close braces exists", () =>{
    render(<Calculator/>);
    const equalAndRoundBrackets = ["=", "(",")"];
    equalAndRoundBrackets.forEach((eqRndBrac) => {
      expect(screen.getByText(eqRndBrac.toString())).toBeInTheDocument();
    });
  });
});