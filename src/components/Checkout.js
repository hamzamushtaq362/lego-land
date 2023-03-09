import { fontSize } from '@mui/system'
import React,{useState} from 'react'
import ThankYouModal from './ThankYouModal';
import { useNavigate } from "react-router-dom";

export default function Checkout(props) {
  const [price, setPrice] = useState(props.cart.reduce(function (acc, obj) { return acc + obj.product_price; }, 0));
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();
  const handleOpen = () => {
    if(props.logged){
      setOpen(true);
    }
    else{
      navigate("/login");
    }
  }
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  }

  const handleDropdown=(e)=>{
    let currentPrice=props.cart.reduce(function (acc, obj) { return acc + obj.product_price; }, 0)
    if(e.target.value == "Standard"){
      setPrice(currentPrice+5);
    }else if(e.target.value == "Express"){
      setPrice(currentPrice+10);
    }
    console.log("handle dropdown",price);
  }

  return (
    <div className='checkDiv'>
      <div className='check-1'>
              <div style={{ 
                padding: "2% 4% 0% 4%"
               }}>
                  <div style={{
                      height: "60px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "3%"
                  }}>
                      <h1>Shopping Cart</h1>
                      <p>{props.cart.length} Items</p>
                  </div>
                  <hr />

          {
            props.cart.map((e) => {
              return <>
                <div style={{
                  height: "100px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "3%"
                }}>
                  <img
                    src={e.product_image}
                    alt=""
                    style={{
                      width: "80px",
                      height: "90px"
                    }}
                  />

                  <div>
                    <p style={{ fontWeight: "bold", color: "#858484" }}>{e.product_name}</p>
                    vendor code # {e.vendor_code}
                  </div>

                  <p>$ {e.product_price}</p>
                </div>
                <hr />
              </>
            })
          }

                  {/* <div style={{
                      height: "100px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "3%"
                  }}>
                      <img 
                      src="https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=" 
                      alt="" 
                      style={{ 
                        width: "80px",
                        height: "90px"
                       }}
                      />

                      <div>
                        <p style={{ fontWeight: "bold", color: "#858484" }}>Shirt</p>
                        Cotton T-Shirt
                      </div>

                      <p>$ 132</p>
                  </div>
                  <hr /> */}
              </div>
      </div>
      <div className='check-2'>
      <div style={{ 
                padding: "2% 4% 0% 4%"
               }}>
                  <div style={{
                      height: "60px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10%"
                  }}>
                      <h2>Summary</h2>
                  </div>
                  <hr />

                  <div style={{
                      height: "50px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0%"
                  }}>
                      <h3>ITEMS {props.cart.length}</h3>
                      <h3>$ {props.cart.reduce(function (acc, obj) { return acc + obj.product_price; }, 0)}</h3>
                  </div>

                  <label htmlFor="" style={{ fontWeight: "bold" }}>
                    Shipping
                  </label>
                  <select 
                  name="category" 
                  id="category" 
                  className='search-popular'
                  style={{ margin: "8% 0%" }}
                  onClick={handleDropdown}
                  >
                      <option value="Standard">Standard-Delivery- $5.00</option>
                      <option value="Express">Express-Delivery- $10.00</option>
                  </select>

                  <label htmlFor="" style={{ fontWeight: "bold" }}>
                    Give Code
                  </label>

                  <input 
                  type="text" 
                  name="" 
                  id="" 
                  placeholder='Enter Your Code'
                      style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8% 0% 12% 0%",
                        border: "1px solid #ccc",
                        boxSizing: "border-box",
                        marginBottom: "4%",
                        margin: "8% 0%"
                   }}
                  />
                <hr />
                <div style={{
                      height: "50px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0%",
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginBottom: "8%"
                  }}>
                      <p>TOTAL PRICE</p>
                      <p>$ {price}</p>
                  </div>

                  {/* <button
                      style={{
                          padding: "10px 20px",
                          color: "white",
                          backgroundColor: "black",
                          borderRadius: "4px",
                          borderColor: "black",
                          width: "100%",
                          cursor: "pointer"
                      }}
                      // onClick={}
                  >CHECKOUT</button> */}
                  <ThankYouModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
                  
        </div>
      </div>
    </div>
  )
}
