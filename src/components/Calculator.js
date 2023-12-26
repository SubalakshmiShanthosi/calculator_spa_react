import { Fragment, useState } from "react";


const Calculator = () => {

    //const numbers = [0,1,2,3,4,5,6,7,8,9]
    const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [".", 0, "="]];
    const calcOperators = ["+", "-", "x", "÷"];
    const equalAndRoundBrackets = ["(", "CE", ")", "C"];
    const [value, setValue] = useState("");
    const clearValue = () => setValue("");
    const clear = "CE";
    return (

        <div className="calculator">
            <h1>Calculator</h1>
            <input type="text"  data-testid="your-id" name="calcTextBox" defaultValue={value} placeholder="calculate" disabled />

            <div role="grid">

                {equalAndRoundBrackets.map((aElement,i) => {
                    {i===2 && <button onClick={clearValue}>{clear}</button>}
                    return (
                        <button key={aElement}>{aElement.toString()}</button>
                    )
                })}
                {rows.map((row) => {
                    return (
                        <Fragment key={row.toString()}>
                        <div role="row">
                            
                            {row.map((n) => (
                                <button key={n} onClick={() => setValue(value.concat(n.toString()))}>{n}</button>
                            ))
                            }
                        </div>
                        </Fragment>
                    );
                })}
                {calcOperators.map((operator) => {
                    return (
                        <button key={operator} onClick={() => setValue(value.concat(operator.toString()))}>{operator.toString()}</button>)
                })}
            </div>
        </div>);
};

export default Calculator;
