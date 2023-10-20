import { create } from "zustand"
import { CartType, ActionTypes } from "@/types"
import { persist } from "zustand/middleware"



const INITIAL_STATE ={
    products :[],
    totalItems: 0,
    totalPrice :0,

}


export const useCartStore = create(persist<CartType & ActionTypes>((set, get) =>({
    products: INITIAL_STATE.products,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,

    addToCart(item){
        const products = get().products
        const productInState = products.find(product => product.id === item.id)
        if(productInState){
            for(let i = 0; i < products.length; i++){
                if(products[i].id === item.id){
                    products[i].quantity = products[i].quantity + item.quantity
                    products[i].price = products[i].price + item.price
                    set((state) =>({
                        products:products,
                        totalItems:state.totalItems + item.quantity,
                        totalPrice:state.totalPrice + item.price
                        
                    }))
                } 
    
            }
        } else{
                        
            set((state) =>({
                products:[...state.products, item],
                totalItems:state.totalItems+item.quantity, 
                totalPrice: state.totalPrice+item.price
            }))
        }

        
    },
    removeFromCart(item){
        set((state) =>({
            products:state.products.filter(product=>product.id !== item.id),
            totalItems:state.totalItems-item.quantity, 
            totalPrice: state.totalPrice-item.price,
        }))
    }
}),{name:'cart', skipHydration:true}))
