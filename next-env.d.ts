/// <reference types="next" />
/// <reference types="next/types/global" />

import { JSX as IonIconsJSX } from 'ionicons';
import { JSX as IonicCoreJSX } from '@ionic/core';
import { ReactNode, MutableRefObject } from 'react';

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & {
    class?: string;
    children?: ReactNode;
    ref?: MutableRefObject<P>;
    slot?: string;
    mode?: 'md' | 'ios';
  };
};

type IonIcons = StencilToReact<IonIconsJSX.IntrinsicElements>;
type IonicCore = StencilToReact<IonicCoreJSX.IntrinsicElements>;

declare global {
  namespace JSX {
    interface IntrinsicElements extends IonIcons, IonicCore {}
  }
}
