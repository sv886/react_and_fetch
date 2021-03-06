var BritSpears = React.createClass({

  getInitialState(){
    return {
      "data": []
    }
  },

  fetchImages(){
    var component = this;
    fetch("http://api.giphy.com/v1/gifs/search?q=britney+spears&api_key=dc6zaTOxFJmzC")
    .then(function(r){
      return r.json();
    })
    .then(function(json){
      component.setState({
        "data": json.data
      })
    })
  },

  componentDidMount(){
    this.fetchImages();
  },

  render(){
    return <div>
      {this.state.data.map(function(d){
        return <img src={d.images.fixed_width_small.url}/>
     })}
    </div>;
  }
});

React.render(<BritSpears/>, document.body);
