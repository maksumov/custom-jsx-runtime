import { jsx as _jsx } from "../runtime/jsx-runtime";

function List({
  items
}) {
  return _jsx("ul", {
    children: items.map((item, i) => _jsx(ListItem, {
      id: i,
      children: _jsx(Anchor, {
        value: item
      })
    }))
  });
}

function ListItem({
  children
}) {
  return _jsx("li", {
    children: children
  });
}

function Anchor({
  value
}) {
  return _jsx("a", {
    href: "#",
    children: value
  });
}

function App() {
  return _jsx(List, {
    items: [1, 2, 3, 4, 5]
  });
}

export default App;