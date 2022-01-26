import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer({
  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  bottom: 0,
  fontSize: 13,
  position: 'absolute',
  width: '100%',
});

const FooterContainer = styled.div({
  display: 'flex',
  margin: '0 auto',
  maxWidth: 652,
  padding: 20,
});

const FooterLink = styled.a({
  opacity: 0.25,
  transition: 'opacity .15s',
  ":hover": {
    opacity: 0.5,
  },
});

const FooterNavigation = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
});

export default function Footer() {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterLink href="https://automata.fi">Automata Labs Inc.</FooterLink>
        <FooterNavigation>
          <FooterLink style={{ marginRight: 20 }} href="https://discord.gg/rXUgFXs4Pz">Discord</FooterLink>
          <FooterLink style={{ marginRight: 20 }} href="https://twitter.com/AutomataFinance">Twitter</FooterLink>
          <FooterLink href="https://github.com/automata-labs/">GitHub</FooterLink>
        </FooterNavigation>
      </FooterContainer>
    </FooterStyled>
  );
}
