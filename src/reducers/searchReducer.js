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
        case "ADDYEAR" : {
            return {
                ...state ,year:action.payload
            }
        }
        default: 
            return state;
    }
}

export default searchReducer;