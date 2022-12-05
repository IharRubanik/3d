let scene, camera, render;
var mouseX = 0,
  mouseY = 0;

  let body = document.querySelector('body')

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function init() {
  const canvas = document.querySelector("#c");
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e2f4c);

  camera = new THREE.PerspectiveCamera(
    40, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  camera.rotation.y = 8800;
  camera.rotation.x = 800;
  // camera.rotation.y = (15 / 180) * Math.PI;
  // camera.rotation.x = (-100 / 180) * Math.PI;
  camera.position.x = -600;
  camera.position.y = 150;
  camera.position.z = 0;
  scene.position.x = -140;
  scene.position.y = 150;
  scene.position.z = 170;

  

  hlight = new THREE.AmbientLight(0x404040, 2);
  scene.add(hlight);

  directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  light = new THREE.PointLight(0xc4c4cc4, 1);
  light.position.set(0, 300, 500);
  scene.add(light);

  light2 = new THREE.PointLight(0xc4c4cc4, 1);
  light.position.set(500, 100, 0);
  scene.add(light2);

  light3 = new THREE.PointLight(0xc4c4cc4, 1);
  light.position.set(0, 100, -500);
  scene.add(light3);

  light4 = new THREE.PointLight(0xc4c4cc4, 1);
  light.position.set(-5000, 300, 0);
  scene.add(light4);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  //controls = new THREE.OrbitControls(camera, renderer.domElement);
  // document.addEventListener("mousemove", onDocumentMouseMove, false);
  // document.addEventListener("touchstart", onDocumentTouchStart, false);
  // document.addEventListener("touchmove", onDocumentTouchMove, false);

  window.addEventListener("resize", onWindowResize, false);

  let loader = new THREE.GLTFLoader();
  loader.load("./model/scene.gltf",
    function (gltf) {
      car = gltf.scene.children[0];
      car.scale.set(64.5, 64.5, 64.5);
      scene.add(gltf.scene);
      animate();
    }
  );
}

//=======================добавил===========================
function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

//

// function onDocumentMouseMove(event) {
//   mouseX = event.clientX - windowHalfX;
//   mouseY = event.clientY - windowHalfY;
// }

// function onDocumentTouchStart(event) {
//   if (event.touches.length === 1) {
//     event.preventDefault();

//     mouseX = event.touches[0].pageX - windowHalfX;
//     mouseY = event.touches[0].pageY - windowHalfY;
//   }
// }

// function onDocumentTouchMove(event) {
//   if (event.touches.length === 1) {
//     event.preventDefault();

//     mouseX = event.touches[0].pageX - windowHalfX;
//     mouseY = event.touches[0].pageY - windowHalfY;
//   }
// }

function animate() {
 

    window.onscroll = function (e) {
      camera.position.x = ((window.scrollY) * 5 / 100) - 600;
      camera.position.y = ((window.scrollY) * 5 / 100) + 150;
      camera.position.z = ((window.scrollY) * 25 / 100);
      scene.position.x =  ((window.scrollY) * 10 / -100) - 140;
      scene.position.z = ((window.scrollY) * 5 / -100) + 170;
    console.log((window.scrollY) * 0.5 / 100)
    };

  camera.lookAt(70, 70, 1);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();
