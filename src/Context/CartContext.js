import { createContext, useState } from "react"

export const contexto = createContext()

export const { Provider } = contexto

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const taxRate = 0.21

    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }


    const addToCart = (id, branch, description1, title, pictureUrl, qty, price) => {

        if (isInCart(id)) {
            setCart(cart.map(item => {
                if (item.id === id) {
                    item.qty += qty
                }
                return item
            }))
        }
        else {
            setCart([...cart, { id, branch, description1, title, pictureUrl, qty, price }])
        }
    }

    const removeFromCart = (id) => {
        if (isInCart(id)) {
            setCart(cart.filter(item => item.id !== id))
        }
    }

    const emtyCart = () => {
        setCart([])
    }

    const totalUnits = () => {
        let totalUnitsQty = 0
        cart.forEach(element => {
            totalUnitsQty += element.qty
        }
        )
        return totalUnitsQty;
    }

    const totalPrice = () => {
        let totalPrice = 0
        cart.forEach(element => {
            totalPrice += element.qty * element.price
        }
        )
        return totalPrice;
    }

    const totalTax = () => {    
        return totalPrice() * taxRate
    }

    const totalOrder = () => {
        return totalPrice() + totalTax()
    }

    const contextValue = {
        cart,
        addToCart,
        removeFromCart,
        emtyCart,
        totalUnits,
        totalPrice,
        taxRate,
        totalTax,
        totalOrder
    }
    return (
        <div>
            <Provider value={contextValue}>
                {children}
            </Provider>
        </div>
    )
}

export default CustomProvider
