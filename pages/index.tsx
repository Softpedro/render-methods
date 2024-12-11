import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Comparacion de metodos de renderizado</h1>
      <ul>
        <li>
          <Link href="/csr">CSR(CLient-side Rendering)</Link>
        </li>
        <li>
          <Link href="/ssr">SSR(Server-Side Rendering)</Link>
        </li>
        <li>
          <Link href="/ssg">SSG(Static-Site Generation)</Link>
        </li>
        <li>
          <Link href="/isr">ISR(Incremental Static Regeneration)</Link>
        </li>
      </ul>
    </div>
  );
}
