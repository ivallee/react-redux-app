import React from 'react';

class MessageList extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount() {

    fetch('https://isaac-test-svz.herokuapp.com/messages')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data.results);
        let messages = data.results.map((msg) => {
          return (
            <ul key={msg.id}>
              <li>
                <p>Message {msg.id}: {msg.text}</p>
                <small>Posted at: {msg.created_at}</small>
              </li>
            </ul>
          )
        })
        this.setState({ messages });
        console.log("state", this.state.messages);
      })



  }


  render() {
    return (
      <div>
        {this.state.messages}
      </div>
    );

  }

}

export default MessageList;