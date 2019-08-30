import React from 'react';

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            persons: [],
        }
    }

    componentDidMount() {
        
        fetch('http://localhost:5000/person')
        .then(response => response.json())
        .then(data => {console.log(data)})
        //.then(data => this.setState({persons: data.persons}))
    }

    render() {
    
        return (
          <div>
              <h3>working it</h3>
          </div>
        );
      }
}

export default MainContent;