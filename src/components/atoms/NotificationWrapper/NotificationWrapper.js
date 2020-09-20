import styled from 'styled-components';

const NotificationWrapper = styled.div`
  z-index: 99999;
  position: fixed;
  top: 100%;
  left: 0;
  margin-top: -39px;
  width: 100vw;
  padding: 10px;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  text-align: center;
`;
export default NotificationWrapper;
