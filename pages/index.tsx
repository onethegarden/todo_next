import TodoLayout from "../src/components/common/TodoLayout";
import Link from "next/link";

function Home() {
  return (
    <TodoLayout>
      <h1>next-todo</h1>
      <Link href="default-todo">default todo</Link>
      <br />
      <Link href="server-side-todo">server-side todo</Link>
    </TodoLayout>
  );
}

export default Home;
