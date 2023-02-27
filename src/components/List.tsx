import { useState } from "react";
import { Helmet } from 'react-helmet'


type ListProps = {
    initialItems: string[]
}

function List({ initialItems }: ListProps ){

  const [newItem, setNewItem] = useState('')
  const [list, setList] = useState(initialItems)

  function addToList(){
    setTimeout(() => {
        setList(state => [...state, newItem])
    }, 500)
    
  }

  document.documentElement.lang = 'us'

  function removeFromList(item: string){
      setList(state => state.filter(item => item !== item))
  }
  return (
    <>
    <Helmet>
      <html lang="en" />
    </Helmet>
      <main>
        <h1>teste</h1>
        <input data-cy="input"  placeholder="new item" value={newItem} onChange={e => setNewItem(e.target.value)}/>
          <button data-cy="addItem" onClick={addToList}>Add</button>
          <ul className="test">
            {list.map(item => (
              <li key={item}>
                {item}
                <button onClick={() => removeFromList(item)}>Remove</button>
              </li>
              
              ))}
          </ul>
      </main>
        
    </>
  )
}

export default List;
