import React, { Component } from 'react'
import './ResultsList.css'

class ResultsList extends Component{
    render(){
        const printingResults = this.props.resultItems
        console.log(printingResults)
        return (
            <div>
                <p>{this.props}</p>
            </div>
        )
    }
}

export default ResultsList