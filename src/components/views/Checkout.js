import {useRef} from 'react'
import {useCart} from '../contexts/Cart'

function Checkout() {
    const { total } = useCart()

    const formRef = useRef('checkout')
    const handlePayment = () => {

    }
    return (
        <div>
            Checkout      

            <form ref="checkout">
                <fieldset>
                    <legend>Billing Info</legend>
                    <div>
                        <label>First name</label>
                        <input type="text" placeholder="First name" ref="first_name"/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Shipping info</legend>
                </fieldset>
 
                <fieldset>
                    <legend>Payment</legend>
                    <p>Subtotal {total}</p>
                    <p>Shipping {shipping}</p>
                    <p>Discount {discount}</p>
                    <p>Tax {tax}</p>
                    <p>Total {total + shipping + tax - discount}</p>
                </fieldset>
                <h1>Payment</h1>

                <div>
                    <label>MoMO/MobileMoney <input type="radio" value="momo" ref="momo" /></label>
                    <label>Airtel <input type="radio" value="airtel" ref="airtel"/></label>
                </div>
                <button type="submit" onClick={handlePayment}>Pay Now</button>
            </form>

        </div>
        
    )
}

export default Checkout
