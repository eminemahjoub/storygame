let redLight = document.querySelector("#redLight");
let car      = document.querySelector("#car");

setTimeout(()=>{
    startAnimation();
}, 2000)

let startAnimation = () => {
    redLight.style.display = "none";
    let startKeyframes = {"left": "2vw"};
    let endKeyframes = {"left": "100vw"};
    let options = {
        duration: 3000,
        easing: "cubic-bezier(0.5, 0, 0.75, 0)"
    };

    car.animate([startKeyframes, endKeyframes], options);
};