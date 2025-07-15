const pageNavReducer = (state,action) => {

    switch(action.type){
        case "SET_TOTAL_PAGES" : {
            return {...state ,totalPage:action.payload }
        }
        case "PREVIOUS_PAGE" : {
            return {...state , currentPage:state["currentPage"] === 1 ? 1 : state["currentPage"] - 1 }
        }
        case "NEXT_PAGE" : {
            return {...state , currentPage:state["currentPage"] === state["totalPage"] ? state["totalPage"]  : state["currentPage"] + 1 }
        }
        default : {
            return state
        }
    }
}

export default pageNavReducer;