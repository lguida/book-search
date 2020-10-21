import React from 'react'
import './SearchForm.css'

import FilterOptions from '../FilterOptions/FilterOptions'
import SearchBar from '../SearchBar/SearchBar'


class SearchForm extends React.Component {
    render(){
        return(
            <div className="searchform">
                <SearchBar 
                    setSearchTerm={this.props.setSearchTerm}
                    handleSubmit={this.props.handleSubmit}/>
                <FilterOptions 
                    setPrintType={this.props.setPrintType}
                    setBookType={this.props.setBookType}/>
            </div>
        )
    }
}

export default SearchForm