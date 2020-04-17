import React, { ReactElement } from 'react';
import { Observer, Provider } from 'mobx-react';
import * as stores from '@/stores';

interface ChildrenProps<T> {
  children: (value: T) => ReactElement<any>;
}

/**
 * Observer
 * @param param
 */
export const RootConsumer = ({ children }: ChildrenProps<IStore>) => {
  return <Observer>{() => children(stores)}</Observer>;
};

export default function ProviderWrapper({ children }: { children?: React.ReactNode }) {
  return <Provider {...stores}>{children}</Provider>;
}
