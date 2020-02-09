import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    const { data, tab, display, result} = this.props;
    console.log(data)
    if(result === false){
 return (
      <div
        className={"search-result " + (display ? "search-result_block" : "")}
      >
        {data.map(artist => (
          <li key={artist.id}>
            <a
              className="search-result_element"
              href={
                "http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" +
                artist.title +
                "&a=" +
                artist.artist.nameWithoutThePrefix +
                "&track" +
                tab
              }
            >
              <p>
                {artist.title} - {artist.artist.nameWithoutThePrefix}
              </p>
            </a>
          </li>
        ))}
      </div>
    );
    } else {
      return (
        <div
        className={"search-result"}
      ></div>
      )
    }
   
  }
}

export default SearchResult;
