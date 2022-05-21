const Post = ({ post }) => {
  return (
    <>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          border: "2px solid green",
          borderRadius: "40px",
        }}
      >
        <h1>
          {post.id}.{post.title}
        </h1>
        <h4>{post.body}</h4>
      </div>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
