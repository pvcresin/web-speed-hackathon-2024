import { ArrowBack, Close, Favorite, FavoriteBorder, NavigateNext, Search } from '@mui/icons-material';
import { useMemo } from 'react';

type Props = {
  color: string;
  height: number;
  type: 'ArrowBack' | 'Close' | 'Favorite' | 'FavoriteBorder' | 'NavigateNext' | 'Search';
  width: number;
};

export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  const Icon = useMemo(() => {
    switch (type) {
      case 'ArrowBack':
        return ArrowBack;
      case 'Close':
        return Close;
      case 'Favorite':
        return Favorite;
      case 'FavoriteBorder':
        return FavoriteBorder;
      case 'NavigateNext':
        return NavigateNext;
      case 'Search':
        return Search;
      default:
        throw Error(`Unknown icon type: ${type}`);
    }
  }, [type]);

  return <Icon style={{ color, height, width }} />;
};
