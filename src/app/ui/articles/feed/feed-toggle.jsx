import Link from "next/link";

export default function FeedToggle({ feedName, active = "" }) {
  return (
    <>
      <li className="nav-item">
        <Link className={`nav-link ${active}`} href="">
          {feedName}
        </Link>
      </li>
    </>
  );
}
