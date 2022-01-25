/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

type HyperLinkProps = {
  children?: JSX.Element;
};

export default function HyperLink({ children, ...props }: HyperLinkProps) {
  return (
    <a {...props} css={{
      borderBottomColor: 'inherit',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      paddingBottom: 1,
      transition: 'opacity .15s',
    }}>
      {children}
    </a>
  );
}
