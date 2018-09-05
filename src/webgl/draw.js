import * as Position from './position.js';
import * as Util from './utils.js';
import programInfo from './programInfo.js';
import gl from './gl.js';

function initBuffers() {
    return {
        position: Position.getBuffer(),
    }
}

export default function draw() {
    Util.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(programInfo.program);

    const buffer = initBuffers();
    Position.set(programInfo, buffer);

    // Draw objects here...
    
    for (let i = 0; i < 100; i++) {
        setRect(Util.randomInt(300, 50), Util.randomInt(300, 50), Util.randomInt(300, 50), Util.randomInt(300, 50));

        let pos = vec2(Util.randomInt(300, 150), Util.randomInt(300, 700)); 
        let v1 = vec2(Util.randomInt(300), Util.randomInt(300));
        let v2 = vec2(Util.randomInt(300), Util.randomInt(300));
        let v3 = vec2(Util.randomInt(300), Util.randomInt(300));
        setTriangle(pos, v1, v2, v3);

        let randomColor = [Math.random(), Math.random(), Math.random(), 1.0];
        gl.uniform4f(programInfo.uLocation.color, ...randomColor);
    }
}

function vec2(x, y) {
    return {x: x, y: y};
}

function setRect(x, y, w, h) {
    let x1 = x;
    let x2 = x + w;
    let y1 = y;
    let y2 = y + h;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        x1, y1,
        x2, y1,
        x1, y2,
        x1, y2,
        x2, y1,
        x2, y2,
    ]), gl.STATIC_DRAW);

    let offset = 0;
    let count = 6;
    gl.drawArrays(gl.TRIANGLES, offset, count);
}

function setTriangle(pos, v1, v2, v3) {
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        pos.x + v1.x, pos.y + v1.y,
        pos.x + v2.x, pos.y + v2.y,
        pos.x + v3.x, pos.y + v3.y,
    ]), gl.STATIC_DRAW);

    let offset = 0;
    let count = 3;
    gl.drawArrays(gl.TRIANGLES, offset, count);
}
