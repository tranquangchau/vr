  AFRAME.registerComponent('auto-rotate', {
      schema: {
          default: true
      },
      init: function() {
          var canvasEl = document.querySelector('canvas');
          var cameraEl = document.querySelector('a-camera');
          var rotateInterval = null;
          var checkinterval = null;
          window.moveflag = null;
          setTimeout(function() { window.moveflag = true }, 3000);
          window.amount = 0;

          window.deccelval = 0.6;


          canvasEl.addEventListener('click', function(event) {
              window.moveflag = false;
              window.deccelval = 0.6;
              window.amount = 0;
              clearTimeout(checkinterval);
              checkinterval = setTimeout(function() { window.moveflag = true }, 3000);

          });
      },
      tick: function(time, timeDelta) {
          if (this.data) {
              var cameraEl = document.querySelector('a-camera');
              var currentpos = cameraEl.getAttribute('rotation');
              var canvasEl = document.querySelector('canvas');
              var sample = 0.0002;
              var OffsetX = 0;


              if (window.moveflag) {
                  window.amount = window.amount + sample;
                  if (window.amount >= 0.08) {
                      window.amount = 0.08
                  }
                  if (currentpos.x < 0) {
                      if (currentpos.x > -25) {
                          window.deccelval = Math.abs(window.deccelval) - 0.002;
                          if (window.deccelval < 0.1) {
                              window.deccelval = 0.1
                          }
                      }

                      OffsetX = currentpos.x + window.amount * Math.abs(window.deccelval);

                      if (OffsetX > 0) {
                          OffsetX = 0
                      }
                  } else if (currentpos.x > 0) {
                      if (currentpos.x < 25) {
                          window.deccelval = Math.abs(window.deccelval) - 0.002;
                          if (window.deccelval < 0.1) {
                              window.deccelval = 0.1
                          }
                      }

                      OffsetX = currentpos.x - window.amount * Math.abs(window.deccelval);

                      if (OffsetX < 0) {
                          OffsetX = 0
                      }
                  }

                  cameraEl.setAttribute('rotation', {
                      x: OffsetX,
                      y: currentpos.y - window.amount,
                      z: currentpos.z,
                  });
              }
          }
      }

  });