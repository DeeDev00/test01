// import { Grid } from "@mui/material";
// import SideBar from "../components/SideBar";
// import Feed from "../components/Feed";
// import RightBar from "../components/RightBar";

function HomePage() {
  return (
    <div>
      <h1>My Todo</h1>
      <br />
      <p>new task</p>
      <hr />
      <ul>
        <li>Here's a task item</li>
        <li>Here's a task item</li>
        <li>Here's a task item</li>
        <li>Here's a task item</li>
      </ul>
      <a className="link" href="/LoginPage">
        LOG OUT
      </a>
    </div>
  );
}

export default HomePage;
