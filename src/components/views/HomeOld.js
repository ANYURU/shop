import {useState} from 'react'
import { Link } from 'react-router-dom'

function HomeOld() {
    const [itemsInCart, setItemsInCart] = useState([])
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
            _id: "xcsswewa14",
            name: "White Dress",
            category: "Women",
            price: 105000
        },
        {
            _id: "xcsswewa15",
            name: "Macbook Air",
            category: "Tech",
            price: 450000000
        }
    ]

    const addItemToCart = itemID => {
        // setItemsInCart([...itemsInCart, inventoryItems[itemNumber] ])
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id !== itemID)
        let selectItem = inventoryItems.filter(theInventoryItem => theInventoryItem._id === itemID)
        // setItemsInCart([...filteredCartItems, selectItem[0]])
        selectItem[0]['qty'] = 1
        setItemsInCart([...filteredCartItems, ...selectItem])
    }

    const isItemInCart = (itemID) => {
        const filteredCartItems = itemsInCart.filter(itemInCart => itemInCart._id === itemID)
        return (filteredCartItems?.length > 0) ? true : false
    }

    return (
        <div>
            <div className="header">
                <h1>Shop Now</h1>
                <div>
                    <button>{itemsInCart?.length} Basket</button>
                </div>
            </div>
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

export default HomeOld