import { Outlet } from "react-router-dom";
export default function PostLayout() {
  return (
    <>
      <div>
        <h1>Post</h1>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
