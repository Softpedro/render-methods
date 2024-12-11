export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts.slice(0, 6)
    },
    revalidate: 10
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

export default function ISR({ posts }: ISSGProps) {
  console.log("ISR");
  return (
    <div>
      <h1>ISR: Incremental Static Regeneration</h1>
      <p>Esta pagina se regenera en tiempo real</p>
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
