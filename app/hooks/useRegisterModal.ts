import {create} from "zustand";
import React from "react";

type RegisterModalStore = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

const useRegisterModal = create<RegisterModalStore>((set) => {
    return {
        isOpen: false,
        onOpen: () => set({isOpen: true}),
        onClose: () => set({isOpen: false})
    }

})

export default useRegisterModal