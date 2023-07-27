import { useContext, useState } from "react";
import { ctx } from "../App";

const Fac = () => {
    
    const [x, setx] = useState(0)
    const [res, setres] = useState(0)
    let c = useContext(ctx);
  
    let fact = c;
    const setter = (xval) => {
        
        if(xval > 170|| isNaN(xval)){
            setres("very big");
            return;
        }
        setres(fact[xval]);
    }
    return(
        <div className="ncr">
            <input type="text" onChange={(e)=>{setx(e.target.value);console.log(e.target.value);}}  />
            <button onClick={()=>setter(x)}>
                    calc
            </button>
            {res}
        </div>
    )
}
export default Fac;


