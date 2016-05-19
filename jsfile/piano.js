var main = function () {
  var scene = new THREE.Scene();

  //カメラゾーン
 
  var width  = window.innerWidth*0.8;
  var height = window.innerHeight*0.8;
  var fov    =　5000;
  var aspect = width / height;
  var near   = 1;
  var far    = 6000;
  var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
  camera.position.set( 0, 500, 2000 );
  camera.rotation.set( -0.3,0,0);
 
  //レンダラーゾーン

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.body.appendChild( renderer.domElement );


  //ライトゾーン
 
  var directionalLight = new THREE.DirectionalLight( 0xfaebd7 ,0.5);
  directionalLight.position.set( 0.577, -0.577, 0.577);
  scene.add( directionalLight );

  var directionalLight = new THREE.DirectionalLight( 0xfaebd7 ,0.5);
  directionalLight.position.set( -0.577, -0.577, 0.577);
  scene.add( directionalLight );


  var ambient = new THREE.AmbientLight(0x333333);
  scene.add(ambient);

  // var directionalLight2 = new THREE.DirectionalLight( 0xffff00 ,3);
  // directionalLight.position.set( 0, -1, 0.7 );
  // scene.add( directionalLight2 );


  //メッシュゾーン
 
  // for(var i=0,i<=8,i++){

  // var geometry = new THREE.SphereGeometry( 50 ,100 ,100 ,300);

  // var texture = THREE.ImageUtils.loadTexture( 'images/flower-back0087.png' );
  // texture.anisotropy = renderer.getMaxAnisotropy();
  // var material = new THREE.MeshPhongMaterial( { color: 0xffffff,specular: 0xcccccc, shininess:0.3 , /*map:texture*/} );

  // mesh.position.y = i*100;
  // var mesh = new THREE.Mesh( geometry, material);
  // scene.add( mesh );
// }

  var texture = THREE.ImageUtils.loadTexture( 'images/mokume.jpg' );
  texture.anisotropy = renderer.getMaxAnisotropy();

  var material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
  var material1 = new THREE.MeshLambertMaterial( { color: 0x696969 } );

  var ballC = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  ballC.position.set(1050,-600,0);
  scene.add(ballC);

  var ballD = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  ballD.position.set(750,-600,0);
  scene.add(ballD);


  var ballE = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  ballE.position.set(450,-600,0);
  scene.add(ballE);


  var ballF = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  ballF.position.set(150,-600,0);
  scene.add(ballF);


  var ballG = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  ballG.position.set(-150,-600,0);
  scene.add(ballG);


  var ballA = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  ballA.position.set(-450,-600,0);
  scene.add(ballA);


  var ballB = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  ballB.position.set(-750,-600,0);
  scene.add(ballB);


  var ballC8 = new THREE.Mesh( new THREE.SphereGeometry( 80 ,100 ,100 ,300),material);
  ballC8.position.set(-1050,-600,0);
  scene.add(ballC8);




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