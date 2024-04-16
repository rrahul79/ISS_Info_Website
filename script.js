var locationBtn = document.getElementById("loc_btn");
var AstroBtn = document.getElementById("astro_btn");

locationBtn.addEventListener("click", function () {
    fetchISSLocation();
});

AstroBtn.addEventListener("click", function () {
    fetchAstros();
});

function fetchISSLocation() {
    fetch("http://api.open-notify.org/iss-now.json")
        .then(response => response.json())
        .then(data => {
            let latitude = data.iss_position.latitude;
            let longitude = data.iss_position.longitude;

            document.getElementById("latitude").innerHTML = latitude;
            document.getElementById("longitude").innerHTML = longitude;
        })
        .catch(error => {
            console.error('Error fetching ISS location:', error);
        });
}

function fetchAstros() {
    fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(data => {
            let astro_list = data.people
                .filter(person => person.craft === "ISS")
                .map(person => person.name);

            let list = document.getElementById("list");
            list.innerHTML = ""; // Clear previous list
            astro_list.forEach(name => {
                let list_item = document.createElement("li");
                list_item.appendChild(document.createTextNode(name));
                list.appendChild(list_item);
            });
        })
        .catch(error => {
            console.error('Error fetching astronauts:', error);
        });
}
