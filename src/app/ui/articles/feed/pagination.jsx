import Link from "next/link";

export default function Pagination({ pathname, page = 1, maxPage }) {
  function pageComponent() {
    const items = [];

    for (let p = 1; p <= maxPage; p++) {
      if (p == page) {
        items.push(
          <li className="page-item active">
            <Link className="page-link" href={`${pathname}?page=${p}`}>
              {p}
            </Link>
          </li>
        );
      } else {
        items.push(
          <li className="page-item">
            <Link className="page-link" href={`${pathname}?page=${p}`}>
              {p}
            </Link>
          </li>
        );
      }
    }
    return <>{items}</>;
  }

  return (
    <>
      <ul className="pagination">{pageComponent()}</ul>
    </>
  );
}
