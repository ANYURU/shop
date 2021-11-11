import {useRef, useState} from 'react'
import {useCart} from '../contexts/Cart'

import Countries from '../helpers/countries.element'
import USstates from '../helpers/USstates.element'
import Districts from '../helpers/districts.element'
import {ugandaShillings, currencyFormatter } from '../helpers/currency.formatter'

function Checkout() {
    const { total } = useCart()

    const checkoutRef = useRef()
    const handlePayment = () => {
    }

    const [country, setCountry] = useState('Uganda')
    const [shipping, setShipping] = useState(0)
    const [tax, setTax] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [voucher, setVoucher] = useState('')
    const vouchers = ['10% off', '20% off', '30% off']

    return (
        <div>
            Checkout      

            <form ref = {checkoutRef}>
                <fieldset>
                    <legend>Billing Info</legend>
                    <div>
                        <label>First name</label>
                        <input type="text" placeholder="First name"/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Shipping info</legend>
                    <div>
                        <label>Name<span className="required-label">*</span></label>
                        <input type="text"required  placeholder="Name"/>
                    </div>
                    <div>
                        <label>Company (Optional)</label>
                        <input type="text"required  placeholder="Company"/>
                    </div>
                    <div>
                        <label>Address line 1: <span className="required-label">*</span></label>
                        <input type="text" placeholder="Ex. Suite no, Apt.No, Plot No., Rd."/>
                    </div>
                    <div>
                        <label>Address line 2: </label>
                        <input type="text" placeholder="State, Zip, Code, Town."/>
                    </div>
                    <div>
                        <label>Country<span className="required-label">*</span></label>
                        <Countries  onChange={(event)=>setCountry(event.target.value)} id="country"/>
                    </div>
                    {
                        country === 'Uganda' ? 
                        <>
                            <div>
                                <label>District</label>
                                <Districts id="district"/>
                            </div>
                            <div>
                                <label>Town/Village</label>
                                <input type="text" placeholder="Town/Village"/>
                            </div>
                        </>
                        
                        :
                        <>
                            <div>
                                <label>State<span className="required-label">*</span></label>
                                <USstates id="state"/>
                            </div>
                            <div>
                                <label>Town/City</label>
                                <input type="text" placeholder="Town/City"/>
                            </div>
                            <div>
                                <label>Zip code/Postal code</label>
                                <input type="text" placeholder="Postal Code"/>
                            </div>
                        </>                    
                    }
    
                </fieldset>
 
                <fieldset>
                    <legend>Cart Details</legend>
                    {/* <p>Subtotal {total}</p> */}
                    <p>Shipping {shipping}</p>
                    <p>Discount {discount}</p>
                    <p>Tax {tax}</p>
                    <p>Total {currencyFormatter((total + shipping + tax - discount), 'USD', 'en-US')}</p>
                </fieldset>
                

                <fieldset>
                    <legend>Payment</legend>
                    <div>
                        <label>Voucher</label>
                        <input type="text" placeholder="VoucherCode"/>
                    </div>
                    <label>MoMO/MobileMoney <input type="radio" name="payment-method" value="momo"/></label>
                    <label>Airtel <input type="radio" name="payment-method" value="airtel"/></label>
                </fieldset>
                <button type="submit" onClick={handlePayment}>Pay Now</button>
            </form>

        </div>
        
    )
}

export default Checkout
