
import { Text } from '@react-three/drei';

interface Simple3DTextProps {
  children: string;
  position?: [number, number, number];
  size?: number;
  color?: string;
  emissive?: string;
  emissiveIntensity?: number;
}

const Simple3DText = ({ 
  children, 
  position = [0, 0, 0], 
  size = 0.8,
  color = "#36CFC9",
  emissive = "#36CFC9",
  emissiveIntensity = 0.3
}: Simple3DTextProps) => {
  return (
    <Text
      position={position}
      fontSize={size}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {children}
      <meshStandardMaterial 
        color={color} 
        emissive={emissive} 
        emissiveIntensity={emissiveIntensity}
      />
    </Text>
  );
};

export default Simple3DText;
