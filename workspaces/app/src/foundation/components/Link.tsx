import { Link as _Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to?: string;
} & JSX.IntrinsicElements['a'];

export const Link: React.FC<Props> = ({ children, href, to, ...rest }) => {
  return (
    <_Link to={to || href || '#'} {...rest} ref={null}>
      {children}
    </_Link>
  );
};
