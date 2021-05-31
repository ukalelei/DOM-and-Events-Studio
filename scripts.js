// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let takeOff = this.document.getElementById("takeoff");
    takeOff.addEventListener("click", function(event) {
        
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
            let inFlightStatus = document.getElementById("flightStatus");
            let inFlightColor = document.querySelector("#shuttleBackground");
            let shuttleHeight = document.getElementById("spaceShuttleHeight");

            inFlightStatus.innerHTML = "Shuttle in flight.";
            inFlightColor.style.background = "blue";
            shuttleHeight.innerHTML = "10000";
        }
    })

    let landButton = this.document.getElementById("landing");
    landButton.addEventListener("click", function(event) {
        
        if (window.confirm("The shuttle is landing. Landing gear engaged.")){
            let landingStatus = document.getElementById("flightStatus");
            let landingColor = document.querySelector("#shuttleBackground");
            let shuttleHeight = document.getElementById("spaceShuttleHeight");

            landingStatus.innerHTML = "The shuttle has landed.";
            landingColor.style.background = "green";
            shuttleHeight.innerHTML = "0";
        }
    })

    let abortButton = this.document.getElementById("missionAbort");
    abortButton.addEventListener("click", function(event) {
        
        if (window.confirm("Confirm that you want to abort the mission.")){
            let abortStatus = document.getElementById("flightStatus");
            let abortColor = document.querySelector("#shuttleBackground");
            let shuttleHeight = document.getElementById("spaceShuttleHeight");

            abortStatus.innerHTML = "Mission aborted.";
            abortColor.style.background = "green";
            shuttleHeight.innerHTML = "0";
        }
    })

    let upButton = this.document.getElementById("up");
    upButton.addEventListener("click", function(event) {
        
        let rocketPosition= document.getElementById("rocket");

        rocketPosition.height = 10;
    })
});