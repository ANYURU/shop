import { useEffect} from 'react'
import { useCart } from '../contexts/Cart'
import { Link } from 'react-router-dom'

function Cart() {
    
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
    })
    
    const { itemsInCart, setItemsInCart, total, setTotal } = useCart();

    const returnTotal = (items) => {
        let sum = 0
        items.forEach(item => sum += item.subtotal) 
        return sum
    } 
    
    useEffect(() => {
        // let defaultTotal = 0
        setTotal(returnTotal(itemsInCart))
    },[])

    const removeCartItem = itemID => {
        let newCart = itemsInCart.filter(item => item._id !== itemID)
        return newCart
    }

    if(itemsInCart?.length >0 )
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsInCart.map((itemInCart, index) =>
                            <tr className="cart-item" key={itemInCart._id}>
                                <td>
                                    {itemInCart.name}<br />
                                    <button onClick={() => {
                                        let revisedCart = removeCartItem(itemInCart._id)
                                        setItemsInCart([...revisedCart])
                                        setTotal(returnTotal(revisedCart))                                        
                                        }}>X Remove from Cart</button>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        min="1"
                                        defaultValue={itemInCart.qty}
                                        placeholder={itemInCart.qty}
                                        onChange={ event => {
                                            let { value: quantity } = event.target

                                            itemInCart.qty = quantity > 0 ? quantity : 1;
                                            itemInCart.subtotal = itemInCart.qty * itemInCart.price;

                                            setItemsInCart([...itemsInCart])

                                            // [x] Question:
                                            // Using the const keyword on a Javascript object becomes a bit confusing 
                                            // — can the object's properties and methods be changed once defined ?
                                            // Yes, properties and methods be changed for a const object.
                                            // A const declaration does not mean that the value of the variable cannot be changed. 
                                            // It just means that the variable identifier cannot be reassigned.


                                            // item.qty = Number(event.target.value)
                                            // item['subtotal'] = Number(item.qty) * Number(item.price)
                                            // itemsInCart[index] = item
                                            // setItemsInCart([...itemsInCart])
                                            // const subTotals = itemsInCart.map(itemInCart => itemInCart.subtotal) 
                                            // const reducer = (currentValue, previousValue) => {
                                            //     return currentValue + previousValue
                                            // }
                                            // setTotal(subTotals.reduce(reducer))

                                            // let newTotal = 0
                                            // itemsInCart.forEach(itemInCart => newTotal += itemInCart.subtotal)
                                            // setTotal(newTotal);

                                            setTotal(returnTotal(itemsInCart))
                                        }
                                    } />
                                   
                                </td>
                                <td>{formatter.format(itemInCart.price)}</td>
                                <td>{formatter.format(itemInCart.subtotal || itemInCart.price)}</td>
                            </tr> 
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total</th>
                            <th>{formatter.format(total)}</th>
                        </tr>
                    </tfoot>
                </table>

                <Link to="/home">Continue Shopping</Link>
                <Link to="/checkout">Checkout</Link>

            </div>
        )

    return (
        <>
            <h1>Your Basket is empty</h1>
            <p><Link to="/">Shop Now</Link></p>
        </>
    )
}

export default Cart
