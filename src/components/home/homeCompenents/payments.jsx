import {useNavigate} from 'react-router-dom'
import { usePaystackPayment } from 'react-paystack';
import { useState } from 'react';
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';




  

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

 

const Payments = () => {
  const navigate = useNavigate()
  const [student, setStudent] = useState(JSON.parse(sessionStorage.getItem('user')))
  const { user } = student

  const config = {
      reference: (new Date()).getTime().toString(),
      email:user.email,
      amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey:import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  };

  

  const onSuccess =  (reference) => {
    //Implementation for whatever you want to do with reference and after success call.
     const payer = { regNumber:user.regNumber || '', refNumber:reference, amount:5700, level:user.level || '' }
    
    axios.post('/api/payment/makePayment', payer).then( ({ data}) => {
      alert(data.msg)
    })
  };


  
   const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
            <button type='button' onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>submit</button>
      );
  };

  return <>
       <div className="Make_payments" id="Make_payments">

          <nav> <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i> Payments</nav>

             <form className="payment_card"> 
              <h3>Pay Departmental fees</h3>      
                <p> 
                  <label htmlFor="">Username:</label>
                  <input type="text" readOnly value={user.username}/>
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </p>
                
                <p> 
                  <label htmlFor="">Reg number</label>
                  <input type="text" readOnly value={user.regNumber}/>
                   <i className="fa fa-code" aria-hidden="true"></i>
                </p>
                
                <p>
                  <label htmlFor="">Email</label>
                  <input type="text" readOnly  value={user.email}/>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </p>
                
                <p>
                  <label htmlFor="">Amount</label>
                  <input type="text" readOnly  value="5400"/>
                  <i className="fa fa-credit-card" aria-hidden="true"></i>
                </p>
              
                 <p>
                    <label htmlFor="">choose level</label>
                   <select name="" id="" required>
                   <option value="100"> 100 level </option>
                   <option value="200"> 200 level </option>
                   <option value="300"> 300 level </option>
                   <option value="400"> 400 level </option>
                   <option value="500"> 500 level </option>
                </select>
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                 </p>
               <p> <PaystackHookExample/></p>
              </form>
          </div>  

  </>                
}

export default Payments