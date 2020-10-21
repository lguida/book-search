import React from 'react';
import "./App.css"
import ResultsList from './ResultsList/ResultsList'
import SearchForm from './SearchForm/SearchForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      printType: "all",
      bookType: "all",
      searchTerm: '',
    };
  }

  //fetch functions
  formatQueryParams(queryArray){
    const queryItems = Object.keys(queryArray)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryArray[key])}`)
    return queryItems.join('&')
  }

  dealWithResults(data){
    this.setState({
      results: data
    })
  }
  

  handleSubmit(e){
    e.preventDefault()
    const urlBase = 'https://www.googleapis.com/books/v1/volumes?'
    const options = {
      key: 'AIzaSyC5aTpuHuQMrP23Pv9HbJJxj9EBQ319P8M',
      q: this.state.searchTerm,
      printType: this.state.printType,
    }
    let url = urlBase + this.formatQueryParams(options)

    if (this.state.bookType !== 'all'){
      url = url + '&filter=' + this.state.bookType
    }
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => this.dealWithResults(data))
      .catch(err => console.log("there was an error"))
  }

  //update state for search options
  setPrintType(selectedPrint){
    this.setState({
      printType: selectedPrint
    })
  }

  setBookType(selectedBook){
    this.setState({
      bookType: selectedBook
    })
  }

  setSearchTerm(search){
    this.setState({
      searchTerm: search
    })
  }

  

  //render function
  render() {
    let resultsToList = <p></p>
    if (this.state.results.length !== 0) {
      resultsToList = <ResultsList results={this.state.results}/>
      console.log(this.state.results.length)
    }
    
    return (
      <main className='App'>
        <h1 className="main_title">Google Book Search</h1>
        <SearchForm 
          setPrintType={selectedPrint => this.setPrintType(selectedPrint)}
          setBookType={selectedBook => this.setBookType(selectedBook)}
          setSearchTerm={search => this.setSearchTerm(search)}
          handleSubmit={e => this.handleSubmit(e)}/>
        {resultsToList}
      </main>
    );
  }
}

export default App;
