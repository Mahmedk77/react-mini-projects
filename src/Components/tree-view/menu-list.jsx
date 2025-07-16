import MenuItem from "./menu-item";


export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length>0
        ? list.map((listItem) => {
          console.log(listItem, "in menu list");
          return (<MenuItem item={listItem} key={listItem.label}/>)
        }
         
      )
        : null}
    </ul>
  );
}