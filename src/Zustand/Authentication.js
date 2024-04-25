import { create } from "zustand";

const useIsLoggedInStore = create((set) => {
    // crunch and important logic this one is my favorite

    let isUserLoggedIn;
    const token = localStorage.getItem("user");
    console.log("this is token", token)
    if (token) {
        isUserLoggedIn = true;
    } else {
        isUserLoggedIn = false;
    }
    return {
        isLoggedIn: isUserLoggedIn,
        setIsLoggedIn: (newValue) => set({
            isLoggedIn: newValue
        })
    }
})
export default useIsLoggedInStore;