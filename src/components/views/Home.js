import { useCart } from '../contexts/Cart'
import { Link } from 'react-router-dom'

function Home() {
    const { itemsInCart, setItemsInCart } = useCart()

    // const [itemsInCart, setItemsInCart] = useState([])
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
    });

    const inventoryItems =
    [
        {
            _id: "xcsswewa12",
            name: "Blue T-Shirt",
            category: "All",
            price: 35000
        },
        {
            _id: "xcsswewa13",
            name: "BlackShoes", 
            category: "Men",
            price: 150000
        },
        {
            _id: "xcsswewa14",
            name: "Macbook Air",
            category: "Tech",
            price: 4500000
        },
        {
            _id: "xcsswewa15",
            name: "White Dress",
            category: "Women",
            price: "15000"
        }
    ]
    /**
     * 
     * @param {string} inventory ItemID that they want to add to the cart
     */

    const addItemToCart = itemID => {
        // setItemsInCart([...itmesInCart, inventoryItems[itemNumber]])
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id !== itemID)
        let selectedItem = inventoryItems.filter(inventoryItem => inventoryItem._id === itemID)
        
        selectedItem[0]['qty'] = 1
        setItemsInCart([...filteredCartItems, ...selectedItem])
    }
    
    /**
     * 
     * @param {string} itemID 
     * @returns {boolean} true if an Item with @param itemID is found in the cart and false otherwise.
     */

    const isItemInCart = (itemID) => {
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id === itemID)
        return (filteredCartItems?.length > 0) ? true: false
    
    }
    
    return (
        <div>
            <div className="header">
                <h1>Shop Now</h1>
                <div>
                    <Link to="/cart">{itemsInCart?.length}Basket</Link>
                </div>
            </div>
            
            <ul className="item-list">
                {
                    inventoryItems.map((inventoryItem, index) => {

                        
                        return  (
                            <li key={index.toString()} className="item">
                                <div>
                                    {inventoryItem.name}
                                </div>
                                <div className="category">
                                    {inventoryItem.category}
                                </div>
                                <div>
                                    {formatter.format(inventoryItem.price)}
                                </div>   
                                <div className="cta">
                                    <button><span>Wishlist</span></button>
                                    <button><span>Rate</span></button>
                                    {isItemInCart(inventoryItem._id)
                                        ?
                                        <Link to="/cart">View Cart</Link>
                                        :
                                        <button onClick={() => addItemToCart(inventoryItem._id)}><span>Cart</span></button>
                                        
                                    }
                                    <button><span>Buy Now</span></button>                                    
                                </div> 
                            </li>
                        )  
                                
                    })
                }
            </ul>   
        </div>        
    )
}

export default Home
