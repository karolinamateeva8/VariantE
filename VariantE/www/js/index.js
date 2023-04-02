document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  $("#camera-btn").click(getPicture);

  function getPicture() {
    navigator.camera.getPicture(succeededCameraCallback, failedCameraCallback, {
      quality: 25,
      destinationType: Camera.DestinationType.DATA_URL,
    });
  }

  function succeededCameraCallback(imageData) {
    $("#myImage").attr("src", "data:image/jpeg;base64," + imageData);
    $("#myImage").css("display", "block");
    $("#myImage").show();
  }

  function failedCameraCallback(message) {
    alert(message);
  }
}
