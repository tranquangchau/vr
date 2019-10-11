AFRAME.registerComponent('camera-velocity', {
    schema: {},
    init: function() {
        var el = this.el;
        var cursorEl = document.querySelector('#cursor');
        var canvasEl = document.querySelector('canvas');
        var cameraEl = document.querySelector('a-camera');
        var rotateInterval = null;
        var dragFlag = false;
        var startY = 0;
        var startX = 0;
        var endY = 0;
        var endX = 0;
        var timeStamp = 0;
        var vector = 0.0025;
        var threshold = 0.2;
        var tempClientX = null;
        var tempClientY = null;
        var times = 100;
        let scale = 5;

        canvasEl.addEventListener('mousedown', function() {
            startY = cameraEl.getAttribute('rotation').y;
            startX = cameraEl.getAttribute('rotation').x;
            timeStamp = Math.floor(Date.now());
            dragFlag = true;
            clearInterval(rotateInterval);
        });

        canvasEl.addEventListener('mousemove', function(event) {
            setTimeout(function() {
                tempClientX = event.clientX.toString(); ////Mouse Values during MOUSEMOVE
                tempClientY = event.clientY.toString();
            }, 15);
        });

        canvasEl.addEventListener('mouseup', function(event) {
            endY = cameraEl.getAttribute('rotation').y;
            endX = cameraEl.getAttribute('rotation').x;
            var currentClientX = window.event.clientX.toString();
            var currentClientY = window.event.clientY.toString();
            setTimeout(function() {
                if (currentClientX != tempClientX || currentClientY != tempClientY) {
                    var offsetTime = Math.floor(Date.now()) - timeStamp;
                    var angleYVelocity = (endY - startY) / offsetTime * 2;
                    var angleXVelocity = (endX - startX) / offsetTime * 2;
                    var ratio = angleXVelocity / angleYVelocity;
                    // console.log(angleXVelocity + ' ' + angleYVelocity);
                    if (Math.abs(angleYVelocity) > 0) {
                        angleYVelocity = Math.abs(angleYVelocity) > 0.5 ? Math.sign(angleYVelocity) * 0.5 : angleYVelocity;
                        angleXVelocity = angleYVelocity * ratio;
                    }
                    if (Math.abs(angleXVelocity) > 0) {
                        angleXVelocity = Math.abs(angleXVelocity) > 0.4 ? Math.sign(angleXVelocity) * 0.4 : angleXVelocity;
                        angleYVelocity = angleXVelocity / ratio;
                    }
                    clearInterval(rotateInterval);
                    times = 150;
                    var angleYOffset = angleYVelocity / times;
                    var angleXOffset = angleXVelocity / times;
                    rotateInterval = setInterval(function() {
                        if (times > 0) {
                            var currentAngle = cameraEl.getAttribute('rotation');
                            cameraEl.setAttribute('rotation', {
                                x: currentAngle.x + angleXVelocity,
                                y: currentAngle.y + angleYVelocity,
                                z: currentAngle.z,
                            });
                            angleYVelocity -= angleYOffset;
                            angleXVelocity -= angleXOffset;

                            times -= 1;
                        }
                    }, 0.05);
                }
            }, 30);
            dragFlag = false;

        });
    },
    update: function() {},
    tick: function(time, timeDelta) {
        var cameraEl = document.querySelector('a-camera');
        var currentAngle = cameraEl.getAttribute('rotation');
        if (currentAngle.x >= 90 || currentAngle.x <= -90) {
            cameraEl.setAttribute('rotation', {
                x: Math.sign(currentAngle.x) * 90,
                y: currentAngle.y,
                z: currentAngle.z,
            });
        }
    }
});