import './assets/scss/components/_pagination.scss';

export interface Pagination {
  count: number;
  showArrows?: boolean;
  showAll?: boolean;
  onClick?: () => void;
}

export const createPagination = ({
  count,
  showArrows = false,
  showAll = true,
  onClick,
}: Pagination): HTMLDivElement => {
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('pagination__container', 'pagination');

  const paginationUl = document.createElement('ul');
  paginationUl.classList.add('pagination__list');

  const handlePageClick = (event: Event) => {
    event.preventDefault();
    const activeClass = 'pagination__item--active';
    const currentActive = paginationUl.querySelector(`.${activeClass}`);
    if (currentActive) {
      currentActive.classList.remove(activeClass);
    }
    const target = event.currentTarget as HTMLElement;
    target.parentElement?.classList.add(activeClass);
    if (onClick) {
      onClick();
    }
  };

  const createPageItem = (pageNumber: number, isActive: boolean = false) => {
    const paginationLi = document.createElement('li');
    paginationLi.classList.add('pagination__item');
    if (isActive) {
      paginationLi.classList.add('pagination__item--active');
    }

    const paginationLink = document.createElement('a');
    paginationLink.classList.add('pagination__link');
    paginationLink.href = '#';
    paginationLink.textContent = `${pageNumber}`;
    paginationLink.addEventListener('click', handlePageClick);

    paginationLi.appendChild(paginationLink);
    return paginationLi;
  };

  if (showArrows) {
    const prevLi = document.createElement('li');
    prevLi.classList.add('pagination__item');

    const prevLink = document.createElement('a');
    prevLink.classList.add('pagination__link');
    prevLink.href = '#';
    prevLink.textContent = '«';
    prevLink.addEventListener('click', handlePageClick);

    prevLi.appendChild(prevLink);
    paginationUl.appendChild(prevLi);
  }

  if (showAll || count <= 4) {
    for (let i = 0; i < count; i++) {
      paginationUl.appendChild(createPageItem(i + 1, i === 0));
    }
  } else {
    paginationUl.appendChild(createPageItem(1, true));
    paginationUl.appendChild(createPageItem(2));

    const ellipsisLi = document.createElement('li');
    ellipsisLi.classList.add('pagination__item');
    ellipsisLi.textContent = '...';
    paginationUl.appendChild(ellipsisLi);

    paginationUl.appendChild(createPageItem(count - 1));
    paginationUl.appendChild(createPageItem(count));
  }

  if (showArrows) {
    const nextLi = document.createElement('li');
    nextLi.classList.add('pagination__item');

    const nextLink = document.createElement('a');
    nextLink.classList.add('pagination__link');
    nextLink.href = '#';
    nextLink.textContent = '»';
    nextLink.addEventListener('click', handlePageClick);

    nextLi.appendChild(nextLink);
    paginationUl.appendChild(nextLi);
  }

  paginationContainer.appendChild(paginationUl);

  return paginationContainer;
}
