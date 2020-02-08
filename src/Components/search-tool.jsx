import React, { Component } from "react";
import SearchResult from "./search-result";

class SearchTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      url: "http://www.songsterr.com/a/ra/songs.xml?pattern=",
      searchResult: [],
      resultDisplay: false,
      option: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeOption(event) {
    this.setState({ option: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(
      // `http://www.songsterr.com/a/ra/songs/byartists.json?artists=${this.state.value}`)
      `http://www.songsterr.com/a/ra/songs.json?pattern=${this.state.value}`)

      .then(response => response.json())
      .then(data =>
        this.setState({
          searchResult: data,
          resultDisplay: true
        })
      );
      
  }

  render() {
    console.log(this.state.option);
    return (
      <div>
        <h1>Znajdź akordy do darcia mordy</h1>
        <div className="search-box">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                style={{ width: "500px" }}
                placeholder="Wpisz artystę lub tytuł piosenki..."
                className="search-type__text"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <select
                value={this.state.option}
                onChange={this.handleChangeOption}
              >
                <option value="TEXT_BASS_TAB">Bass</option>
                <option value="guitar-tab">Gitara</option>
                <option value="DRUM">Drums</option>
              </select>
            </label>
            <input className="search-type" type="submit" value="Szukaj" />
          </form>
        </div>
        <p>{this.state.value}</p>

        <SearchResult data={this.state.searchResult} tab={this.state.option} />
      </div>
    );
  }
}

export default SearchTool;
