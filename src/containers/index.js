import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCourseList } from '../store/index'

function index(opt) {
    useEffect(() => {
        opt.getCourseList()
    }, [])
    let [count, setCount] = useState(1)
    return (
        <div>
            <h1>hello {opt.title} {count}</h1>
            <button onClick={() => setCount(count + 1)}>累加</button>
            <hr />
            <ul>
                {
                    opt.list.map(v => {
                        return <li key={v.code}>{v.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default connect(state => ({ list: state.index.list }), { getCourseList })(index)