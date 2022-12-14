function updateMap(){
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp =>{
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;
            if(cases>255){
                color = "rgb(256,34,0)";
            }

            else{
                color = `rgb(${cases},0,0)`;
            }

            // Mark on the map
            // Set options
            var marker = new mapboxgl.Marker({
                color: color,
                draggable:false
            }).setLngLat([longitude,latitude])
            .addTo(map);
            
        });
    })

}


updateMap();