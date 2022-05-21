import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <>
            <Link href={`posts/${post.id}`}>
              <div
                key={post.id}
                style={{
                  margin: "10px",
                  padding: "10px",
                  border: "2px solid green",
                  borderRadius: "40px",
                }}
              >
                <h2>
                  {post.id}.{post.title}
                </h2>
                <p>{post.body}</p>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
