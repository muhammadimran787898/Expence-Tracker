
import { useSelector } from "react-redux";


export default function Cards() {
    const transactions = useSelector((state) => state.transaction)
    let myamount=transactions.map(trans=>trans.amount)
    

    let income=myamount.filter((a=>a>0))
   let myincome=income.reduce((a,b)=> a=+a + +b,0)

    let expence=myamount.filter((a=>a<0));
    let myexpence=expence.reduce((a,b)=> a=+a + +b,0);
    
    


    return(<div>
                <div className="card" >
                    <h2 >INCOME</h2>
                     <h2 className="income">Rs:{myincome}</h2></div>

                <div className="card2" >
                    <h2 >EXPENCE</h2>
      <h2 className="expence">Rs:{myexpence}</h2>
      </div>
            </div>)}
    
