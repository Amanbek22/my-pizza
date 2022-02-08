
const initialState2 = { 
    data: JSON.parse(localStorage.getItem("basket")) || null
}

export const basketReducer = (state = initialState2, action) => {
    switch (action.type) {
        //  Code here...
        default:
            return state;
    }
}
