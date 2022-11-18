import './assets/styles/styles.scss';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Card } from './components/Card';


function App() {
  return (
    <div className='game-screen'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Card position={[-1.2, 0, 0]} />
        <Card position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
