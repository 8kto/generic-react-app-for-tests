function List({ items }) {
  return <ul>{items.map((v) => <li key={v}>{v}</li>)}</ul>
}

export default List
