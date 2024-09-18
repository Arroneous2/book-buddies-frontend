import { BookSearch } from "./BookSearch";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  return (
    <main>
      <Signup />
      <Login />
      <BookSearch />
    </main>
  );
}
