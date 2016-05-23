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


  //メッシュ

  // var ballC = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  // ballC.position.set(1050,110,-550);
  // scene.add(ballC);

  // var ballD = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  // ballD.position.set(750,110,-550);
  // scene.add(ballD);


  // var ballE = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  // ballE.position.set(450,110,-550);
  // scene.add(ballE);


  // var ballF = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  // ballF.position.set(150,110,-550);
  // scene.add(ballF);


  // var ballG = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  // ballG.position.set(-150,110,-550);
  // scene.add(ballG);


  // var ballA = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  // ballA.position.set(-450,110,-550);
  // scene.add(ballA);


  // var ballB = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  // ballB.position.set(-750,110,-550);
  // scene.add(ballB);


  // var ballC8 = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  // ballC8.position.set(-1050,110,-550);
  // scene.add(ballC8);




  var meshC = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 1400, 1000, 0, false ), material);
  meshC.position.set(1050,100,-950);
  meshC.scale.set(1.3,1,1);
  meshC.rotation.x=180;
  scene.add( meshC );

  var meshD = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 1400, 1000, 0, false ), material);
  meshD.position.set(750,100,-950);
  meshD.scale.set(1.3,1,1);
  meshD.rotation.x=180;
  scene.add( meshD );

  var meshE = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 1400, 1000, 0, false ), material);
  meshE.position.set(450,100,-950);
  meshE.scale.set(1.3,1,1);
  meshE.rotation.x=180;
  scene.add( meshE );

  var meshF = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 1400, 1000, 0, false ), material);
  meshF.position.set(150,100,-950);
  meshF.scale.set(1.3,1,1);
  meshF.rotation.x=180;
  scene.add( meshF );

  var meshG = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 1400, 1000, 0, false ), material);
  meshG.position.set(-150,100,-950);
  meshG.scale.set(1.3,1,1);
  meshG.rotation.x=180;
  scene.add( meshG );

  var meshA = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 1400, 1000, 0, false ), material);
  meshA.position.set(-450,100,-950);
  meshA.scale.set(1.3,1,1);
  meshA.rotation.x=180;
  scene.add( meshA );

  var meshB = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 1400, 1000, 0, false ), material);
  meshB.position.set(-750,100,-950);
  meshB.scale.set(1.3,1,1);
  meshB.rotation.x=180;
  scene.add( meshB );

  var meshC8 = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 1400, 1000, 0, false ), material);
  meshC8.position.set(-1050,100,-950);
  meshC8.scale.set(1.3,1,1);
  meshC8.rotation.x=180;
  scene.add( meshC8 );

  

  var mesh1 = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 800, 1000, 0, false ), material1);
  mesh1.position.set(900,-250,-1200);
  mesh1.scale.set(1.2,1,1);
  mesh1.rotation.x=180;
  scene.add( mesh1 );

  var mesh2 = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 800, 1000, 0, false ), material1);
  mesh2.position.set(600,-250,-1200);
  mesh2.scale.set(1.2,1,1);
  mesh2.rotation.x=180;
  scene.add( mesh2);

  var mesh3 = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 800, 1000, 0, false ), material1);
  mesh3.position.set(0,-250,-1200);
  mesh3.scale.set(1.2,1,1);
  mesh3.rotation.x=180;
  scene.add( mesh3 );

  var mesh4 = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 800, 1000, 0, false ), material1);
  mesh4.position.set(-300,-250,-1200);
  mesh4.scale.set(1.2,1,1);
  mesh4.rotation.x=180;
  scene.add( mesh4 );

  var mesh5 = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 800, 1000, 0, false ), material1);
  mesh5.position.set(-600,-250,-1200);
  mesh5.scale.set(1.2,1,1);
  mesh5.rotation.x=180;
  scene.add( mesh5 );


  //レンダラー

  ( function() {
    renderer.render( scene, camera );
  } )();



};
 
window.addEventListener( 'DOMContentLoaded', main, false );


  

  //id取得

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
  return false;
}

setInterval(function (){

  if(KeyIsDown(65)){
    console.log("ど");
  }else if(KeyIsDown(83)){
    console.log("れ");
  }else if(KeyIsDown(68)){
    console.log("み");
  }else if(KeyIsDown(70)){
    console.log("ふぁ");
  }else if(KeyIsDown(74)){
    console.log("そ");
  }else if(KeyIsDown(75)){
    console.log("ら");
  }else if(KeyIsDown(76)){
    console.log("し");
  }else if(KeyIsDown(186)){
    console.log("ど8");
  }else if(KeyIsDown(87)){
    console.log("ど＃");
  }else if(KeyIsDown(69)){
    console.log("れ＃");
  }else if(KeyIsDown(84)){
    console.log("ふぁ＃");
  }else if(KeyIsDown(73)){
    console.log("そ＃");
  }else if(KeyIsDown(79)){
    console.log("ら＃");
  }
},100000);