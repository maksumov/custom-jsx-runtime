function List({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <ListItem id={i}>
          <Anchor value={item} />
        </ListItem>
      ))}
    </ul>
  );
}
function ListItem({ children }) {
  return <li>{children}</li>;
}
function Anchor({ value }) {
  return <a href="#">{value}</a>;
}
function App() {
  return <List items={[1, 2, 3, 4, 5]} />;
}
export default App;
