import { create } from "zustand";

const guestUserSignUp = create((set) => {
    // crunch and important logic this one is my favorite

    
    return {
        guestIsUser: false,
        setGuestIsUser: (newValue) => set({
            guestIsUser: newValue
        })
    }
})
export default guestUserSignUp;