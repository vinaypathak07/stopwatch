import React, { ReactNode } from 'react';
import styled from '../../styled';

const PageContainer = styled.div`
  display: block;
  padding-left: 70px;
`;

const PageWrapper = styled.div`
  display: inline-block;
  width: 100%;
  min-height: calc(100vh - 1px);
  transition: transform 0.6s, box-shadow 0.6s, -webkit-transform 0.6s;
  will-change: transform;
`;

const PageBackground = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  background: ${({ theme }) => theme.color.background};
  opacity: 0;
  z-index: 2;
  transition: opacity 0.6s;
  pointer-events: none;
`;

export default function PageContent(props: { children: ReactNode }) {
  return (
    <PageContainer>
      <PageWrapper>
        {props.children}
        <PageBackground />
      </PageWrapper>
    </PageContainer>
  );
}
