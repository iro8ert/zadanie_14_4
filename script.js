
var Movie = React.createClass({ // nie kumam jak chcę się posłużyć tą klasą w linijce 9 zamiast 'div' nie działa :(
	propTypes: {
		image: React.PropTypes.object.isRequired, // dałem tutaj wcześniej INTEGER zamiast OBJECT ale wtedy nie działało.
	},

	render: function() {
		return (
			React.createElement('div', {},//dlaczego tutaj jest not defined?? przecież jest defined w 25 np linijce
				React.createElement('h2', {}, this.props.image.name),
				React.createElement('h3', {}, "opis listy kotów2"),
				React.createElement('img', {src: this.props.image.src})
			)
		)
	},

});

var MovieDescription = React.createClass({ /
	propTypes: {
		image: React.PropTypes.object.isRequired, 
	},

	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('h3', {}, "opis listy kotów")
			)
		);
	},

});

var Movies = React.createClass({ //movies description jako osobny var i react z propsami który nie jest tablicą
	propTypes: {
		images: React.PropTypes.array.isRequired,
	},

	render: function() {
		var movieElements = this.props.images.map(function(image){
			return React.createElement(Movie, {image, key: image.id})
		});

		return (
			React.createElement('div', {},
				React.createElement('h1', {}, "lista kotów"),
				React.createElement('div', {}, movieElements)
			)
		);
	},
});

var image = [{
	id: 1,
	txt: 'opis jednego obrazka',
	name: 'Kot w opałach 2',
	src: 'http://onkologiaweterynaryjna.com.pl/public/upload/catalog/product/36/thumb-disease-image_1490453060sphynx_814164_1920.jpg'
},

{
	id: 2,
	name: 'Dwa koty po odpałach',
	txt: 'opis drugiego obrazka',
	src: 'https://manito.pl/images/manito/12000-13000/Interaktywny-KOTEK-DLA-DZIECI-reagujacy-na-dotyk_%5B12802%5D_480.jpg'
},

{
	id: 3,
	name: 'Kot w opałach 2',
	txt: 'opis kolejnego obrazka',
	src: 'http://onkologiaweterynaryjna.com.pl/public/upload/catalog/product/36/thumb-disease-image_1490453060sphynx_814164_1920.jpg'
}];

var element = React.createElement(Movies, {images: image}, MovieDescription);
ReactDOM.render(element, document.getElementById('app'));

