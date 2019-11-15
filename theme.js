import { Fragment, createElement as e, useRef } from 'react';
import merge from 'lodash.merge';
import styled from '@emotion/styled';
import { yellow } from 'mdx-deck/themes';

const textTransformNone = {
  textTransform: 'none',
};
const handleFullscreen = (isFullsscreen) => {
  if (isFullsscreen) {
    return document.exitFullscreen();
  }
  return document.body.requestFullscreen();
};
const Button = styled.button`
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  z-index: 100;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const Provider = ({ children }) => {
  const isFullsscreen = useRef(false);
  const label = isFullsscreen.current ? 'Leave fullscreen' : 'Enter fullscreen';
  const onClick = () => {
    if (isFullsscreen.current === null) {
      return;
    }
    const prevState = isFullsscreen.current;
    isFullsscreen.current = null;
    handleFullscreen(isFullsscreen.current).then(
      () => {
        isFullsscreen.current = !prevState;
      },
      () => {
        isFullsscreen.current = prevState;
      }
    );
  };
  const onMouseUp = (evnt) => evnt.target.blur();

  return e(Fragment, null, e(Button, { onClick, onMouseUp }, label), children);
};

export default merge(yellow, {
  styles: {
    h1: textTransformNone,
    h2: textTransformNone,
    h3: textTransformNone,
    li: {
      fontSize: 'larger',
      listStyle: 'none',
      margin: '1.5rem 0',
    },
    blockquote: {
      position: 'relative',
      '::before': {
        content: '"❝"',
        color: 'grey',
        position: 'absolute',
        fontSize: '5rem',
        left: '-11%',
      },
    },
    Image: {
      backgroundPositionY: 'top',
    },
    Slide: {
      padding: '1rem 2rem',
      backgroundColor: '#d1e9ff',
    },
  },
  Provider,
});
