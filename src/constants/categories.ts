import { Code, Crosshair, Sword, Mountain, Headphones, Gamepad2 } from 'lucide-react';
import type { Category } from '../types';

export const categories: Category[] = [
  { name: 'SOFTWARE', color: 'from-blue-500 to-cyan-500', icon: Code },
  { name: 'FPS', color: 'from-red-500 to-pink-500', icon: Crosshair },
  { name: 'ACTION', color: 'from-purple-500 to-indigo-500', icon: Sword },
  { name: 'ADVENTURE', color: 'from-green-500 to-emerald-500', icon: Mountain },
  { name: 'VR GAMES', color: 'from-orange-500 to-red-500', icon: Headphones },
  { name: 'RPG', color: 'from-yellow-500 to-orange-500', icon: Gamepad2 },
];

