import React from 'react';

export const RECENTLY_SEARCHED_MAX_ITEMS = 5;

interface RecentlySearchedProps {
  recentlySearched: string[];
}

export const RecentlySearched: React.FC<RecentlySearchedProps> = ({ recentlySearched }) => {
  return (
    <>
      {recentlySearched.length > 0 ? (
        <>
          <strong>Last searched: </strong>
          {recentlySearched.join(', ')}
        </>
      ) : (
        ''
      )}
    </>
  );
};
