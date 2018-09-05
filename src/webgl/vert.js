const vert = `
    attribute vec2 vPosition;

    uniform vec2 uResolution;

    void main() {
        vec2 clipSpace = ((vPosition / uResolution) * 2.0) - 1.0;
        gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    }
`;

export default vert;