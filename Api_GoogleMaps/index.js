



let map, markers = [];

async function initMap() {
  // localizacion de tre sitios favoritos
  const positions = [
    { lat: 6.4237499, lng: -66.5897293 },
    { lat: 4, lng: -72 },
    { lat: -9.189967, lng: -75.015152 }];

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map,centra en la posicsion cero
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: positions[0],
    mapId: "DEMO_MAP_ID",
  });

  
  //se recorre el arrays para cololocar loos puntos en los sitios selecionados 
  positions.forEach( position => {
    const marker = new google.maps.Marker({
      map:map,
      position: position,
      title: "chincheta",
    });
    markers.push(marker)
  })
  
  

  
}
initMap()






