import React from 'react'

function Home() {
    const inventoryItems =
    [
        {
            name: "Blue T-Shirt",
            category: "All",
            price: 35000
        },
        {
            name: "BlackShoes", 
            category: "Men",
            price: 150000
        },
        {
            name: "Macbook Air",
            category: "Tech",
            price: 4500000
        },
        {
            name: "White Dress",
            category: "Women",
            price: "15000"
        }
    ]


    return (
        <>
            <h1>Inventory</h1>
            <ul>
                {inventoryItems.map((inventoryItem) => {

                    
                    return  <li>
                                <div>{inventoryItem.name}</div>
                                <div>{inventoryItem.category}</div>
                                <div>{inventoryItem.price}</div>
                                <div>
                                    <button>Add to Cart</button>
                                    <button>Remove from Cart</button>
                                    <button>Buy Now</button>
                                </div>    
                            </li>
                })}
            </ul>
        </>

        
    )
}

export default Home
