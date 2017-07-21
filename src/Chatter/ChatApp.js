  import React from 'react';
  import DATA from './DATA';
  const ChatApp = () => {
      const chatItems = DATA.chats.map(function(item){
        return (
          <div>
            <h1> {item.username} </h1>
            <p> {item.chat} </p>
          </div>
        )
      })
      return (
        <div>
          {chatItems}
        </div>

  )
}

  export default ChatApp;
