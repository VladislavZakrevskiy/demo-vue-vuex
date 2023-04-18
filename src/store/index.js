import { createStore } from "vuex";
import { postSlice } from "./postSlice";



export default createStore({
    modules: {
        post: postSlice
    }
})