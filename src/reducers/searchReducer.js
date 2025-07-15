const searchReducer = (state,action) => {
    switch(action.type){
        case "ADDSEARCH" : {
            return {
                ...state,search:action['payload']
            }
        }
        case "ADDCATEGORY" : {
            return {
                ...state , category:action.payload
            }
        }
        default: 
            return state;
    }
}

export default searchReducer;