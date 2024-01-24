import Link from "next/link";

export default function EditArticle({ slug }) {
  return (
    <>
      <Link href={`/editor/${slug}`} class="btn btn-sm btn-outline-secondary">
        <i class="ion-edit"></i> Edit Article
      </Link>
    </>
  );
}
