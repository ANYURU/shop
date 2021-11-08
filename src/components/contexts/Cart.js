import {
    createContext, 
    useContext, 
    useState
} from 'react'

const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
}

export default function CartProvider ({ children }) {
    const [itemsInCart, setItemsInCart] = useState([])

    return (
        <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
            { children }
        </CartContext.Provider>
    )

}