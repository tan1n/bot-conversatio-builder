import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../counterSlice';
import QuickReply from '../quickReply/QuickReply';
import { addMessage, updateMessage } from './messageSlice'

export default function Message() {

    const counter = useSelector(state => state.counter);

    const [message, setMessage] = useState({ text: '', quick_replies: [] });

    const dispatch = useDispatch();


    const updateQuickReply = (index, value) => {
        setMessage(
            (prev) => {
                let qr = [...prev.quick_replies]
                qr[index] = { title: value, payload: value + '-' + Date.now() }
                return {
                    ...prev,
                    quick_replies: qr
                }
            }
        )
    }

    useEffect(() => {
        dispatch(addMessage(message))
    }, []);

    useEffect(() => {
        dispatch(updateMessage({ index: counter, data: message }))
    }, [message])


    const quickReplyProps = { title: '' };

    return (
        <div style={{ border: '1px solid black', margin: 'auto', width: '350px', padding: '15px' }}>
            <input placeholder='Enter your message' onChange={(e) => { setMessage((prev) => ({ ...prev, text: e.target.value })) }} />
            {message.quick_replies.map((val, key) => {
                return <QuickReply data={quickReplyProps} index={key} update={updateQuickReply} />
            })}
            <button
                onClick={() => {
                    setMessage(prev => ({ ...prev, quick_replies: [...prev.quick_replies, quickReplyProps] }))
                }}
            >Add quick reply</button>
        </div>
    )
}
