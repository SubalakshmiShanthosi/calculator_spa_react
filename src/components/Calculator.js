const Calculator = () => {

const numbers = [0,1,2,3,4,5,6,7,8,9]
return(

 <div className="calculator">
    <h1>Calculator</h1>
    {numbers.map((n) => (
        <button key={n}>{n.toString()}</button>)
    )}
 </div>);
};

export default Calculator;
