import {useRef, useState} from 'react'
import {useCart} from '../contexts/Cart'

import Countries from '../helpers/countries.element'
import USstates from '../helpers/USstates.element'
import Districts from '../helpers/districts.element'
import { currencyFormatter } from '../helpers/currency.formatter'
import { zones, getCountryZone } from  '../helpers/shipping'

function Checkout() {
    const checkoutRef = useRef()
    const { total } = useCart()
    const [country, setCountry] = useState('Uganda')
    const [shipping, setShipping] = useState(0)
    const [tax, setTax] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [zone, setZone] = useState({})

    const vouchers = {
        xxx:{rate:10, status:'active', amount:8000},
        yyy:{rate: 15, status:'expired', amount:10000},
        zzz:{rate:20, status:'active', amount:null},
        ddd:{rate:25, status:'expired', amount:6000},
        www:{rate:null, status:'active', amount:10000},
        nnn:{rate:null, status:'active', amount:null}
    }
    

    
    /**
     * @author Anyuru David Derrick
     * @param {string} appliedVoucher Voucher code. 
     * @returns {object} The object can have a msg, rate or the amount.
     */

    const getVoucherInfo = (appliedVoucher) => {
        const theVoucher = vouchers[appliedVoucher]
        if( theVoucher ) {
            if(theVoucher.status !== 'expired')  {
                if(!theVoucher.rate && !theVoucher.amount) {
                    return {msg: 'Invalid Voucher'}
                }
                return theVoucher?.amount > 0 ? {amount: theVoucher.amount} : {rate: theVoucher.rate}
            }

            return {msg: 'Expired Voucher'}               
        }

        return {msg: 'Invalid Voucher'}
    }

    const handlePayment =  () => {

    }
        
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
                        <Countries  onChange={(event)=> {                            
                            setCountry(event.target.value)
                            setZone(event.target.value)
                            
                            }} id="country"/>

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
                    {zone && 
                        <fieldset>
                            <legend>Shipping methods</legend>
                            
                        </fieldset>
                    }
                </fieldset>
 
                <fieldset>
                    <legend>Cart Details</legend>
                    {/* <p>Subtotal {total}</p> */}
                    <p>Shipping {shipping}</p>
                    <p>Discount {discount}</p>
                    <p>Tax {tax}</p>
                    <p>Total {currencyFormatter((total + shipping + tax - discount), 'UGX', 'en-US')}</p>
                </fieldset>
                

                <fieldset>
                    <legend>Payment</legend>
                    <div>
                        <label>Voucher</label>
                        <input type="text" placeholder="Voucher code" onBlur={(event)=> { 
                            const voucherInfo = getVoucherInfo(event.target.value)
                            if(voucherInfo?.msg ){
                                event.target.value = voucherInfo.msg;
                            } else {
                                voucherInfo.amount ? setDiscount(voucherInfo.amount) : setDiscount((voucherInfo.rate / 100) * total)
                            }
                        }}/> 
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

