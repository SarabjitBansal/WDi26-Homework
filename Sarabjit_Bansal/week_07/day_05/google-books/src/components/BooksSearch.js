import React, { PureComponent as Component} from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state ={query:''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit= this._handleSubmit.bind(this);
  }
  _handleInput(e) {
    this.setState({ query: e.target.value});
  }
  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit( this.state.query );

  }
  render(){
    return(
      <form onSubmit={this._handleSubmit} className ="formSearch">
          <input type = "text" placeholder = "Jaws" className="inputtext" onInput={ this._handleInput} />
        <input type ="submit" className="submit" value ="Search" />
      </form>
    );
  }
}

class Gallery extends Component {



  render(){
    // console.log(this.props.images);
    return(

      <div className ="gallery">
      {  this.props.images.map((img) => <Image url={img} key={img}/> ) }
      </div>
    )
  }
}


// function Image(props) {
//   // it's a render Functional
//   return(
//     <img src ={props.url} width="150" height= "150" alt={props.url} />
//   )
// }

class Image extends Component {


  _handleClick() {
    console.log('clicked');
  }

  render() {
    return(
      <img nice="yes" onClick={this._handleClick} src ={this.props.url} width="150" height= "150" alt={this.props.url} />
    );
  }
}

class BooksSearch extends Component {
  constructor(props){
    super(props);
    this.state={images:[]};
    this.fetchImages= this.fetchImages.bind(this);
  }

  fetchImages(q) {

    const flickrURL = 'https://www.googleapis.com/books/v1/volumes?'
    axios.get(flickrURL, {
        params: {
          q:q
        }
      }).then(function (result) {
        // console.log(result);

        const xa = result.data.items;
        const images = xa.map(result1 => result1.volumeInfo.imageLinks.thumbnail);

        // console.log(images);
        this.setState({images});
      }.bind(this));
  }

  render(){
    return(
      <div className ="container">
        <div className= "header"><h1>Book Search</h1></div>

        <SearchForm onSubmit = {this.fetchImages}/>
        <Gallery images = { this.state.images }/>
      </div>
    );
  }
}

export default BooksSearch;
