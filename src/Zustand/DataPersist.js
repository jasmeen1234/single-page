import { create } from "zustand";

const dataUserShowPersist = create((set) => {
    // crunch and important logic this one is my favorite

    
    return {
        userShow: '',
        setUserShow: (newValue) => set({
            userShow: newValue
        })
    }
})
export default dataUserShowPersist;