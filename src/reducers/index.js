const reducer = (state, action) => {

  switch(action.type){
  
    case "WINDOW_SIZE":
      return {
        ...state,
        windowSize: action.payload
      }

    case "CURRENT_DATE":
      return {
        ...state,
        currentDate: action.payload
      }

    case "CURRENT_STATE":
      return {
        ...state,
        state: action.payload
      }
    case "SCROLLING_MONTH":
      return {
        ...state,
        scrollingMonth: action.payload
      }
    case "DISPLAY_RANGE":
      return {
        ...state,
        rangeParameters: action.payload
      }

    default :
    return state;
  }
}

export default reducer;