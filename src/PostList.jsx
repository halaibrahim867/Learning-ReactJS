import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";
import { postsContext } from "./contexts/postsContext";
import { useContext } from "react";
export default function PostList() {
  const posts = useContext(postsContext);

  let postList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/postDetails/${post.id}`}>
        <div style={{ padding: "30px", marginTop: "10px" }}>
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{postList}</>;
}
