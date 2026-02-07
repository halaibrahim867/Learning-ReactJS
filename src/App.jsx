import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import NotFound from "./NotFound";
import PostLayout from "./PostLayout";
import { postsContext } from "./contexts/postsContext";
function App() {
  const [count, setCount] = useState(0);
  let postsData = [
    {
      id: 1,
      title: "Post Title 1",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam corporis aliquam quas delectus excepturi aut iusto modi error quos fugit autem itaque cum quisquam, facere eligendi porro quis velit culpa.",
    },
    {
      id: 2,
      title: "Post Title 2",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam corporis aliquam quas delectus excepturi aut iusto modi error quos fugit autem itaque cum quisquam, facere eligendi porro quis velit culpa.",
    },
    {
      id: 3,
      title: "Post Title 3",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam corporis aliquam quas delectus excepturi aut iusto modi error quos fugit autem itaque cum quisquam, facere eligendi porro quis velit culpa.",
    },
  ];
  return (
    <>
      <postsContext.Provider value={postsData}>
        <div>
          <Link to="/home">
            <button> Home </button>
          </Link>

          <Link to="/hello">
            <button> Hello </button>
          </Link>

          <Link to="/posts">
            <button>Posts</button>
          </Link>
        </div>
        <Routes>
          <Route path="/hello" element={<Hello />} />

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/posts" element={<PostLayout />}>
            {/* if the name of path same as prefix replace path with index and equal true same to put index only */}
            <Route index element={<PostList />} />

            <Route path=":postId" element={<PostDetails />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </postsContext.Provider>
    </>
  );
}

export default App;
