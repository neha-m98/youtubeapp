import React from "react";
import debounce from "lodash.debounce";

class SearchBar extends React.Component {
  state = { term: "" };

  debounceOnChange = debounce((event) => this.props.onFormSubmit(event), 1000);

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    this.debounceOnChange(event.target.value);
  };

  // onFormSubmit = (event) => {
  //   event.preventDefault();

  //   this.props.onFormSubmit(this.state.term);
  // };

  render() {
    return (
      <div
        className="search-bar ui segment"
        style={{ backgroundColor: "powderblue" }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Streaming App</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
