const searchReducer = (action,state) => {
    switch(action.type){
        case "ADDSEARCH" : {
            return {
                ...state , search:action.type.payload
            }
        }
        case "ADDCATEGORY" : {
            return {
                ...state , category:action.type.payload
            }
        }
        default: 
            return state;
    }
}

export default searchReducer;