import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Status from "./components/Status";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [list, setList] = useState(initialItems);

  function addItem(item) {
    setList((p) => [...p, item]);
  }

  function deleteById(id) {
    setList((p) => p.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setList((p) => p.map((i) => i.id === id ? { ...i, packed: !i.packed } : i));
  }

  function clearList() {
    setList([]);
  }
  return <div className="app">
    <Logo />
    <Form addItem={addItem} />
    <PackingList list={list} deleteById={deleteById} handleToggleItem={handleToggleItem} clearList={clearList} />
    <Status list={list} />
  </div>
}

export default App;