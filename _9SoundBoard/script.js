const sounds = ['applause','boo', 'gasp','tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', ()=>{
    stopSongs();
    document.getElementById(sound).play();
  })

  document.getElementById('buttons').appendChild(btn);
})

function stopSonngs(){
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause()
    song.currentTime = 0;
  })
}



// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("Promise completed"); }, 3000);
//   });
  
//   myPromise.then(function(value) {
//     document.getElementById("demo").innerHTML = value;
//   });

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(this.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.send();
//   }
  
//   getFile(myDisplayer); 