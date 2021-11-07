import {
    createContext, 
    useContext, 
    useState
} from 'react'

const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
}

export default function CartProvider ({Children}) {
    const [itemsInCart, setItemsInCart] = useState([])

    return (
        <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
            {Children}
        </CartContext.Provider>
    )

}