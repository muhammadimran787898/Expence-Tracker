
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';

import { deletetransaction } from "./mystore";
export default function Tranhistory() {
    let dispatch= useDispatch()
    const transactions = useSelector((state) => state.transaction);
    console.log(transactions);
    

    return (<div>
        <p className="tranhis">Transcation History</p>
        <ul>
        {transactions.map(transaction => {
            let sign=transaction.amount > 0 ? "plus" : "minus";
            return<li className={sign}>
                <span >{transaction.trantype}</span>
                <span >{transaction.amount}</span>
                <button className="btn" onClick={()=>( dispatch(deletetransaction(transaction.id)))}>X</button>
                </li>})}
                </ul> 
      </div>);
} 




