const Calculator = () => {

//const numbers = [0,1,2,3,4,5,6,7,8,9]
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [".",0,"="]];
const calcOperators = ["+","-","x","÷"];
const equalAndRoundBrackets = ["(", "CE", ")","C"];

return(

    <div className="calculator">
        <h1>Calculator</h1>
        <div role="grid">
            {equalAndRoundBrackets.map((aElement) => {
                return (
                    <button key={aElement}>{aElement.toString()}</button>
                )
            })}
            {rows.map((row) =>{
                return(
                    <div key={row.toString()} role="row">
                        {row.map((n) => (
                            <button key={n}>{n.toString()}</button>
                        ))
                        }
                        </div>
                );
            })}
            {calcOperators.map((operator) => {
                return (
                    <button key={operator}>{operator.toString()}</button>)
            })}
        </div>
    </div>);
};

export default Calculator;
