const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const gl = canvas.getContext('webgl');

if (!gl) {
    alert('Your browser does not support WebGL');
}

export default gl;