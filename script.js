var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: {
            src: 'https://i.ytimg.com/vi/pIrOAyXIjak/maxresdefault.jpg'
        }
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: {
            src: 'https://www.joy.pl/u/ic/W1/u/a/17/11/to-pewne-bedzie-nowy-krol-lew-i-znamy-obsade_51.jpeg'
        }
    },
    {
        id: 3,
        title: 'Chłopaki nie płaczą',
        desc: 'Film o facecie w łódce',
        image: {
            src: 'https://ocdn.eu/pulscms-transforms/1/U3hktkpTURBXy9mOTA1NmQ3OTJiMTExOTZiNDRhYjAxYTk4ZWQyZDBiMC5qcGeRkwXNASzNAbg'
        }
    },
    {
        id: 4,
        title: 'Star Wars',
        desc: 'Dawno dawno temu, w odległej galaktyce',
        image: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/220px-Star_Wars_Logo.svg.png'
        }
    },
    {
        id: 5,
        title: 'Kung Fury',
        desc: 'About Hakerman',
        image: {
            src: 'http://1.fwcdn.pl/ph/71/03/707103/614314_1.2.jpg'
        }
    }
];


var LiItem = React.createClass({
  // propTypes: {
  //   movie: React.PropTypes.object.isRequired,
  // },

  render: function() {
    return React.createElement('li', {key: this.props.movie.id},
        React.createElement('h2', {}, this.props.movie.title),
        React.createElement('p', {}, this.props.movie.desc),
        React.createElement('img', {src: this.props.movie.image.src})
    )
  },
});


var Title = React.createClass({
  render: function () {
    return React.createElement('h1', {},
      React.createElement('span', {}, this.props.title)
    )
  }
});


        
var moviesElements = movies.map(function(movie2){
    return React.createElement(LiItem, {movie: movie2})
})


        
var element =
  React.createElement('div', {},
    React.createElement(Title, {title: 'Lista filmów'}),
    React.createElement('ul', {}, moviesElements)
  );   
ReactDOM.render(element, document.getElementById('app'));
