import React from "react";
import { clearCart } from "../../Redux/Cart/CartSlice";

export const modalAction = (act) => {
    switch (act) {
        case "clearCart": return clearCart;
        
    }
}