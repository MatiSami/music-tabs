import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    const { data, tab } = this.props;
    console.log(tab)
    console.log(data)

    return (
      <div>
        {data.map(artist => (
          <li key={artist.id}>
            {/* <a href={'http://www.songsterr.com/a/wa/bestMatchForQueryString?s=' + artist.title + '&a=' + artist.artist.nameWithoutThePrefix}> */}
            <a href={'http://www.songsterr.com/a/wa/bestMatchForQueryString?s=' + artist.title + '&a=' + artist.artist.nameWithoutThePrefix + '&track' + tab}>
            <h2>{artist.title}</h2>
            <h3>{artist.artist.nameWithoutThePrefix}</h3>
         </a></li>
        ))}
      </div>
    );
  }
}

export default SearchResult;
