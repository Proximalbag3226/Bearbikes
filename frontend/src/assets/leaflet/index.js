var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.attributionControl.addAttribution('BEARBIKES');
map.attributionControl.addAttribution('INNOVATECH GEEKS');

var control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(19.452147, -99.1747),
		L.latLng(19.4521, -99.17)
	],
	language: 'es',
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: false,
	reverseWaypoints: true,
	showAlternatives: true,
	lineOptions: {
		styles: [{
			color: 'red',
			opacity: 1,
			weight: 10
		}]
	},
	altLineOptions: {
		styles: [
			{ color: 'black', opacity: 0.15, weight: 9 },
			{ color: 'white', opacity: 0.8, weight: 6 },
			{ color: 'blue', opacity: 0.5, weight: 2 }
		]
	},
	profile : 'cycling',
})).addTo(map);

L.Routing.errorControl(control).addTo(map);