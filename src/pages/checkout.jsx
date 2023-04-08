import "./checkout.css";
import { ShopContext } from "../context/shop-context";
import React, { useContext } from "react";

const Checkout = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

  return (
         <div class="container">
        <div class="wrapper">
            <div class="checkout-text">
                    <a href="">Payment</a>
                <div class="pay-button">
                    <button>
                        <img src="https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png" alt="Apple-Pay" height="20px" width="20px" />
                        <span>Pay</span>
                    </button>
                </div>

                <div class="or-line">
                    <p>Or pay with card</p>
                </div>
    
                <div class="card-details">
                    <label>Card details</label>
                    <div class="card-number">
                        <input type="number" placeholder="" />
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/visa.png" height="20px" width="20px" />
                            <img src="https://img.icons8.com/color/48/000000/mastercard.png" height="20px" width="20px" />
                            <img src="https://img.icons8.com/color/48/000000/amex.png" height="20px" width="20px" />
                        </div>
                    </div>
                    <div class="card-info">
                        <div class="mm-yy">
                            <input type="number" placeholder="MM / YY" />
                        </div>
                        <div class="cvc">
                            <input type="number" placeholder="CVC" />
                            <img src="https://img.icons8.com/ios/50/000000/card-verification-value.png" height="20px" width="20px" />
                        </div>
                    </div>
                </div>
    
                <div class="owner-name">
                    <label>Owner name</label>
                    <input type="text" placeholder="John Doe" />
                </div>
    
                <div class="country-region">
                    <label>Country or region</label>
                    <select>
                        <option>United States</option>
                        <option>Morocco</option>
                        <option>China</option>
                    </select>
                    <input type="number" placeholder="Zip code" />
                </div>
    
                <button class="buy-button">Pay ${totalAmount}</button>
    
            </div>
        </div>
    </div>
  )
}

export default Checkout