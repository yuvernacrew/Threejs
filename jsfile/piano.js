var main = function () {
  var scene = new THREE.Scene();

  //カメラゾーン
 
  var width  = 880;
  var height = 480;
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

  var material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
  var material1 = new THREE.MeshLambertMaterial( { color: 0x696969 } );
  var mesh =  new THREE.CubeGeometry( 270, 1800, 170, 1000);
  var mesh1 = new THREE.CubeGeometry( 190, 1200, 170, 1000);


  var meshC = new THREE.Mesh( mesh ,material);
  meshC.rotation.x=180;
  
  var meshD = new THREE.Mesh( mesh ,material);
  meshD.rotation.x=180;

  var meshE = new THREE.Mesh( mesh ,material);
  meshE.rotation.x=180;

  var meshF = new THREE.Mesh( mesh, material);
  meshF.rotation.x=180;

  var meshG = new THREE.Mesh( mesh, material);
  meshG.rotation.x=180;

  var meshA = new THREE.Mesh( mesh, material);
  meshA.rotation.x=180;

  var meshB = new THREE.Mesh( mesh, material);
  meshB.rotation.x=180;

  var meshC8 = new THREE.Mesh( mesh, material);
  meshC8.rotation.x=180;

  

  var meshCs = new THREE.Mesh( mesh1, material1);
  meshCs.rotation.x=180;
  scene.add( meshCs );

  var meshDs = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000), material1);
  meshDs.position.set(600,-100,-1000);
  meshDs.rotation.x=180;
  scene.add( meshDs);

  var meshFs = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000) ,material1);
  meshFs.position.set(0,-100,-1000);
  meshFs.rotation.x=180;
  scene.add( meshFs );

  var meshGs = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000) ,material1);
  meshGs.position.set(-300,-100,-1000);
  meshGs.rotation.x=180;
  scene.add( meshGs );

  var meshAs = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000), material1);
  meshAs.position.set(-600,-100,-1000);
  meshAs.rotation.x=180;
  scene.add( meshAs );

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


//piano
  var c_piano = new Audio('audio/piano/C.mp3');
  var d_piano = new Audio('audio/piano/D.mp3');
  var e_piano = new Audio('audio/piano/E.mp3');
  var f_piano = new Audio('audio/piano/F.mp3');
  var g_piano = new Audio('audio/piano/G.mp3');
  var a_piano = new Audio('audio/piano/A.mp3');
  var b_piano = new Audio('audio/piano/B.mp3');
  var c8_piano = new Audio('audio/piano/C8.mp3');
  var cs_piano = new Audio('audio/piano/Cs.mp3');
  var ds_piano = new Audio('audio/piano/Ds.mp3');
  var fs_piano = new Audio('audio/piano/Fs.mp3');
  var gs_piano = new Audio('audio/piano/Gs.mp3');
  var as_piano = new Audio('audio/piano/As.mp3');

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



setInterval(function (){

  if(KeyIsDown(65)){
    _c.classList.add('pushed');
    meshC.position.set(1050,130,-1000);
    scene.add( meshC );
    render();
    c_piano.play();
    
  }else{
    _c.classList.remove('pushed');
    meshC.position.set(1050,100,-950);
    scene.add( meshC );
    render();
    c_piano.pause();
    c_piano.currentTime = 0;
  }

  if(KeyIsDown(83)){
    _d.classList.add('pushed');
    meshD.position.set(750,130,-1000);
    scene.add( meshD );
    render();
    d_piano.play();
  }else{
    _d.classList.remove('pushed');
    meshD.position.set(750,100,-950);
    scene.add( meshD );
    render();
    d_piano.pause();
    d_piano.currentTime = 0;
  }

  if(KeyIsDown(68)){
    _e.classList.add('pushed');
    meshE.position.set(450,130,-1000);
    scene.add( meshE );
    render();
    e_piano.play();
  }else{
    _e.classList.remove('pushed');
    meshE.position.set(450,100,-950);
    scene.add( meshE );
    render();
    e_piano.pause();
    e_piano.currentTime = 0;
  }

  if(KeyIsDown(70)){
    _f.classList.add('pushed');
    meshF.position.set(150,130,-1000);
    scene.add( meshF );
    render();
    f_piano.play();
  }else{
    _f.classList.remove('pushed');
    meshF.position.set(150,100,-950);
    scene.add( meshF);
    render();
    f_piano.pause();
    f_piano.currentTime = 0;
  }

  if(KeyIsDown(71)){
    _g.classList.add('pushed');
    meshG.position.set(-150,130,-1000);
    scene.add( meshG );
    render();
    g_piano.play();

  }else{
    _g.classList.remove('pushed');
    meshG.position.set(-150,100,-950);
    scene.add( meshG);
    render();
    g_piano.pause();
    g_piano.currentTime = 0;
  }

  if(KeyIsDown(72)){
    _a.classList.add('pushed');
    meshA.position.set(-450,130,-1000);
    scene.add( meshA );
    render();
    a_piano.play();

  }else{
    _a.classList.remove('pushed');
    meshA.position.set(-450,100,-950);
    scene.add( meshA);
    render();
    a_piano.pause();
    a_piano.currentTime = 0;

  }

  if(KeyIsDown(74)){
    _b.classList.add('pushed');
    meshB.position.set(-750,130,-1000);
    scene.add( meshB );
    render();
    b_piano.play();


  }else{
    _b.classList.remove('pushed');
    meshB.position.set(-750,100,-950);
    scene.add( meshB);
    render();
    b_piano.pause();
    b_piano.currentTime = 0;

  }

  if(KeyIsDown(75)){
    _c8.classList.add('pushed');
    meshC8.position.set(-1050,130,-1000);
    scene.add( meshC8 );
    render();
    c8_piano.play();

  }else{
    _c8.classList.remove('pushed');
    meshC8.position.set(-1050,100,-950);
    scene.add( meshC8);
    render();
    c8_piano.pause();
    c8_piano.currentTime = 0;
  }





  if(KeyIsDown(87)){
    _cs.classList.add('pushed');
    meshCs.position.set(900,-70,-1050);
    scene.add( meshCs);
    render();

  }else{
    _cs.classList.remove('pushed');
    meshCs.position.set(900,-100,-1000);
    scene.add( meshCs);
    render();
  }

  if(KeyIsDown(69)){
    _ds.classList.add('pushed');
    meshDs.position.set(600,-70,-1050);
    scene.add( meshDs);
    render();
  }else{
    _ds.classList.remove('pushed');
    meshDs.position.set(600,-100,-1000);
    scene.add( meshDs);
    render();
  }

  if(KeyIsDown(84)){
    _fs.classList.add('pushed');
    meshFs.position.set(0,-70,-1050);
    scene.add( meshFs);
    render();
  }else{
    _fs.classList.remove('pushed');
    meshFs.position.set(0,-100,-1000);
    scene.add( meshFs);
    render();
  }

  if(KeyIsDown(89)){
    _gs.classList.add('pushed');
    meshGs.position.set(-300,-70,-1050);
    scene.add( meshGs);
    render();
  }else{
    _gs.classList.remove('pushed');
    meshGs.position.set(-300,-100,-1000);
    scene.add( meshGs);
    render();
  }

  if(KeyIsDown(85)){
    _as.classList.add('pushed');
    meshAs.position.set(-600,-70,-1050);
    scene.add( meshAs);
    render();

  }else{
    _as.classList.remove('pushed');
    meshAs.position.set(-600,-100,-1000);
    scene.add( meshAs);
    render();
  }
},1000/30);



//オーディオ 


  // if(KeyIsDown(83)){

  // }else{

  // }

  // if(KeyIsDown(68)){


  // }else{

  // }

  // if(KeyIsDown(70)){

  // }else{

  // }

  // if(KeyIsDown(71)){

  // }else{

  // }

  // if(KeyIsDown(72)){


  // }else{

  // }

  // if(KeyIsDown(74)){


  // }else{

  // }

  // if(KeyIsDown(75)){


  // }else{

  // }





  // if(KeyIsDown(87)){


  // }else{

  // }

  // if(KeyIsDown(69)){

  // }else{

  // }

  // if(KeyIsDown(84)){

  // }else{

  // }

  // if(KeyIsDown(89)){


  // }else{

  // }

  // if(KeyIsDown(85)){

  // }else{

// }








};
 
window.addEventListener( 'DOMContentLoaded', main, false );


