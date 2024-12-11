export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts.slice(0, 6)
    }
  };
}

interface IPost {
  id: number;
  title: string;
  body: string;
}

interface ISSRProps {
  posts: IPost[];
}

export default function SSR({ posts }: ISSRProps) {
  return (
    <div>
      <h1>SSR: Server-Side Rendering</h1>
      <p>Esta pagina se renderiza en el servidor</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
