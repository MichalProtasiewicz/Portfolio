import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 13% 7% 13% 7%;
  width: 100vw;
  min-height: -moz-calc(100vh - 60px);
  min-height: -webkit-calc(100vh - 60px);
  min-height: -o-calc(100vh - 60px);
  min-height: calc(100vh - 60px);
  height: -moz-calc(100% - 60px);
  height: -webkit-calc(100% - 60px);
  height: -o-calc(100% - 60px);
  height: calc(100% - 60px);

  @media (min-width: 750px) {
    padding: 12% 10% 12% 10%;
  }
  @media (min-width: 950px) {
    padding: 125px 90px 125px 90px;
  }
  @media (min-width: 950px) {
    justify-content: center;
    height: 100%;
    width: -moz-calc(100vw - 60px);
    width: -webkit-calc(100vw - 60px);
    width: -o-calc(100vw - 60px);
    width: calc(100vw - 60px);
  }
  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
`;

const PagesTemplate = ({ children }) => {
  return <ChildrenWrapper>{children}</ChildrenWrapper>;
};

PagesTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PagesTemplate;
