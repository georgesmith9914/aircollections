var video = document.getElementById('video');
var counter = 0;
//var streamId = '1220b0336cf5c3c34c0a05e5f8d9a6fb8874a091ff47a9546cf748d8e93827b0050101123a74ec79ab1edbafebf2d55a51b33cc86ea567bb71e04f76030c432c6ec5'
//var source = 'http://localhost:8935/stream/' + streamId + '.m3u8'
//var source = 'https://cdn.livepeer.com/hls/d4dfdt7k4za7dsyb/index.m3u8'
var source = "https://ziaqsukkqm.medianet.work/v/wmC8vbQ7"
//var source = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
if(Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(source);
  hls.attachMedia(video);
}

function unmuteVideo(){
  document.getElementById('video').muted=false;
}

// bind video play to play button
function init(){
  var video = document.getElementById('video')

  video.play()
 
}



window.onload=init;
