export default function ListItem({ name, children }) {
  return (
    <>
      <li>{name}</li>
      <ul>
        {children.map((child) => (
          <ListItem name={child.name} children={child.children} />
        ))}
      </ul>
    </>
  );
}
