import { useEffect } from "react";
import * as VFX from "react-vfx";
import * as THREE from "three";
import Image from "next/image";

export default function AnimatedBackground(props) {
  const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

  const fragmentShader = `
  uniform vec2 iResolution;
  uniform float iGlobalTime;
  
  // Some utils first

  // From Stackoveflow
  // http://stackoverflow.com/questions/15095909/from-rgb-to-hsv-in-opengl-glsl
  vec3 hsv2rgb(vec3 c)
  {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  // Simplex 2D noise
  // from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                          -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                       + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                              dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
  }

  // This is my code
  void main(void)
  {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float xnoise = snoise(vec2(uv.x, iGlobalTime / 5.0 + 10000.0));
    float ynoise = snoise(vec2(uv.y, iGlobalTime / 5.0 + 500.0));
    vec2 t = vec2(xnoise, ynoise);
    float s1 = snoise(uv + t / 2.0 + snoise(uv + snoise(uv + t/3.0) / 5.0));
    float s2 = snoise(uv + snoise(uv + s1) / 7.0);
    vec3 hsv = vec3(1.80, 0.25, 1.2-s2);
    vec3 rgb = hsv2rgb(hsv);
    gl_FragColor = vec4(rgb, 1.0);
  }
`;

  useEffect(() => {
    // === THREE.JS CODE START ===

    var container;
    var camera, scene, renderer;
    var uniforms;
    var startTime;

    init();
    animate();

    function init() {
      container = document.getElementById("container");

      startTime = Date.now();
      camera = new THREE.Camera();
      camera.position.z = 1;

      scene = new THREE.Scene();

      var geometry = new THREE.PlaneBufferGeometry(16, 9);

      uniforms = {
        iGlobalTime: { type: "f", value: 1.0 },
        iResolution: { type: "v2", value: new THREE.Vector2() },
      };

      var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      var mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer();
      container.appendChild(renderer.domElement);

      onWindowResize();

      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize(event) {
      uniforms.iResolution.value.x = window.innerWidth;
      uniforms.iResolution.value.y = window.innerHeight;

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      var currentTime = Date.now();
      uniforms.iGlobalTime.value = (currentTime - startTime) * 0.001;
      renderer.render(scene, camera);
    }

    // === THREE.JS EXAMPLE CODE END ===
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          overflow: "hidden",
          left: 0,
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <img
          src="/img/sobremim-background.jpg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.05,
            width: "100%",
            height: "100%",
          }}
        />
        <div
          id="container"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.15,
            backgroundBlendMode: "multiply",
          }}
        ></div>
      </div>
    </>
  );
}
