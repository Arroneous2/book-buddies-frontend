import { BookSearch } from "./BookSearch";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { UsersIndex } from "./UsersIndex";

export function Content() {
  return (
    <main>
      <Signup />
      <Login />
      <BookSearch />
      <UsersIndex />
    </main>
  );
}
