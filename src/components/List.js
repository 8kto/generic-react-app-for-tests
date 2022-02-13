function List({ items }) {
  return (
    <div className="component">
      <strong>A simple list</strong>
      <ul>{items.map((v) => <li key={v}>{v}</li>)}</ul>
    </div>
  )
}

export default List
