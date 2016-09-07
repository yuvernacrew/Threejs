var main = function () {
  var scene = new THREE.Scene();

  var W = document.body.clientWidth;
  var H = document.documentElement.clientHeight;

  //カメラゾーン
 
  var width  = W *0.9;
  var height = H * 0.7;
  var fov    =　5000;
  var aspect = width / height;
  var near   = 1;
  var far    = 6000;
  var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
  camera.position.set( 0, 500, 2000 );
  camera.rotation.set( -0.2,0,0);
 
  //レンダラーゾーン
  // document.getElementById('piano').appendChild(renderer.domElement);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.getElementById('piano').appendChild(renderer.domElement);

  //ライトゾーン
 
  var directionalLight = new THREE.DirectionalLight( 0xfaebd7 ,0.5);
  directionalLight.position.set( 0.577, -0.577, 0.577);
  scene.add( directionalLight );

  var directionalLight = new THREE.DirectionalLight( 0xfaebd7 ,0.5);
  directionalLight.position.set( -0.577, -0.577, 0.577);
  scene.add( directionalLight );


  var ambient = new THREE.AmbientLight(0x333333);
  scene.add(ambient);

  //マテリアル
  // var texture = THREE.ImageUtils.loadTexture( 'images/mokume.jpg' );
  // texture.anisotropy = renderer.getMaxAnisotropy();

  var material = new THREE.MeshLambertMaterial( { color: 0xffffff } ); // 白鍵盤マテリアル
  var material1 = new THREE.MeshLambertMaterial( { color: 0x696969 } ); // 黒鍵盤マテリアル
  var mesh =  new THREE.CubeGeometry( 270, 1800, 170, 1000); // 白鍵盤立方体作成
  var mesh1 = new THREE.CubeGeometry( 190, 1200, 170, 1000); // 黒鍵盤立方体作成


  var meshC = new THREE.Mesh( mesh ,material);
  meshC.position.set(1050,100,-950);
  meshC.rotation.x=180;
  
  var meshD = new THREE.Mesh( mesh ,material);
  meshD.position.set(750,100,-950);
  meshD.rotation.x=180;

  var meshE = new THREE.Mesh( mesh ,material);
  meshE.position.set(450,100,-950);
  meshE.rotation.x=180;

  var meshF = new THREE.Mesh( mesh, material);
  meshF.position.set(150,100,-950);
  meshF.rotation.x=180;

  var meshG = new THREE.Mesh( mesh, material);
  meshG.position.set(-150,100,-950);
  meshG.rotation.x=180;

  var meshA = new THREE.Mesh( mesh, material);
  meshA.position.set(-450,100,-950);
  meshA.rotation.x=180;

  var meshB = new THREE.Mesh( mesh, material);
  meshB.position.set(-750,100,-950);
  meshB.rotation.x=180;

  var meshC8 = new THREE.Mesh( mesh, material);
  meshC8.position.set(-1050,100,-950);
  meshC8.rotation.x=180;

  

  var meshCs = new THREE.Mesh( mesh1, material1);
  meshCs.position.set(900,-100,-1000);
  meshCs.rotation.x=180;
  // scene.add( meshCs );

  var meshDs = new THREE.Mesh( mesh1, material1);
  meshDs.position.set(600,-100,-1000);
  meshDs.rotation.x=180;
  // scene.add( meshDs);

  var meshFs = new THREE.Mesh( mesh1, material1);
  meshFs.position.set(0,-100,-1000);
  meshFs.rotation.x=180;
  // scene.add( meshFs );

  var meshGs = new THREE.Mesh( mesh1, material1);
  meshGs.position.set(-300,-100,-1000);
  meshGs.rotation.x=180;
  // scene.add( meshGs );

  var meshAs = new THREE.Mesh( mesh1, material1);
  meshAs.position.set(-600,-100,-1000);
  meshAs.rotation.x=180;
  // scene.add( meshAs );

  function　render() {
    renderer.render( scene, camera );
  }

  render();


  //鍵盤とキーボードを連動

var input_key_buffer = new Array();

document.onkeydown = function (e){
  if(!e) e = window.event; // レガシー
  input_key_buffer[e.keyCode] = true;
};

document.onkeyup = function (e){
  if(!e) e = window.event; // レガシー
  input_key_buffer[e.keyCode] = false;
};

window.onblur = function (){
  input_key_buffer.length = 0;
};

function KeyIsDown(key_code){
  if(input_key_buffer[key_code])  return true;
  // return false;
}

function KeyIsUp(key_code){
  if(input_key_buffer[key_code]) return false;
  // return true;
}

//id取得
var btn_piano = document.getElementById("btn_piano");
var btn_bass = document.getElementById("btn_bass");
var btn_synthe = document.getElementById("btn_synthe");
var btn_chaos = document.getElementById("btn_chaos");
var btn_fun = document.getElementById("btn_fun");
var btn_mario = document.getElementById("btn_mario");
var btn_animal = document.getElementById("btn_animal");
var btn_geino = document.getElementById("btn_geino");

var c,d,e,f,g,a,b,c8,cs,ds,fs,gs,as;
  c = new Audio('audio/piano/C.mp3');
  d = new Audio('audio/piano/D.mp3');
  e = new Audio('audio/piano/E.mp3');
  f = new Audio('audio/piano/F.mp3');
  g = new Audio('audio/piano/G.mp3');
  a = new Audio('audio/piano/A.mp3');
  b = new Audio('audio/piano/B.mp3');
  c8 = new Audio('audio/piano/C8.mp3');
  cs = new Audio('audio/piano/Cs.mp3');
  ds = new Audio('audio/piano/Ds.mp3');
  fs = new Audio('audio/piano/Fs.mp3');
  gs = new Audio('audio/piano/Gs.mp3');
  as = new Audio('audio/piano/As.mp3');



btn_piano.addEventListener('click',function(){
  c = new Audio('audio/piano/C.mp3');
  d = new Audio('audio/piano/D.mp3');
  e = new Audio('audio/piano/E.mp3');
  f = new Audio('audio/piano/F.mp3');
  g = new Audio('audio/piano/G.mp3');
  a = new Audio('audio/piano/A.mp3');
  b = new Audio('audio/piano/B.mp3');
  c8 = new Audio('audio/piano/C8.mp3');
  cs = new Audio('audio/piano/Cs.mp3');
  ds = new Audio('audio/piano/Ds.mp3');
  fs = new Audio('audio/piano/Fs.mp3');
  gs = new Audio('audio/piano/Gs.mp3');
  as = new Audio('audio/piano/As.mp3');
});
btn_bass.addEventListener('click',function(){
    //bass
  c= new Audio('audio/bass/c_bass.mp3');
  d = new Audio('audio/bass/d_bass.mp3');
  e = new Audio('audio/bass/e_bass.mp3');
  f = new Audio('audio/bass/f_bass.mp3');
  g = new Audio('audio/bass/g_bass.mp3');
  a = new Audio('audio/bass/a_bass.mp3');
  b = new Audio('audio/bass/b_bass.mp3');
  c8 = new Audio('audio/bass/c8_bass.mp3');
  cs = new Audio('audio/bass/cs_bass.mp3');
  ds = new Audio('audio/bass/ds_bass.mp3');
  fs = new Audio('audio/bass/fs_bass.mp3');
  gs = new Audio('audio/bass/gs_bass.mp3');
  as = new Audio('audio/bass/as_bass.mp3');
});
btn_synthe.addEventListener('click',function(){
    //synthe
  c = new Audio('audio/synthe/Serum_C.wav');
  d = new Audio('audio/synthe/Serum_D.wav');
  e = new Audio('audio/synthe/Serum_E.wav');
  f = new Audio('audio/synthe/Serum_F.wav');
  g = new Audio('audio/synthe/Serum_G.wav');
  a = new Audio('audio/synthe/Serum_A.wav');
  b = new Audio('audio/synthe/Serum_B.wav');
  c8 = new Audio('audio/synthe/Serum_C8.wav');
  cs = new Audio('audio/synthe/Serum_Cs.wav');
  ds = new Audio('audio/synthe/Serum_Ds.wav');
  fs = new Audio('audio/synthe/Serum_Fs.wav');
  gs = new Audio('audio/synthe/Serum_Gs.wav');
  as = new Audio('audio/synthe/Serum_As.wav');
});
btn_synthebass.addEventListener('click',function(){
  //synthebass
  c = new Audio('audio/synthebass/BASS_C.wav');
  d = new Audio('audio/synthebass/BASS_D.wav');
  e = new Audio('audio/synthebass/BASS_E.wav');
  f = new Audio('audio/synthebass/BASS_F.wav');
  g = new Audio('audio/synthebass/BASS_G.wav');
  a = new Audio('audio/synthebass/BASS_A.wav');
  b = new Audio('audio/synthebass/BASS_B.wav');
  c8 = new Audio('audio/synthebass/BASS_C8.wav');
  cs = new Audio('audio/synthebass/BASS_Cs.wav');
  ds = new Audio('audio/synthebass/BASS_Ds.wav');
  fs = new Audio('audio/synthebass/BASS_Fs.wav');
  gs = new Audio('audio/synthebass/BASS_Gs.wav');
  as = new Audio('audio/synthebass/BASS_As.wav');

});
btn_chaos.addEventListener('click',function(){
  c = new Audio('audio/chaos/05 ARP_C.wav');
  d = new Audio('audio/chaos/05 ARP_D.wav');
  e = new Audio('audio/chaos/05 ARP_E.wav');
  f = new Audio('audio/chaos/05 ARP_F.wav');
  g = new Audio('audio/chaos/05 ARP_G.wav');
  a = new Audio('audio/chaos/05 ARP_A.wav');
  b = new Audio('audio/chaos/05 ARP_B.wav');
  c8 = new Audio('audio/chaos/05 ARP_C8.wav');
  cs = new Audio('audio/chaos/05 ARP_Cs.wav');
  ds = new Audio('audio/chaos/05 ARP_Ds.wav');
  fs = new Audio('audio/chaos/05 ARP_Fs.wav');
  gs = new Audio('audio/chaos/05 ARP_Gs.wav');
  as = new Audio('audio/chaos/05 ARP_As.wav');
});
btn_bell.addEventListener('click',function(){
   //bell
  c = new Audio('audio/bell/03 TRANCY BELL_C.wav');
  d = new Audio('audio/bell/03 TRANCY BELL_D.wav');
  e = new Audio('audio/bell/03 TRANCY BELL_E.wav');
  f = new Audio('audio/bell/03 TRANCY BELL_F.wav');
  g = new Audio('audio/bell/03 TRANCY BELL_G.wav');
  a = new Audio('audio/bell/03 TRANCY BELL_A.wav');
  b = new Audio('audio/bell/03 TRANCY BELL_B.wav');
  c8 = new Audio('audio/bell/03 TRANCY BELL_C8.wav');
  cs = new Audio('audio/bell/03 TRANCY BELL_Cs.wav');
  ds = new Audio('audio/bell/03 TRANCY BELL_Ds.wav');
  fs = new Audio('audio/bell/03 TRANCY BELL_Fs.wav');
  gs = new Audio('audio/bell/03 TRANCY BELL_Gs.wav');
  as = new Audio('audio/bell/03 TRANCY BELL_As.wav');
});
btn_drum.addEventListener('click',function(){
  //drum
  c = new Audio('audio/drum/Canopy - Kick 1.wav');
  d = new Audio('audio/drum/Canopy - Kick 3.wav');
  e = new Audio('audio/drum/Canopy - Kick 4.wav');
  f = new Audio('audio/drum/Canopy - Kick 5.wav');
  g = new Audio('audio/drum/Enzalla - Break CH 2.wav');
  a = new Audio('audio/drum/Enzalla - Break CH 3.wav');
  b = new Audio('audio/drum/Enzalla - Break CH 6.wav');
  c8 = new Audio('audio/drum/Enzalla - Break OH 2.wav');
  cs = new Audio('audio/drum/Enzalla - Break OH.wav');
  ds = new Audio('audio/drum/SockChicken - Snare ring.wav');
  fs = new Audio('audio/drum/Vikt0r-Kick8.wav');
  gs = new Audio('audio/drum/Vikt0r-Perc1.wav');
  as = new Audio('audio/drum/Vikt0r-Perc2.wav');
});
btn_mario.addEventListener('click',function(){
  c = new Audio('audio/mario/1up.wav');
  d = new Audio('audio/mario/coin.mp3');
  e = new Audio('audio/mario/fire.wav');
  f = new Audio('audio/mario/fumu.mp3');
  g = new Audio('audio/mario/jump.mp3');
  a = new Audio('audio/mario/koura.wav');
  b = new Audio('audio/mario/si.wav');
  c8 = new Audio('audio/mario/sinka.wav');
  cs = new Audio('audio/mario/syutsugenn.wav');
  ds = new Audio('audio/mario/time.mp3');
  fs = new Audio('audio/mario/tonnel.mp3');
  gs = new Audio('audio/mario/utsu.mp3');
  as = new Audio('audio/mario/coinblock.wav');
});
btn_animal.addEventListener('click',function(){
  c = new Audio('audio/animal/bora.mp3');
  d = new Audio('audio/animal/cat.mp3');
  e = new Audio('audio/animal/chicken-cry1.mp3');
  f = new Audio('audio/animal/cow.mp3');
  g = new Audio('audio/animal/crow.mp3');
  a = new Audio('audio/animal/dog.mp3');
  b = new Audio('audio/animal/goat.mp3');
  c8 = new Audio('audio/animal/heron.mp3');
  cs = new Audio('audio/animal/horornis.mp3');
  ds = new Audio('audio/animal/mow.mp3');
  fs = new Audio('audio/animal/piyo.mp3');
  gs = new Audio('audio/animal/sea-lion2.mp3');
  as = new Audio('audio/animal/sheep.mp3');
});
btn_dorakue.addEventListener('click',function(){
  c = new Audio('audio/dorakue/hatena.wav');
  d = new Audio('audio/dorakue/kaidan.wav');
  e = new Audio('audio/dorakue/kiru.wav');
  f = new Audio('audio/dorakue/kobusi.wav');
  g = new Audio('audio/dorakue/kossetsu.wav');
  a = new Audio('audio/dorakue/owari.mp3');
  b = new Audio('audio/dorakue/revel.wav');
  c8 = new Audio('audio/dorakue/sakuzyo.wav');
  cs = new Audio('audio/dorakue/yado.mp3');
  ds = new Audio('audio/dorakue/yasumu.mp3');
  fs = new Audio('audio/dorakue/yokeru.wav');
  gs = new Audio('audio/dorakue/zenmetsu.wav');
  as = new Audio('audio/dorakue/zyumon.wav');
});

var _c = document.getElementById("C");
var _d = document.getElementById("D");
var _e = document.getElementById("E");
var _f = document.getElementById("F");
var _g = document.getElementById("G");
var _a = document.getElementById("A");
var _b = document.getElementById("B");
var _c8 = document.getElementById("C8");

var _cs = document.getElementById("Cs");
var _ds = document.getElementById("Ds");
var _fs = document.getElementById("Fs");
var _gs = document.getElementById("Gs");
var _as = document.getElementById("As");

console.log(_c);



setInterval(function (){
  if(KeyIsDown(65)){
    _c.classList.add('pushed');
    meshC.position.set(1050,130,-1000);
    c.play();
  }else{
    _c.classList.remove('pushed');
    meshC.position.set(1050,100,-950)
    c.pause();
    c.currentTime = 0;
  }

  if(KeyIsDown(83)){
    _d.classList.add('pushed');
    meshD.position.set(750,130,-1000);
    d.play();
  }else{
    _d.classList.remove('pushed');
    meshD.position.set(750,100,-950);
    d.pause();
    d.currentTime = 0;
  }

  if(KeyIsDown(68)){
    _e.classList.add('pushed');
    meshE.position.set(450,130,-1000);
    e.play();
  }else{
    _e.classList.remove('pushed');
    meshE.position.set(450,100,-950);
    e.pause();
    e.currentTime = 0;
  }

  if(KeyIsDown(70)){
    _f.classList.add('pushed');
    meshF.position.set(150,130,-1000);
    f.play();
  }else{
    _f.classList.remove('pushed');
    meshF.position.set(150,100,-950);
    f.pause();
    f.currentTime = 0;
  }

  if(KeyIsDown(71)){
    _g.classList.add('pushed');
    meshG.position.set(-150,130,-1000);
    g.play();
  }else{
    _g.classList.remove('pushed');
    meshG.position.set(-150,100,-950);
    g.pause();
    g.currentTime = 0;
  }

  if(KeyIsDown(72)){
    _a.classList.add('pushed');
    meshA.position.set(-450,130,-1000);
    a.play();
  }else{
    _a.classList.remove('pushed');
    meshA.position.set(-450,100,-950);
    a.pause();
    a.currentTime = 0;

  }

  if(KeyIsDown(74)){
    _b.classList.add('pushed');
    meshB.position.set(-750,130,-1000);
    b.play();
  }else{
    _b.classList.remove('pushed');
    meshB.position.set(-750,100,-950);
    b.pause();
    b.currentTime = 0;

  }

  if(KeyIsDown(75)){
    _c8.classList.add('pushed');
    meshC8.position.set(-1050,130,-1000);
    c8.play();
  }else{
    _c8.classList.remove('pushed');
    meshC8.position.set(-1050,100,-950);
    c8.pause();
    c8.currentTime = 0;
  }

  if(KeyIsDown(87)){
    _cs.classList.add('pushed');
    meshCs.position.set(900,-70,-1050);
    cs.play();
  }else{
    _cs.classList.remove('pushed');
    meshCs.position.set(900,-100,-1000);
    cs.pause();
    cs.currentTime = 0;
  }

  if(KeyIsDown(69)){
    _ds.classList.add('pushed');
    meshDs.position.set(600,-70,-1050);
    ds.play();
  }else{
    _ds.classList.remove('pushed');
    meshDs.position.set(600,-100,-1000);
    ds.pause();
    ds.currentTime = 0;
  }

  if(KeyIsDown(84)){
    _fs.classList.add('pushed');
    meshFs.position.set(0,-70,-1050);
    fs.play();
  }else{
    _fs.classList.remove('pushed');
    meshFs.position.set(0,-100,-1000);
    fs.pause();
    fs.currentTime = 0;
  }

  if(KeyIsDown(89)){
    _gs.classList.add('pushed');
    meshGs.position.set(-300,-70,-1050);
    gs.play();
  }else{
    _gs.classList.remove('pushed');
    meshGs.position.set(-300,-100,-1000);
    gs.pause();
    gs.currentTime = 0;
  }

  if(KeyIsDown(85)){
    _as.classList.add('pushed');
    meshAs.position.set(-600,-70,-1050);
    as.play();
  }else{
    _as.classList.remove('pushed');
    meshAs.position.set(-600,-100,-1000);
    as.pause();
    as.currentTime = 0;
  }

  scene.add( meshC );
  scene.add( meshD );
  scene.add( meshE );
  scene.add( meshF );
  scene.add( meshG );
  scene.add( meshA );
  scene.add( meshB );
  scene.add( meshC8 );
  scene.add( meshCs );
  scene.add( meshDs );
  scene.add( meshFs );
  scene.add( meshGs);
  scene.add( meshAs );
  render();
},1000/60);
};
 
window.addEventListener( 'DOMContentLoaded', main, false );


