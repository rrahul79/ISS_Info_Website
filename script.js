var locationBtn = document.getElementById("loc_btn");
var AstroBtn = document.getElementById("astro_btn");

locationBtn.addEventListener("click", function () {
    fetch("http://api.open-notify.org/iss-now.json")
        .then((response) => { return response.json(); })
        .then((data) => {
            //console.log(data);
            let latitude = data.iss_position.latitude;
            let longitude = data.iss_position.longitude;

            document.getElementById("latitude").innerHTML = latitude;
            document.getElementById("longitude").innerHTML = longitude;
    })
});

AstroBtn.addEventListener("click", function () {
    let astro_list = [];
    fetch("http://api.open-notify.org/astros.json")
        .then((response) => { return response.json(); })
        .then((data) => {
            //let index = 0;
            for (var i = 0; i < data.people.length ; i++)
            {
                if (data.people[i].craft == "ISS")
                {
                    astro_list[i] = data.people[i].name;
                }
                
            }
            let list = document.getElementById("list");
            for (var i = 0; i < astro_list.length; i++)
            {
                let list_item = document.createElement("li");
                list_item.appendChild(document.createTextNode(astro_list[i]));
                list.append(list_item);
            }
            
    })
    
});

