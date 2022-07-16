import React from "react";

interface Post {
  postPerPage: number;
  totalPost: number;
  paginate: any;
}

function Pagination({ postPerPage, totalPost, paginate }: Post) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              className="page-link cursor-pointe"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
