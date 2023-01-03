$(document).ready(function() {
    
    let pack1 =  $('#pack-play-1');
    let audio1 = document.createElement("audio");
    audio1.src = '/assets/images/packs/pack-source/random-home-stuff-preview.wav';
    audio1.onended = () => pack1.css({"background-image" : "url(\"/assets/images/packs/play-button.svg\")"});
    pack1.click(() => {
        if(audio1.paused){
            audio1.play();
            pack1.css({"background-image" : "url(\"/assets/images/packs/pause-button.svg\")"});
        } else {
            audio1.pause();
            pack1.css({"background-image" : "url(\"/assets/images/packs/play-button.svg\")"});
        }
    });

    let pack2 =  $('#pack-play-2');
    let audio2 = document.createElement("audio");
    audio2.src = '/assets/images/packs/pack-source/nature-vol1-preview.wav';
    audio2.onended = () => pack2.css({"background-image" : "url(\"/assets/images/packs/play-button.svg\")"});
    pack2.click(() => {
        if(audio2.paused){
            audio2.play();
            pack2.css({"background-image" : "url(\"/assets/images/packs/pause-button.svg\")"});
        } else {
            audio2.pause();
            pack2.css({"background-image" : "url(\"/assets/images/packs/play-button.svg\")"});
        }
    });

    let pack3 =  $('#pack-play-3');
    let audio3 = document.createElement("audio");
    audio3.src = '/assets/images/packs/pack-source/glitchy-space-stuff-preview.wav';
    audio3.onended = () => pack3.css({"background-image" : "url(\"/assets/images/packs/play-button.svg\")"});
    pack3.click(() => {
        if(audio3.paused){
            audio3.play();
            pack3.css({"background-image" : "url(\"/assets/images/packs/pause-button.svg\")"});
        } else {
            audio3.pause();
            pack3.css({"background-image" : "url(\"/assets/images/packs/play-button.svg\")"});
        }
    });

    let pack4 =  $('#pack-play-4');
    let audio4 = document.createElement("audio");
    audio4.src = '/assets/images/packs/pack-source/nature-vol1-preview.wav';
    audio4.onended = () => pack4.css({"background-image" : "url(\"/assets/images/packs/play-button.svg\")"});
    pack4.click(() => {
        if(audio4.paused){
            audio4.play();
            pack4.css({"background-image" : "url(\"/assets/images/packs/pause-button.svg\")"});
        } else {
            audio4.pause();
            pack4.css({"background-image" : "url(\"/assets/images/packs/play-button.svg\")"});
        }
    });

});
