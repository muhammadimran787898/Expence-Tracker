
import { useSelector } from "react-redux";

export default function Balance() {
    const transactions = useSelector((state) => state.transaction);
    let amount=transactions.map((tran)=>tran.amount)
    
    let totalamount = amount.reduce((a, b) => a = +a + +b, 0);

         return (<div >
                 <h1 className="balance">  My Balance:{totalamount} </h1>
                      
                  </div>)


}


         


