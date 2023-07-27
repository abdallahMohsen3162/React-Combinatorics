import { useState } from "react";
import { useContext } from "react";
import { ctx } from "../App";
const NpR = () => {
    let c = useContext(ctx);
  
    let fact = c;
    const [res, setRes] = useState(0);
    const [n, setn] = useState(0);
    const [r, setr] = useState(0);

    const calc = () => {
        if(n > 170 | r > 170){
            setRes("outOfRange");
            return;
        }
        
        setRes(fact[n]/fact[n-r]);
    }
    return(
        <div className="ncr">
            <h4>NPR</h4>
            <div className="input-container">
                <input type="text" placeholder="N" onChange={(e)=>setn(e.target.value)} />
                <span>P</span>
                <input type="text" placeholder="R" onChange={(e)=>setr(e.target.value)}/>
                <button onClick={()=>{calc()}}>Calculate</button>
            </div>
            <div className="result">
                result {res}
            </div>
        </div>
    )
}
export default NpR;


