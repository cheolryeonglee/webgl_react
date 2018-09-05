import gl from './gl.js';

function loadShader(type, src) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader); 
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(`Cannnot load a shader ${gl.getShaderInfoLog(shader)}`);
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function loadProgram(vert, frag) {
    const vsrc = loadShader(gl.VERTEX_SHADER, vert);
    const fsrc = loadShader(gl.FRAGMENT_SHADER, frag);

    let program  = gl.createProgram();
    gl.attachShader(program, vsrc);
    gl.attachShader(program, fsrc);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        alert(`Cannot load a program ${gl.getProgramInfoLog(program)}`);
        gl.deleteProgram(program);
        return null;
    }
    return program;
}

export default loadProgram;