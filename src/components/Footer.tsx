/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

const aCss = {
  opacity: 0.25,
  transition: 'opacity .15s',
  ":hover": {
    opacity: 0.5,
  },
};

export default function Footer() {
  return (
    <footer css={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      bottom: 0,
      fontSize: 14,
      position: 'absolute',
      width: '100%',
    }}>
      <div css={{
        display: 'flex',
        margin: '0 auto',
        maxWidth: 652,
        padding: 20,
      }}>
        <a href="https://automata.fi">Automata Labs Inc.</a>
        <div css={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
          <a css={{ ...aCss, marginRight: 20 }} href="https://discord.gg/rXUgFXs4Pz">Discord</a>
          <a css={{ ...aCss, marginRight: 20 }} href="https://twitter.com/AutomataFinance">Twitter</a>
          <a css={aCss} href="https://github.com/automata-labs/">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
