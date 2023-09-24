import styles from './Globe.module.scss';
import './script';

export default function Globe() {
  return (
<div>
  <div className={styles.page}>
    <div className={styles.title}>click to add a pointer</div>
    <div className={styles.globe-wrapper}>
      <canvas id="globe-3d"></canvas>
      <canvas id="globe-2d-overlay"></canvas>
      <div id="globe-popup-overlay">
        <div className={styles.globe-popup}></div>
      </div>
    </div>
  </div>
  
  <script type="x-shader/x-fragment" id="fragment-shader-map">
    uniform sampler2D u_map_tex;
  
    varying float vOpacity;
    varying vec2 vUv;
  
    void main() {
        vec3 color = texture2D(u_map_tex, vUv).rgb;
        color -= .2 * length(gl_PointCoord.xy - vec2(.5));
        float dot = 1. - smoothstep(.38, .4, length(gl_PointCoord.xy - vec2(.5)));
        if (dot < 0.5) discard;
        gl_FragColor = vec4(color, dot * vOpacity);
    }
  </script>
  
  <script type="x-shader/x-vertex" id="vertex-shader-map">
    uniform sampler2D u_map_tex;
    uniform float u_dot_size;
    uniform float u_time_since_click;
    uniform vec3 u_pointer;
  
    #define PI 3.14159265359
  
    varying float vOpacity;
    varying vec2 vUv;
  
    void main() {
  
        vUv = uv;
  
        // mask with world map
        float visibility = step(.2, texture2D(u_map_tex, uv).r);
        gl_PointSize = visibility * u_dot_size;
  
        // make back dots semi-transparent
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vOpacity = (1. / length(mvPosition.xyz) - .7);
        vOpacity = clamp(vOpacity, .03, 1.);
  
        // add ripple
        float t = u_time_since_click - .1;
        t = max(0., t);
        float max_amp = .15;
        float dist = 1. - .5 * length(position - u_pointer); // 0 .. 1
        float damping = 1. / (1. + 20. * t); // 1 .. 0
        float delta = max_amp * damping * sin(5. * t * (1. + 2. * dist) - PI);
        delta *= 1. - smoothstep(.8, 1., dist);
        vec3 pos = position;
        pos *= (1. + delta);
  
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
    }
  </script>
</div>
  );
}