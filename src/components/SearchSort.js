/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class SearchSort extends Component {
  render() {
    return (
      <div className="row mt-15">
        {/* search */}
        <Search onSearch = {this.props.onSearch}/>
        {/* sort */}
        <Sort 
        onSort = {this.props.onSort}
        sortBy = {this.props.sortBy}
        sortValue = {this.props.sortValue}
        />
      </div>
    );
  }
}

export default SearchSort;
