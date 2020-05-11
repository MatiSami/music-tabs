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
      option: "",
      error: false,
      noResults: true,
      fetch: false,
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

    if (this.state.value.length === 0) {
      return this.setState({
        error: true,
      });
    } else {
      fetch(
        `http://www.songsterr.com/a/ra/songs.json?pattern=${this.state.value}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            this.setState({
              searchResult: data,
              resultDisplay: true,
              error: false,
              noResults: false,
              fetch: true,
            });
          } else {
            this.setState({
              noResults: true,
              resultDisplay: false,
            });
          }
        });
    }
  }

  render() {
    let widthAppWithResult = {
      width: "calc(100% - 400px)",
    };
    return (
      <div
        className="App"
        style={this.state.resultDisplay ? widthAppWithResult : null}
      >
        <div className="wrapper">
          <h1 className="search-tool__title">
            Znajdź akordy swoich uluionych piosenek
          </h1>
          <div className="search-box">
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  // style={{ width: "500px" }}
                  placeholder="Wpisz artystę lub tytuł piosenki..."
                  className="search-type__text"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input className="search-type" type="submit" value="Szukaj" />
            </form>
          </div>
          {/* <p>{this.state.value}</p> */}
          <p
            className={
              this.state.error ? "search-tool_error" : "search-tool_error__hide"
            }
          >
            Musisz coś wpisać
          </p>
          <p
            className={
              this.state.noResults && this.state.fetch
                ? "search-tool_error"
                : "search-tool_error__hide"
            }
          >
            Brak wyników wyszukiwania
          </p>
          <SearchResult
            data={this.state.searchResult}
            tab={this.state.option}
            display={this.state.resultDisplay}
            result={this.state.noResults}
          />
        </div>
      </div>
    );
  }
}

export default SearchTool;
