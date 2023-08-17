import "./styles.css";
import objectGraph from "./utils/objectGraph";
import ListItem from "./components/ListItem";

const animals = [
  {
    id: 1,
    name: "Animalia",
    parent: null
  },
  {
    id: 2,
    name: "Lion",
    parent: 1
  },
  {
    id: 3,
    name: "Elephant",
    parent: 1
  },
  {
    id: 4,
    name: "Dolphin",
    parent: 1
  },
  {
    id: 5,
    name: "Plantae",
    parent: null
  },
  {
    id: 6,
    name: "Oak Tree",
    parent: 5
  },
  {
    id: 7,
    name: "Rose Bush",
    parent: 5
  },
  {
    id: 8,
    name: "Gazelle",
    parent: 2
  },
  {
    id: 9,
    name: "Fish",
    parent: 4
  },
  {
    id: 10,
    name: "Squid",
    parent: 4
  },
  {
    id: 11,
    name: "Squidfood",
    parent: 10
  }
];

const animalRoots = objectGraph(animals);

export default function App() {
  return (
    <div className="App">
      <h1>Tree Traversal</h1>
      <ul style={{ textAlign: "left" }}>
        {animalRoots.map((root) => {
          if (root.children.length === 0) {
            return <li key={root.id}>{root.name}</li>;
          } else {
            return <ListItem name={root.name} children={root.children} />;
          }
        })}
      </ul>
    </div>
  );
}
