

export const addData = (data) => ({
    type: "ADD_DATA",
    data
});
 
export const startAddData = (allData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            email = '',
            age = '',
            gender = ''
        } = allData;

        const data = { name, email, age, gender };

        dispatch(addData({
            id: allData._id,
            ...data
        }));
        // add data to database here
    }
}

export const setStoreInitialState = (data) => ({
    type: "SET_STATE",
    data
})

export const editData = (id, updates) => ({
    type: "EDIT_DATA",
    id,
    updates
})

export const deleteData = (id) => ({
    type: "DELETE_DATA",
    id
})