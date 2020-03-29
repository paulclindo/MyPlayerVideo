import React from 'react';

type Props = {|
  color: string,
  size: number,
  children?: React.Node,
|};

function Icon(props: Props) {
  const { color, size, children } = props;

  return (
    <svg viewBox="0 0 32 32" height={size} width={size} fill={color}>
      {children}
    </svg>
  );
}

export default Icon;
