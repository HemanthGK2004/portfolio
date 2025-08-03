import React from 'react';

// This is a mock of framer-motion to ensure there are no runtime errors
// In a real app, you'd install and use the actual framer-motion package

export const motion = {
  div: (props: React.HTMLProps<HTMLDivElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('div', rest);
  },
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('h1', rest);
  },
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('h2', rest);
  },
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('h3', rest);
  },
  p: (props: React.HTMLProps<HTMLParagraphElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('p', rest);
  },
  span: (props: React.HTMLProps<HTMLSpanElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('span', rest);
  },
  ul: (props: React.HTMLProps<HTMLUListElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('ul', rest);
  },
  li: (props: React.HTMLProps<HTMLLIElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('li', rest);
  },
  a: (props: React.HTMLProps<HTMLAnchorElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('a', rest);
  },
  button: (props: React.HTMLProps<HTMLButtonElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('button', rest);
  },
  img: (props: React.HTMLProps<HTMLImageElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('img', rest);
  },
  svg: (props: React.SVGProps<SVGSVGElement>) => {
    const { initial, animate, transition, ...rest } = props;
    return React.createElement('svg', rest);
  },
};

export const useInView = (ref: any, options = {}) => {
  return true; // Always in view for this mock
};