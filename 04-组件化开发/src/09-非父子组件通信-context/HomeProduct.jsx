import UserContext from "./contexts/user-context";

export default function HomeProduct() {
  return (
    <div>
      <h1>Home Product组件</h1>
      <UserContext.Consumer>
        {({ color }) => <h2>color: {color}</h2>}
      </UserContext.Consumer>
    </div>
  );
}
