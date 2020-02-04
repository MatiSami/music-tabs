import React, { Component } from "react";

class SearchTool extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Podano następujące imię: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Hej Mati</h1>
        <div className="search-box">
          <form onSubmit={this.handleSubmit}>
            <label>
              Wpisz coś:
              <input
                className="search-type__text"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input className="search-type" type="submit" value="Wyślij" />
          </form>
          
        </div>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default SearchTool;
