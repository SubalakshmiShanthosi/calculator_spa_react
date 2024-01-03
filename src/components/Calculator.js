import { Fragment, useState, useRef } from "react";

// @ts-ignore
export const calculateExpression = (expression) => {
    const mulRegex = /×/g;
    const divRegex = /÷/g;
    const divideByZero = /\/0/g;
  
    const toEvaluate = expression.replace(mulRegex, "*").replace(divRegex, "/");
  
    try {
      if (divideByZero.test(toEvaluate)) {
        throw new Error("Can not divide by 0!");
      }
  
      // todo - refactor eval later
      const result = eval(toEvaluate);
  
      return result;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  };

const Calculator = () => {

    //const numbers = [0,1,2,3,4,5,6,7,8,9]
    const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [".", 0]];
    const calcOperators = ["+", "-", "×", "÷"];
    const equalAndRoundBrackets = ["(", ")"];
    const [calcTextBox, setCalcTextBox] = useState('');
    // Input Field handler
    const handleUserInput = event => {
        setCalcTextBox(event.target.value);
    };

    // Reset Input Field
    const resetInputField = () => {
        setCalcTextBox('');
    };
    
    const clearInputField = () => {
        const newVal = calcTextBox.substring(0, calcTextBox.length - 1);

        setCalcTextBox(newVal);
    };

    const calculate = () => {
        const results = calculateExpression(calcTextBox);
        setCalcTextBox(results);
      };
    const clear = "CE";
    const ref = useRef(null);
    return (

        <div className="calculator">
            <h1>Calculator</h1>
            <input type="text" id="equation"  data-testid="your-id" name="calcTextBox"  onChange={handleUserInput}  value={calcTextBox} placeholder="calculate"  />
            <div role="grid">
                
                {equalAndRoundBrackets.map((aElement,i) => {
                 
                    return (
                       
                        <div role="rowNew" className="p-4 flex items-center bg-slate-200 justify-between">
                        {i===1 && <button onClick={resetInputField}>CE</button>}
                        {<button key={aElement} onClick={() => setCalcTextBox(calcTextBox.concat(aElement.toString()))}>{aElement.toString()}</button>}
                        {i===1 && <button onClick={clearInputField}>C</button>}
                        </div>
                        
                    )
                })}
                
                {rows.map((row,i) => {
                    return (
                        <Fragment key={row.toString()}>
                        <div role="row">
                           
                            {row.map((n,i) => (
                                
                                <button key={n} onClick={() => setCalcTextBox(calcTextBox.concat(n.toString()))}>{n}</button>
                            ))
                            }
                            {i===3 && <button onClick={calculate}>=</button>}
                        </div>
                        </Fragment>
                    );
                })}
                {calcOperators.map((operator) => {
                    return (
                        <button key={operator} onClick={() => setCalcTextBox(calcTextBox.concat(operator.toString()))}>{operator.toString()}</button>)
                })}
            </div>
        </div>);
};

export default Calculator;
