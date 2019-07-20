var module = (function() {
    "use strict";
    return {

        createBicyclePrototye: function() {

            return {
                speed: 0,
                applyBrake(x) { this.speed = this.speed - x; },
                speedup(y) { this.speed = this.speed + y; }
            };
        },

        createMountainBikeProtoype: function(prototype) {

            var mountain = Object.create(prototype);
            mountain.gear = 1;
            mountain.setGear = function(z) {
                this.gear = z;
            }
            return mountain;
        },

        start: function() {
            var bicyclePrototypeObj = this.createBicyclePrototye;
            var mountainBikePrototypeObj = this.createMountainBikeProtoype(bicyclePrototypeObj);
            return mountainBikePrototypeObj;

        }

    }
})();

function func() {


    var x = Object.create(module.createBicyclePrototye());
    x.speedup(10);
    console.log("speed up by (10)= " + x.speed);
    x.applyBrake(4);
    console.log("break by (4)= " + x.speed);
    var y = Object.create(module.createMountainBikeProtoype(x));
    y.setGear(3);
    console.log("gear set to (3)=" + y.gear);
}

function loadFunc() {
    func();
}
window.onload = loadFunc;