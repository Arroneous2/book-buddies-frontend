import { BookSearch } from "./BookSearch";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { UsersIndex } from "./UsersIndex";
import { Routes, Route } from "react-router-dom";
import { BookshelfIndex } from "./BookshelfIndex";

export function Content() {
  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-search" element={<BookSearch />} />
        <Route path="/users-index" element={<UsersIndex />} />
        <Route path="bookshelf-index" element={<BookshelfIndex />} />
      </Routes>
    </main>
  );
}
