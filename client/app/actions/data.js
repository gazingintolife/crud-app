

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
            ...data
        }))
        // add data to database here
    }
}