
const dataReducerDefaultState = [];

const dataReducer = (state = dataReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return [
                ...state,
                action.data
            ]
        case 'SET_STATE':
            return [
                ...action.data
            ]
        case 'EDIT_DATA':
            return state.map((data) => {
                if(data._id === action.id){
                    // console.log(data)
                    // console.log(action.id)
                    return {
                        ...data,
                        ...action.updates
                    };
                    
                }
                else {
                    return data
                }
            })

        default:
        return state;
    }
}

export default dataReducer;