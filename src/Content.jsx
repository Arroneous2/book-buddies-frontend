import { BookSearch } from "./BookSearch";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { UsersIndex } from "./UsersIndex";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-search" element={<BookSearch />} />
        <Route path="/users-index" element={<UsersIndex />} />
      </Routes>
    </main>
  );
}
