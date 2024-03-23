import styled from 'styled-components';

import { Color } from '../styles/variables';

const _Separator = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${Color.MONO_30};
  margin: 0;
  border: 0;
`;

export const Separator: React.FC = () => {
  return <_Separator aria-hidden={true} />;
};
