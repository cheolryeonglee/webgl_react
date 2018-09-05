import loadProgram from './shader.js';
import vert from './vert.js';
import frag from './frag.js';
import gl from './gl.js';

const shaderProgram = loadProgram(vert, frag);

const programInfo = {
    program: shaderProgram,
    aLocation: {
        vPosition: gl.getAttribLocation(shaderProgram, 'vPosition'),
    },
    uLocation: {
        resolution: gl.getUniformLocation(shaderProgram, 'uResolution'),
        color: gl.getUniformLocation(shaderProgram, 'uColor'),
    },
}

export default programInfo;