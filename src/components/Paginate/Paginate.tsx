import React, { useContext, useMemo } from 'react';

import ReactPaginate from 'react-paginate';
import { Store } from 'store';

const Paginate: React.FC = React.memo(() => {
  const { globalState, setGlobalState } = useContext(Store);
  const rangeDisplayed: number = 5;

  const cntPageNums = React.useCallback(
    (totalPage?: number) => {
      console.log('Paginate: cntPageNums()');
      return totalPage ? totalPage / 10 : 0;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [globalState.movieData]
  );

  const handlePageClick = (data: { selected: number }) => {
    console.log(data);
    let selected = data.selected + 1;
    setGlobalState({ paged: selected });
  };

  return useMemo(() => {
    console.log('Paginate: render()');
    return (
      <ReactPaginate
        pageCount={cntPageNums(globalState.movieData?.totalResults)}
        pageRangeDisplayed={rangeDisplayed}
        marginPagesDisplayed={0}
        onPageChange={handlePageClick}
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        containerClassName={'pagination'}
        activeClassName={'active'}
        initialPage={1}
        disableInitialCallback={true}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.movieData?.totalResults]);
});

export default Paginate;
