import { useState } from "react";
import usePostsPaging from "../hooks/usePostsPaging";

const PostListPaging = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = usePostsPaging({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>

      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-primary my-3 ms-5"
      >
        Next
      </button>
    </>
  );
};

export default PostListPaging;
