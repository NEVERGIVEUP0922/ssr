import axios from 'axios'

// action-type
const LIST_TYPE = 'LIST'

// action creator
const changList = list => ({
    type: LIST_TYPE,
    payLoad: list
})

export const getCourseList = (serve) => {
    // getstate 
    return (dispatch, getstate, axiosInstance) => {
        return axios.get("http://localhost:9898/api/list").then(res => {
            dispatch(res.data.list)
        })
    }
}
export default (state = { list: [] }, action) => {
    switch (action.type) {
        case 'LIST':
            return { ...state, list: action.payLoad }
        default: return state
    }
}