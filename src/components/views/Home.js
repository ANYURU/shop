import { useCart } from '../contexts/Cart'
import { Link } from 'react-router-dom'

function Home() {
    // const { currentUser } = useAuth()
    const { itemsInCart, setItemsInCart }  = useCart()
    // const [itemsInCart, setItemsInCart] = useState([])
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
      });

    const inventoryItems = [
        {
            _id: "xcsswewa12",
            name: "Blue T-shirt",
            category: "All",
            price: 35000
        },
        {
            _id: "xcsswewa13",
            name: "Black Shoes",
            category: "Men",
            price: 150000
        },
        {
            _id: "xcsswewa15",
            name: "Macbook Air",
            category: "Tech",
            price: 4500000
        },
        {
            _id: "xcsswewa14",
            name: "White Dress",
            category: "Women",
            price: 105000
        },
    ]

    /**
     * Thought process: 
     * [x] Get items from the cart whose ID doesnot match the ID of the Item to be added to the Cart. 
     * [x] Select an item from the inventory that is to be added to the cart by ID.
     * [x] Give the selected item a default quantity value.
     * [x] Update the Item in the cart.
     * 
     * @param {string} itemID The ID of the item in the inventory.
     */
    const addItemToCart = itemID => {
        // setItemsInCart([...itemsInCart, inventoryItems[itemNumber] ])
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id !== itemID)
        let selectItem = inventoryItems.filter(theInventoryItem => theInventoryItem._id === itemID)
        // setItemsInCart([...filteredCartItems, selectItem[0]])
        selectItem[0]['qty'] = 1
        setItemsInCart([...filteredCartItems, ...selectItem])
    }

    /**
     * 
     * @param {string} itemID The ID of the item in the inventory
     * @returns {boolean} 'true' if an item with the specified ID exists in the inventory and 'false' otherwise.
     */
    const isItemInCart = (itemID) => {
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id === itemID)
        return (filteredCartItems?.length > 0) ? true : false
    }

    return (
        <div>
            <ul className="item-list">
                {
                    inventoryItems.map((inventoryItem, index) => {
                        return (
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