const List = ({items}) => {
  return <ul>{items.map(v => <li>{v}</li>)}</ul>
}

export default List