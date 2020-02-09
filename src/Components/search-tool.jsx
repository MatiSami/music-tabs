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
      fetch: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNoSearchResult = this.handleNoSearchResult.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeOption(event) {
    this.setState({ option: event.target.value });
  }

  handleNoSearchResult(data) {
    if (data.length === 0) {
      this.setState({
        noResults: true
      });
      console.log("brak wyników");
    } else {
      this.setState({
        noResults: false
      });
      console.log("są wyniki");
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.value.length === 0) {
      return this.setState({
        error: true
      });
    } else {
      fetch(
        `http://www.songsterr.com/a/ra/songs.json?pattern=${this.state.value}`
      )
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            this.setState({
              searchResult: data,
              resultDisplay: true,
              error: false,
              noResults : false,
              fetch : true
            });
          }else {
            this.setState({
              noResults : true,
              resultDisplay: false
            })
            console.log("coś poszło nie tak")
          }
        });
    }
  }

  render() {
    let widthAppWithResult = {
      width: "calc(100% - 400px)"
    };
    console.log(this.state.searchResult.length);
    return (
      <div
        className="App"
        style={this.state.resultDisplay ? widthAppWithResult : null}
      >
        <div>
          <h1 className="search-tool_title">Znajdź akordy do darcia mordy</h1>
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
                  className="search-tool_select"
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
              this.state.noResults && this.state.fetch ? "search-tool_error" : "search-tool_error__hide"
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
