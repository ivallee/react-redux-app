import React from 'react';

class MessageDetail extends React.Component {

  constructor() {
    super();
    this.state = { 
      message
    }
  }

  componentDidMount() {

    fetch(`https://isaac-test-svz.herokuapp.com/messages/${this.props.params.id}`)
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data.results);
      })



  }


  render() {
    return (
      <div>
        <p>hello</p>
      </div>
    );

  }

}

export default MessageDetail;