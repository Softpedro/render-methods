import { useEffect, useState } from "react";

export default function CSR() {
  const [posts, setPosts] = useState<
    {
      id: number;
      title: string;
      body: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 6)));
  }, []);

  return (
    <div>
      <h1>CSR: Client-Side Rendering</h1>

      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
