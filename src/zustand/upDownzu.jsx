import { create } from "zustand";

let store = (set) =>({
    count:0,
    increment: () =>set((state)=>({count:state.count+1}))
})
store = persist(store,{
    name:"hai",
    storage: createJSONStoreage(()=> localStorage)
})
export default store = create(store)