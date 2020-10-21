import React from 'react'
import './SearchBar.css'


class SearchBar extends React.Component {
    render(){
        return(
            <form className="search_bar" onSubmit={e => this.props.handleSubmit(e)}>
                <label htmlFor="searchbar">Search:</label>
                <input type="text" name="searchbar" onChange={e => this.props.setSearchTerm(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar