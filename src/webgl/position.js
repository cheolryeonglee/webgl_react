import gl from './gl.js';

function getBuffer() {
    const positions = [
        0, 0,
        0, 0.5,
        0.7, 0,
    ];
    let buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    return buffer;
}

function set(programInfo, buffers) {
    const size = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(programInfo.aLocation.vPosition, size, type, normalize, stride, offset);
    gl.uniform2f(programInfo.uLocation.resolution, gl.canvas.width, gl.canvas.height);
    gl.enableVertexAttribArray(programInfo.aLocation.vPosition);
}

export { getBuffer, set };