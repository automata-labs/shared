import React from 'react';
import styled from 'styled-components';

const HyperLinkStyled = styled.a({
  borderBottomColor: 'inherit',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  paddingBottom: 1,
  transition: 'opacity .15s',
});

type HyperLinkProps = {
  children?: JSX.Element;
};

export default function HyperLink({ children, ...props }: HyperLinkProps) {
  return (
    <HyperLinkStyled>
      {children}
    </HyperLinkStyled>
  );
}
