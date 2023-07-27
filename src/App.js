import { useEffect, useState, createContext } from 'react';

import './App.css';
import NcR from './comp/NcR';
import NpR from './comp/NpR';
import Fac from './comp/fact';


export const ctx = createContext();
let x = 171;
let Fact = Array(x);
Fact[0] = 1;
Fact[1] = 1;

for(let i = 2 ; i < x ; i++){
  Fact[i] = i * Fact[i - 1];
}

function App() {
  const [flag, setFgal] = useState(1);
  useEffect(()=>{
    if(!localStorage.getItem("flag")){
      localStorage.setItem("flag", 1);
    }else{
      setFgal(localStorage.getItem("flag"))
    }
  }, [])
  let move = (e) => {
    localStorage.setItem("flag", e);
    setFgal(e);
  }
  let ar = [
    {
      flg:1,
      ins:"NCR"
    },
    {
      flg:2,
      ins:"NPR"
    },
    {
      flg:3,
      ins:"fact"
    }
  ];
  
  return (
    <div className='container'>
      <ctx.Provider value={Fact}>
          <div className="title">
            <h1>Combinatorics <sub>Big Integers</sub></h1>
          </div>
          <div className='tab'>
            {
              ar.map((el, idx)=>{
                return(
                  <button className={(flag == el.flg)? 'active':""} onClick={()=>{move(el.flg)}}>{el.ins}</button>
                )
              })
            }
          </div>
          {
            (flag == 1)?(
              < NcR />
            ):(
              (flag == 2)?(
                < NpR />
              ):(
                < Fac />
              )
            )
          }
        </ctx.Provider>
    </div>
  );
}

export default App;
