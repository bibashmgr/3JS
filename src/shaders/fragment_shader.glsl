varying vec2 vUv;
varying float vWave;
uniform sampler2D uTexture;

void main() {
    float wave = vWave * 0.2;

    vec3 texture = texture2D(uTexture, vUv + wave).rgb;

    // float r = texture2D(uTexture, vUv).r;
    // float g = texture2D(uTexture, vUv).g;
    // float b = texture2D(uTexture, vUv).b;
    // vec3 texture = vec3(r, g, b);

    gl_FragColor = vec4(texture, 1.0);
}
