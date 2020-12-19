import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../counterSlice';

export default function QuickReply({ data, index, update }) {

    const [state, setState] = useState(data)

    const dispatch = useDispatch();

    useEffect(() => {
        update(index, state.title)
    }, [state.title])

    return (
        <div>
            <input onChange={(e) => { setState({ title: e.target.value }) }} value={state.title} />
            <button>Remove</button>
            <button onClick={() => { dispatch(increment()) }}>Add Response </button>
        </div>
    )
}
