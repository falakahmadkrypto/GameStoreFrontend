import type { ComponentType } from 'react';

export type Product = {
  id: number;
  title: string;
  price: number;
  discount?: number;
  image: string;
  platform?: string;
  type?: 'key' | 'account' | 'subscription';
  rating?: number;
};

export type Category = {
  name: string;
  color: string;
  icon: ComponentType<{ className?: string }>;
};

export type Platform = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};
