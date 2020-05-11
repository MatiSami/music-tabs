import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

class SearchResult extends Component {
  render() {
    const { data, tab, display, result, close } = this.props;
    if (result === false) {
      return (
        <div
          className={"search-result " + (display ? "search-result_block" : "")}
        >
          <div className="close-bar">
            <FontAwesomeIcon  className="close-bar__icon" icon={faTimes} onClick={close}/>
          </div>
          
          {data.map((artist) => (
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
      return <div className={"search-result"}></div>;
    }
  }
}

export default SearchResult;
