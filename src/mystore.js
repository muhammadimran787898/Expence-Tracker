
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";




const initialTransaction = {
    
    transaction: [
        {
            "id": 1,
            "trantype": "imran",
            "amount": "20000",
        },
        {
            "id": 2,
            "trantype": "imran",
            "amount": "-233333",
            
              
        },
        {
            "id": 3,
            "trantype": "hhhgh",
            "amount": "776763",
            
              
        },
        {
            "id": 4,
            "trantype": "imran",
            "amount": "-33",
            
              
        }
    ]
}
 

export const newtransaction = (data) => {
    return {
        type :"NEW-TRANSACTION",
        payload:data,
   }
}

   export const deletetransaction=(id)=>{
       return{
           type:"DEL-TRANSACTION",
           payload:id,
       }
   }


function TransactionReducer(state=initialTransaction, action) {
    switch (action.type) {
        case "NEW-TRANSACTION":
            return {
                ...state,
                transaction : [action.payload, ...state.transaction ]
            }
            case "DEL-TRANSACTION":
                return{
                    ...state,
                    transaction:state.transaction.filter(data=>data.id !==action.payload)
                }
                
        default :
            return state;
        
        // case NEW-TRANSACTION:
            // return {
            //     ...state,
            //     transaction: {action.payload, ...state.transaction },
            // };

              
    }
}

// let reducer=combineReducers(TransactionReducer)
const store = createStore(TransactionReducer, composeWithDevTools());
export default store;
 