var cats = [
    {
    id: 1,
	desc: 'opis jednego obrazka',
	name: 'Kot w opałach 2',
	image: 'http://onkologiaweterynaryjna.com.pl/public/upload/catalog/product/36/thumb-disease-image_1490453060sphynx_814164_1920.jpg'
},

{
	id: 2,
	name: 'Dwa koty po odpałach',
	desc: 'opis jednego obrazka',
	image: 'https://manito.pl/images/manito/12000-13000/Interaktywny-KOTEK-DLA-DZIECI-reagujacy-na-dotyk_%5B12802%5D_480.jpg'
},

{
	id: 3,
	name: 'Kot w opałach 2',
	desc: 'opis jednego obrazka',
	image: 'http://onkologiaweterynaryjna.com.pl/public/upload/catalog/product/36/thumb-disease-image_1490453060sphynx_814164_1920.jpg'
}];


var CatList = React.createClass({
 	propTypes: {
  	cat: React.PropTypes.array.isRequired,
  	},

  render: function() {
    return React.createElement('li',
        React.createElement('h2', {}, this.props.cat.name),
        React.createElement('p', {}, this.props.cat.desc),
        React.createElement('img', {src: this.props.cat.image})
    )
  },
});


var Name = React.createClass({
  render: function () {
    return React.createElement('h1', {},
      React.createElement('span', {}, this.props.name)
    )
  }
});


        
var catsElements = cats.map(function(cat2){
    return React.createElement(CatList, {cat: cat2, key: cat2.id})
})


        
var element =
  React.createElement('div', {},
    React.createElement(Name, {name: 'Lista kotów'}),
    React.createElement('ul', {}, catsElements)
  );   
ReactDOM.render(element, document.getElementById('app'));
