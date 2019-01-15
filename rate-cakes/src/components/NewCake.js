import React from 'react';
import "../static/newCake.css";


class NewCake extends React.Component  {
  constructor() {
    super();
    this.state = {
      title: "",
      url: ""
    };
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.title, this.state.url);
  };

  render() {
    return (
      <div className="row newCake">
        <form onSubmit={this.onSubmit}>
          <h5 className="newCakeHead">Submit a Cake for Review</h5>
          <div className="col">
            <input
              type="text"
              placeholder="Cake Title"
              name="title"
              value={this.state.title}
              onChange={this.onInputChange}
            />
            <input
              type="text"
              placeholder="Cake Image URL"
              name="url"
              value={this.state.url}
              onChange={this.onInputChange}
            />
            <button type="submit" className="waves-effect waves-light grey darken-1 btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
// Without event listener state change on value of input, user input will not change the value.
export default NewCake;
