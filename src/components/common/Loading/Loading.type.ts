import { CSSProperties } from 'react';

export type LoadingTypes = {
  loading: boolean;
  type?: 'circle' | 'line';
  backDrop?: boolean;
  customStyle?: CSSProperties;
  customContainerStyle?: CSSProperties;
  text?: string;
};

export type ProgressIndicatorTypes = {
  type: 'circle' | 'line';
  text?: string;
  customContainerStyle?: CSSProperties;
  style?: CSSProperties;
};
