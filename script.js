var GalleryItem = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('h2', {}, this.props.image.name),
				React.createElement('img', {src: this.props.image.src})
			)
		)
	},	
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement(Movie, {key: movie_id},
				React.createElement('h2', {}, this.props.image.name),
				React.createElement('img', {src: this.props.image.src})
			)
		)
	},

});

var element = React.createElement(GalleryItem);
ReactDOM.render(element, document.getElementById('app'));

var image = {
	name: 'Kotek',
	src: 'http://imgur.com/n80YCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});