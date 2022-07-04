import React from 'react';

export const RECENTLY_SEARCHED_MAX_ITEMS = 5;

interface RecentlySearchedProps {
  recentlySearched: string[];
}

export const RecentlySearched: React.FC<RecentlySearchedProps> = ({
  recentlySearched,
}) => (
  <>
    <strong>Last searched: </strong>
    {recentlySearched.join(', ')}
  </>
);
