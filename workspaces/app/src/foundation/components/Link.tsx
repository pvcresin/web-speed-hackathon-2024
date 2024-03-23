import { Link as _Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to?: string;
} & JSX.IntrinsicElements['a'];

export const Link: React.FC<Props> = ({ children, to, ...rest }) => {
  if (to) {
    return (
      <_Link to={to} {...rest} ref={null}>
        {children}
      </_Link>
    );
  }

  return <a {...rest}>{children}</a>;
};
