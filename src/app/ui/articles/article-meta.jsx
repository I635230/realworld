import Link from "next/link";

export default function ArticleMeta({ article }) {
  return (
    <>
      <Link href={`/profile/${article.author.username}`}>
        <img src="http://i.imgur.com/Qr71crq.jpg" />
      </Link>
      <div className="info">
        <Link href={`/profile/${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">January 20th</span>
      </div>
    </>
  );
}
