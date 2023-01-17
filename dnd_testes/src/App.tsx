import { useState } from "react"
import { Lista } from './types/Lista'
import { Item } from "./types/Item"
import { v4 as uuidv4 } from "uuid"

import Lista_Comp from "./components/Lista_Comp"
import Head from "./components/Head"

import './index.css'

function App() {

  const [listA, setListA] = useState<Lista>({
    titulo: "A",
    Item: [{ id: uuidv4(), name: "ABC" }, { id: uuidv4(), name: "DEF" }, { id: uuidv4(), name: "DEF" }]
  },)

  const [listB, setListB] = useState<Lista>({
    titulo: "B",
    Item: [{ id: uuidv4(), name: "CDE" }, { id: uuidv4(), name: "FHI" }]
  })


  const addClick = (id: string, titulo: string) => {
    addItem(id, titulo)
  }

  const removeClick = (id: string, titulo: string) => {
    removeItem(id, titulo)
  }

  const setList = (titulo: string, item: Item[]) => {
    switch (titulo.toUpperCase()) {
      case 'A': setListA({ titulo: "A", Item: item })
        break
      case 'B': setListB({ titulo: "B", Item: item })
        break
    }
  }

  const addItem = (id: string, titulo: string) => {
    //removeItem(id, titulo)
    let newList: Item[] = []
    if (titulo === "A") newList = [...listA.Item]
    if (titulo === "B") newList = [...listB.Item]

    // newList.push({ id: id, name: listB.Item[pos].name })

    setList(titulo, newList)
  }


  const removeItem = (id: string, titulo: string) => {
    if (titulo == 'B') {
      let newList = [...listB.Item]

      newList = newList.filter((item, index) => item.id !== id)

      //console.log(newList)
      setList(titulo, newList)
    }
    if (titulo == 'A') {
      let newList = [...listA.Item]
      newList = newList.filter((item, index) => item.id !== id)

      //console.log(newList)
      setList(titulo, newList)
    }
  }

  return (

    < div className="App" >
      <Head />
      <div className="Container-List">
        <Lista_Comp key={listA.titulo} list={listA} addClick={addClick} removeClick={removeClick} />
        <Lista_Comp key={listB.titulo} list={listB} addClick={addClick} removeClick={removeClick} />
      </div>
    </div >
  )
}
export default App
