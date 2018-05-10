
var Movie = React.createClass({ // nie kumam jak chcę się posłużyć tą klasą w linijce 9 zamiast 'div' nie działa :(
	propTypes: {
		image: React.PropTypes.object.isRequired, // dałem tutaj wcześniej INTEGER zamiast OBJECT ale wtedy nie działało.
	},

	render: function() {
		return (
			React.createElement('div', {image_id}, //dlaczego tutaj jest not defined?? przecież jest defined w 25 np linijce
				React.createElement('h2', {}, this.props.image.name),
				React.createElement('img', {src: this.props.image.src})
			)
		)
	},

});

var image = {
	id: 1,
	name: 'Kot w opałach 2',
	src: 'http://onkologiaweterynaryjna.com.pl/public/upload/catalog/product/36/thumb-disease-image_1490453060sphynx_814164_1920.jpg'
};

var image = {
	id: 2,
	name: 'Dwa koty po odpałach',
	src: 'https://manito.pl/images/manito/12000-13000/Interaktywny-KOTEK-DLA-DZIECI-reagujacy-na-dotyk_%5B12802%5D_480.jpg'
};

var image = {
	id: 3,
	name: 'Kot w opałach 2',
	src: 'http://onkologiaweterynaryjna.com.pl/public/upload/catalog/product/36/thumb-disease-image_1490453060sphynx_814164_1920.jpg'
};

var element = React.createElement(Movie, {image: image});
ReactDOM.render(element, document.getElementById('app'));

