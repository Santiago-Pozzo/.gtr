import React from "react";
import { clearCart } from "../../Redux/Cart/CartSlice";
import { logout } from "../../Redux/User/UserSlice";


export const modalAction = (act) => {
    switch (act) {
        case "clearCart": return clearCart;
        
        case "logout": return logout;
    }
}