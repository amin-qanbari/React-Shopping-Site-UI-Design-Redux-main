import { createStore } from "redux";

import reducer from "./Cart/cartReducer";

//localStorage

const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem("cart" , serialisedState)
    } catch (error) {
        console.warn(error)
    }
}

const loadFromLocalStorage = () => {
    try {
        const serialiseState = localStorage.getItem("cart")
        if(serialiseState === null) {
            return undefined
        }else {
            return JSON.parse(serialiseState)
        }
    } catch (error) {
        console.warn(error)
        return undefined
    }
}

const store = createStore(reducer , loadFromLocalStorage())

store.subscribe(() => saveToLocalStorage(store.getState()))

export {store}