<template>
	<div class="Map">
		<div id="map-canvas" style="min-height:calc(100vh); width: calc(100vw);"></div>
	</div>
</template>
<script>
function getIconUrl(category){
  //DRY Dont repeat yourself
  var acce = 'http://res.cloudinary.com/paris7510/image/upload/c_scale,w_23/v1531168825/incubadora_itinerante/types/acce.png'
  var table = {
   FabLab:'https://res.cloudinary.com/paris7510/image/upload/c_scale,w_23/v1531168885/incubadora_itinerante/types/fab.png',Réseau:'https://res.cloudinary.com/paris7510/image/upload/c_scale,w_23/v1531168981/incubadora_itinerante/types/red.png',Formation:'https://res.cloudinary.com/paris7510/image/upload/c_scale,w_23/v1531168914/incubadora_itinerante/types/form.png',Coworking:'http://res.cloudinary.com/paris7510/image/upload/c_scale,w_23/v1531168858/incubadora_itinerante/types/cowo.png',
  Incubateur:'http://res.cloudinary.com/paris7510/image/upload/c_scale,w_20/v1531171168/incubadora_itinerante/types/incub.png', Accélérateur: acce,
   Accelerateur:acce, Accélerateur:acce
  }
  
  return table[category]
}


function initMap(){
	var myLatlng = new google.maps.LatLng(-10.7269134,-104.4784155,3);
  var mapOptions = {
    
    // zoom: 14,
        center: myLatlng,
    
    zoom: 3, // The initial zoom level when your map loads (0-20)
    minZoom: 0, // Minimum zoom level allowed (0-20)
    maxZoom: 17, // Maximum soom level allowed (0-20)
    zoomControl: true, // Set to true if using zoomControlOptions below, or false to remove all zoom controls.
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT // Change to SMALL to force just the + and - buttons.
    },
    //center: myLatlng, // Centre the Map to our coordinates variable
    mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
    scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
    // All of the below are set to true by default, so simply remove if set to true:
    panControl: true, // Set to false to disable
    mapTypeControl: false, // Disable Map/Satellite switch
    scaleControl: true, // Set to false to hide scale
    streetViewControl: false, // Set to disable to hide street view
    overviewMapControl: false, // Set to false to remove overview control
    rotateControl: true // Set to false to disable rotate control
  };

  var map = new google.maps.Map(
    document.getElementById("map-canvas"),
    mapOptions
  ); // Render our map within the empty div
  initMarkers(map)
}
function initMarkers(map){
	if(window.list){
    window.list.forEach(item=>{
      var myLatlng = new google.maps.LatLng(item.lat, item.lng);
      var marker = new google.maps.Marker({
        map: map,
        icon: getIconUrl(item.category),
        position: myLatlng
      });
      
      
      if(item && item.name){
        withMarker(marker, item, map);
      
      }
      
    })
    
  }
  
  
}

  function withMarker(marker, item, map) {
    var infowindow = new google.maps.InfoWindow({
      content:
        `
<strong>${item.name}</strong>
<p>${item.description}</p>
<br>Web: ${item.wwww||'Non renseigné'}
<br>Contact: ${item.contact||'Non renseigné'}
`
    });
    google.maps.event.addListener(marker, "click", function() {
      infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker, "click", function() {
      //window.location='https://www.snowdonrailway.co.uk/shop_and_cafe.php';
    });
  }
function readIncubadoras() {
  return new Promise((resolve, reject) => {
    db
      .collection("incubadoras")
      .get()
      .then(querySnapshot => {
        var res = [];
        querySnapshot.forEach(doc => {
          res.push(doc.data());
        });
        resolve(res);
      });
  });
}
	export default {
		name: 'Map',
		props:[],
		fetch(){

		},
		data(){
			return{}
		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{

		},
		components:{

		},
		created(){

		},
		mounted(){
			window.db = firebase.firestore();
			readIncubadoras().then(list=>{
    
    window.list = list
    google.maps.event.addDomListener(window, "load", initMap);
    			initMap();
  });
	
		}
	}
</script>
<style lang="scss" scoped>
.Map{
	
}
body{
  padding:0px;
  margin:0px;
}
</style>