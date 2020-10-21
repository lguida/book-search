import React from 'react'
import './FilterOptions.css'


class FilterOptions extends React.Component {
    render(){
        return(
            <form className="filter_form">
                <label htmlFor="print-type">Print Type:</label>
                <select id="print-type" name="print-type" onChange={e => this.props.setPrintType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="book-type">Book Type:</label>
                <select id="book-type" name="book-type" onChange={e => this.props.setBookType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="parital">Parial Text</option>
                    <option value="full">Full Text</option>
                    <option value="free-ebooks">Free E-books</option>
                    <option value="paid-ebooks">Paid E-books </option>
                    <option value="ebooks">ALl E-books</option>
                </select>
            </form>
        )
    }
}

export default FilterOptions