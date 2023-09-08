import {useNavigate} from 'react-router-dom'
  import { usePaystackPayment } from 'react-paystack';


const config = {
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey:import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
            <button type='button' onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>submit</button>
      );
  };
  

const Payments = () => {
  const navigate = useNavigate()
  
  return <>
      <div className="Make_payments" id="Make_payments">

          <nav> <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i> Payments</nav>

             <form className="payment_card"> 
              <h3>Pay Departmental fees</h3>      
                <p> 
                  <label htmlFor="">Username:</label>
                  <input type="text" readOnly value="Dilan Besong"/>
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </p>
                
                <p> 
                  <label htmlFor="">Reg number</label>
                  <input type="text" readOnly value="2019030187292"/>
                   <i className="fa fa-code" aria-hidden="true"></i>
                </p>
                
                <p>
                  <label htmlFor="">Email</label>
                  <input type="text" readOnly  value="besongdilan@gmail.com"/>
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