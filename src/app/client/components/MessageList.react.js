import React from 'react';

class MessageList extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount() {

    fetch('https://isaac-test-svz.herokuapp.com/messages/?format=json')
    .then(results => {
      return results;
    }).then(data => {
      let messages = data.results.map((msg) => {
        return(
          <div key={msg.id}>
            <div>{msg.text}</div>
          </div>
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