import React from 'react';
import { useSelector } from 'react-redux';
import Message from './features/message/Message';

function App() {

  const count = useSelector(store => (store.counter))

  const renderResponse = () => {
    let responses = [];
    for (let i = 0; i < count; i++) {
      responses.push(<Message />)
    }
    return responses;
  }

  return (
    <div>
      <Message />
      {renderResponse()}
    </div>
  );
}

export default App;
