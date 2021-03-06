// =============================================================================
// Atom Component
// (c) Mathigon
// =============================================================================



import {random} from '@mathigon/fermat';
import {registerElement} from '@mathigon/boost';
import {Solid} from '../../shared/components/solid';


const RED = 0xcd0e66;
const BLUE = 0x0f82f2;

function distribute(number, radius = 1) {
  const points = [];
  const offset = 2/number;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < number; ++i) {
    const y = ((i * offset) - 1) + (offset / 2);
    const r = Math.sqrt(1 - y * y) * radius;
    const phi = ((i) % number) * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push([x,y,z])
  }

  return points;
}

function addSpheres(points, color, atom, THREE) {
  const material = new THREE.MeshPhongMaterial({specular: 0x222222, color});
  const geometry = new THREE.SphereGeometry(0.7, 64, 64);

  for (const p of points) {
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(...p);
    atom.add(sphere);
  }
}


export class Atom extends Solid {
  created() {
    this.addMesh((scene, THREE) => {
      const atom = new THREE.Object3D();

      const protons = +this.attr('protons');
      const neutrons = +this.attr('neutrons');
      const points = random.shuffle(distribute(protons + neutrons));

      addSpheres(points.slice(0, protons), BLUE, atom, THREE);
      addSpheres(points.slice(protons), RED, atom, THREE);

      return [atom];
    });
  }
}

registerElement('x-atom', Atom);
