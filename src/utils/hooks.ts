import React from 'react';

/**
 * componentDidMount
 *
 * @export
 * @param {() => any} onMount
 * @returns
 */
export function useOnMount(onMount: () => any) {
  return React.useEffect(() => {
    if (onMount) {
      onMount();
    }
  }, []);
}

/**
 * componentWillUnmount
 *
 * @export
 * @param {() => any} onUnmount
 * @returns
 */
export function useOnUnmount(onUnmount: () => any) {
  return React.useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);
}
