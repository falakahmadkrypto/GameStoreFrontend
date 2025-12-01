import { Gamepad2, Zap, Monitor, Building2, Wrench, Wind, MessageCircle, Target } from 'lucide-react';
import type { Platform } from '../types';

export const platforms: Platform[] = [
  { name: 'Roblox', icon: Gamepad2 },
  { name: 'Pokémon', icon: Zap },
  { name: 'Windows', icon: Monitor },
  { name: 'Fortnite', icon: Building2 },
  { name: 'Minecraft', icon: Wrench },
  { name: 'Steam', icon: Wind },
  { name: 'Discord', icon: MessageCircle },
  { name: 'Xbox', icon: Target },
];

