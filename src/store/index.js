import axios from 'axios'

// action-type
const LIST_TYPE = 'LIST'

// action creator
const changList = list => ({
    type: LIST_TYPE,
    list
})

export const getCourseList = (serve) => {
    // getstate 
    return (dispatch, getState, axiosInstance) => {
        return axios.get("http://localhost:9090/api/list").then(res => {
            dispatch(changList(res.data.list))
        })
    }
}
export default (state = { list: [] }, action) => {
    switch (action.type) {
        case 'LIST':
            return { ...state, list: action.list }
        default: return state
    }
}