// Access the webcam
navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    var videoElement = document.getElementById("videoElement");
    videoElement.srcObject = stream;

    var stopButton = document.getElementById('captureButton');
    stopButton.addEventListener('click', function() {
        // Stop the media stream track
        var mediaTracks = stream.getTracks();
        mediaTracks.forEach(function(track) {
            track.stop();
        });
    });
})
.catch(function(error) {
  console.error('Error accessing the webcam:', error);
});

// overlay a box
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

// Draw the person box
var personBox = {
    x: 100,
    y: 50,
    width: 200,
    height: 200
  };

context.lineWidth = 2;
context.strokeStyle = 'red';
context.beginPath();
context.rect(personBox.x, personBox.y, personBox.width, personBox.height);
context.stroke();

const onCapture = () => {
    $("#captures").hide();
    $("#captureButton").hide("d-none");
    $("#capturedInfo").removeClass("d-none")
    $("#generateButton").removeClass("d-none");
}
function changeYesNo(i,showSubquestion){
    // let yesNo = $('input[name="yesNo'+i+'"]:checked').val();
    // console.log(i,yesNo)
    if(showSubquestion){
        $("#subQuestion"+i).removeClass("d-none");
        $("#radioLikeliness1"+i).prop('required', 'true');
    }else{
        $("#subQuestion"+i).addClass("d-none");
        $("#radioLikeliness1"+i).prop('required', "");
    }
}