import {fireEvent, render, screen } from "@testing-library/react";
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

describe("Check if the app is accepting input from screen",() =>{
  it("check if text box exists", () =>{
    render(<Calculator/>);
    
    //const input = screen.getByRole("textbox", { name: /calcTextBox/i });
    //expect(input).toBeInTheDocument();
    expect(screen.queryByTestId('your-id')).toBeInTheDocument();
  });
  
});

describe("Check if the textbox is showing triggered keys",() =>{
    it("check if clicked button value displayed on textbox",async () =>{
      render(<Calculator/>);
      const one = screen.getByText("1");
      const two = screen.getByText("2");
      const plus = screen.getByText("+");
      fireEvent.click(one);
      fireEvent.click(plus);
      fireEvent.click(two);
      const result = await screen.findByPlaceholderText("calculate");
      // @ts-ignore
      expect(result.value).toBe("1+2");
    });
});

describe("Check if clear all action is working",() =>{
  it("check if CE button clears all content on textbox", async() =>{
    render(<Calculator/>);
    const clearAll= screen.getByText("CE");
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const plus = screen.getByText("+");
    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(two);
    fireEvent.click(clearAll);
    const result = await screen.findByPlaceholderText("calculate");
    // @ts-ignore
    expect(result.value).toBe("");
  })
})