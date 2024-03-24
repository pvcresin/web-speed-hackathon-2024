import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import type { RouteParams } from 'regexparam';
import invariant from 'tiny-invariant';

import { useBook } from '../../features/book/hooks/useBook';
import { EpisodeListItem } from '../../features/episode/components/EpisodeListItem';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';
import { Separator } from '../../foundation/components/Separator';
import { Spacer } from '../../foundation/components/Spacer';
import { Space } from '../../foundation/styles/variables';

import { ComicViewer } from './internal/ComicViewer';

const EpisodeList: React.FC<{ bookId: string }> = ({ bookId }) => {
  const { data: book } = useBook({ params: { bookId } });

  return (
    <Box aria-label="エピソード一覧" as="section" px={Space * 2}>
      <Flex align="center" as="ul" direction="column" justify="center">
        {book.episodes.map((episode) => (
          <EpisodeListItem key={episode.id} bookId={bookId} episodeId={episode.id} />
        ))}
      </Flex>
    </Box>
  );
};

const EpisodeDetailPage: React.FC = () => {
  const { bookId, episodeId } = useParams<RouteParams<'/books/:bookId/episodes/:episodeId'>>();
  invariant(bookId);
  invariant(episodeId);

  return (
    <Box>
      <section aria-label="漫画ビューアー">
        <ComicViewer episodeId={episodeId} />
      </section>

      <Separator />

      <Suspense fallback={<Spacer height={121 * 15} />}>
        <EpisodeList bookId={bookId} />
      </Suspense>
    </Box>
  );
};

const EpisodeDetailPageWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <EpisodeDetailPage />
    </Suspense>
  );
};

export { EpisodeDetailPageWithSuspense as EpisodeDetailPage };
