import { useState } from "react";


export default function TipCalculator() {

    const [ bill, setBill ] = useState(0);
    const [ percentage1, setPercentage1 ] = useState(0);
    const [ percentage2, setPercentage2 ] = useState(0);

    const tip = bill * ((percentage1 + percentage2) / 2 / 100);

    function handleReset(){
        setBill(0);
        setPercentage1(0);
        setPercentage2(0);
    }

    return(
        <div className="calculator-container">
            <h1>Tip Happens!😆</h1>
            <Bill bill={bill} setBill={setBill}/>
            <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
                 How much was the bill? 
            </SelectPercentage>
            <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
                How did you like the service?
            </SelectPercentage>
            {
                bill > 0 && (
                    <>
                        <Output bill={bill} tip={tip}/>
                        <Reset onReset={handleReset} />
                    </>
                )
            }
            
        </div>
    );
}

function Bill({ bill, setBill}){
    
    return(
        <div className="container">
            <p>How much was the Bill?</p>
            <input type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))} placeholder="Enter amount"/>
        </div>
    );
}

function SelectPercentage({ children , percentage , setPercentage}){
    console.log( children);
    return(
        <div className="container">
            <label>{children}</label>
            <select value={percentage} onChange={(e) => setPercentage(Number(e.target.value))}>
                <option value="0"> Disstatisfied (0%)</option>
                <option value="5"> It was okay (5%)</option>
                <option value="10"> It was good (10%)</option>
                <option value="20"> Amazing (20%)</option>
            </select>
        </div>
    );
}

function Output({bill, tip}){
    return <div>
         You pay ${bill + tip} (${bill} + ${tip} tip)
    </div>
}

function Reset({onReset}){
    return <button onClick={onReset}>Reset</button>
}