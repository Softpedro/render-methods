export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

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

interface ISSGProps {
  posts: IPost[];
}

export default function SSG({ posts }: ISSGProps) {
  return (
    <div>
      <h1>SSG: Static-Site Generation</h1>
      <p>Esta pagina se genera en tiempo de compilacion</p>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
