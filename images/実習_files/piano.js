var main = function () {
  var scene = new THREE.Scene();

  //カメラゾーン
 
  var width  = window.innerWidth*0.7;
  var height = window.innerHeight*0.7;
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


  var meshC = new THREE.Mesh( new THREE.CubeGeometry( 270, 1800, 170, 1000), material);
  meshC.position.set(1050,100,-950);
  meshC.rotation.x=180;
  scene.add( meshC );

  var meshD = new THREE.Mesh( new THREE.CubeGeometry( 270, 1800, 170, 1000), material);
  meshD.position.set(750,100,-950);
  meshD.rotation.x=180;
  scene.add( meshD );

  var meshE = new THREE.Mesh( new THREE.CubeGeometry( 270, 1800, 170, 1000) ,material);
  meshE.position.set(450,100,-950);
  meshE.rotation.x=180;
  scene.add( meshE );

  var meshF = new THREE.Mesh( new THREE.CubeGeometry( 270, 1800, 170, 1000) ,material);
  meshF.position.set(150,100,-950);
  meshF.rotation.x=180;
  scene.add( meshF );

  var meshG = new THREE.Mesh( new THREE.CubeGeometry( 270, 1800, 170, 1000) ,material);
  meshG.position.set(-150,100,-950);
  meshG.rotation.x=180;
  scene.add( meshG );

  var meshA = new THREE.Mesh( new THREE.CubeGeometry( 270, 1800, 170, 1000) ,material);
  meshA.position.set(-450,100,-950);
  meshA.rotation.x=180;
  scene.add( meshA );

  var meshB = new THREE.Mesh( new THREE.CubeGeometry( 270, 1800, 170, 1000), material);
  meshB.position.set(-750,100,-950);
  meshB.rotation.x=180;
  scene.add( meshB );

  var meshC8 = new THREE.Mesh( new THREE.CubeGeometry( 270, 1800, 170, 1000), material);
  meshC8.position.set(-1050,100,-950);
  meshC8.rotation.x=180;
  scene.add( meshC8 );

  

  var mesh1 = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000), material1);
  mesh1.position.set(900,-150,-1000);
  mesh1.rotation.x=180;
  scene.add( mesh1 );

  var mesh2 = new THREE.Mesh( new THREE.CubeGeometry( 190, 1200, 170, 1000), material1);
  mesh2.position.set(600,-250,-1200);
  mesh2.rotation.x=180;
  scene.add( mesh2);

  var mesh3 = new THREE.Mesh( new THREE.CubeGeometry( 190, 1000, 170, 1000) ,material1);
  mesh3.position.set(0,-250,-1200);
  mesh3.rotation.x=180;
  scene.add( mesh3 );

  var mesh4 = new THREE.Mesh( new THREE.CubeGeometry( 190, 1000, 170, 1000) ,material1);
  mesh4.position.set(-300,-250,-1200);
  mesh4.rotation.x=180;
  scene.add( mesh4 );

  var mesh5 = new THREE.Mesh( new THREE.CubeGeometry( 190, 1000, 170, 1000), material1);
  mesh5.position.set(-600,-250,-1200);
  mesh5.rotation.x=180;
  scene.add( mesh5 );


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
  
  var _c = document.getElementById("C");
  var _d = document.getElementById("D");
  var _e = document.getElementById("E");
  var _f = document.getElementById("F");
  var _g = document.getElementById("G");
  var _a = document.getElementById("A");
  var _b = document.getElementById("B");
  var _c8 = document.getElementById("C8");

  var _c2 = document.getElementById("Cs");
  var _d2 = document.getElementById("Ds");
  var _f2 = document.getElementById("Fs");
  var _g2 = document.getElementById("Gs");
  var _a2 = document.getElementById("As");

setInterval(function (){

  if(KeyIsDown(65) || click(_c)){
     _c.classList.add('pushed');
  }else{
    _c.classList.remove('pushed');
  }

  if(KeyIsDown(83)){
    _d.classList.add('pushed');
  }else{
    _d.classList.remove('pushed');
  }

  if(KeyIsDown(68)){
   _e.classList.add('pushed');
  }else{
    _e.classList.remove('pushed');
  }

  if(KeyIsDown(70)){
    _f.classList.add('pushed');
  }else{
    _f.classList.remove('pushed');
  }

  if(KeyIsDown(74)){
    _g.classList.add('pushed');
  }else{
    _g.classList.remove('pushed');
  }

  if(KeyIsDown(75)){
    _a.classList.add('pushed');
  }else{
    _a.classList.remove('pushed');
  }

  if(KeyIsDown(76)){
    _b.classList.add('pushed');
  }else{
    _b.classList.remove('pushed');
  }

  if(KeyIsDown(186)){
    _c8.classList.add('pushed');
  }else{
    _c8.classList.remove('pushed');
  }

  if(KeyIsDown(87)){
    _c2.classList.add('pushed');
  }else{
    _c2.classList.remove('pushed');
  }

  if(KeyIsDown(69)){
    _d2.classList.add('pushed');
  }else{
    _d2.classList.remove('pushed');
  }

  if(KeyIsDown(84)){
    _f2.classList.add('pushed');
  }else{
    _f2.classList.remove('pushed');
  }

  if(KeyIsDown(73)){
    _g2.classList.add('pushed');
  }else{
    _g2.classList.remove('pushed');
  }

  if(KeyIsDown(79)){
    _a2.classList.add('pushed');
  }else{
    _a2.classList.remove('pushed');
  }
},1000/60);



// DOM操作
function click(x){
    x.addEventListener('mousedown', function(){
      return true;
  });
}


  ( function() {
    renderer.render( scene, camera );
  } )();



};
 
window.addEventListener( 'DOMContentLoaded', main, false );


