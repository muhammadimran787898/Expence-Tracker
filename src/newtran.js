import React, { useState } from "react";
import { useDispatch } from "react-redux";
import store from './mystore';
import { newtransaction } from './mystore';
// import { useForm } from "react-hook-form";

var ID = function () {
    
    return '_' + Math.random().toString(36).substr(2, 9);
    
  };

export default function Newtran() {
    let dispatch = useDispatch();
    const [trantype, setTrantype] = useState("");
    const [amount, setAmount] = useState("");

    const addnewtran = (e) => {
        e.preventDefault();
        let id=ID();
        let mytradata = {
            trantype: trantype,
            amount:amount,
            id:id
        }; 
        dispatch(newtransaction(mytradata));
        
    }
   
    return (
        <form className="newtran" >
            <h1 className="nth">New Transaction </h1>
            <div className="input">
                <input className="trt" type="text"
                    onChange={(e)=>setTrantype(e.target.value)} value={trantype}
                    placeholder="Enter Transaction " />
                <div>

                    <input className="amount" 
                        onChange={(e)=>setAmount(e.target.value)} value={amount} 
                        type="text" placeholder="Enter Amount" />
                </div>
                    
           </div>
                <div>
                <button type="submit" onClick={(e)=>addnewtran(e)} className="trab">ADD NEW TRANSACTION</button>
                </div>

        </form>
    )

    
}