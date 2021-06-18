
const dataReducerDefaultState = [];

const dataReducer = (state = dataReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return [
                ...state,
                action.data
            ]
        default:
        return state;
    }
}

export default dataReducer;