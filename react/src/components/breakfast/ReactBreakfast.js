import React, { Component } from 'react';


class ReactBreakfast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breakfast: [],
      currentPage: 1,
      recipesPerPage: 6
    };
    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  getData() {
    fetch(`https://api.edamam.com/search?q=breakfast&app_id=${ED_APP_ID}&app_key=${ED_APP_KEY}&from=0&to=24&calories=gte%20300,%20lte%20650`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} ($response.statusText)`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({breakfast: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(`${this.state.breakfast}`);
    return(

      <div>
        {this.state.breakfast}
      </div>
    )
  }
}

export default ReactBreakfast;
