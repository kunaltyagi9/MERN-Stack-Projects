
export const initialState = {
    addToCart: {}
}


export const reducer = (state, action) => {
    switch (action.type) {
        case 'addToCart' : 
            let a =  { ...state, [action.type]: action.value };
            console.log(a)
            return a;
        case 'reset': 
            return initialState;
        default: 
            return state;
    }
}