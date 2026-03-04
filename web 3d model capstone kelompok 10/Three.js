loader.load(
  'https://drive.google.com/uc?export=download&id=1ABCxyz123',
  function(gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function(err) { console.error(err) }
);
