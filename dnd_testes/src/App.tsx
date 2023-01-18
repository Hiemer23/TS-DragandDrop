import { useState } from "react"
import { Lista } from './types/Lista'
import { Item } from "./types/Item"
import { v4 as uuidv4 } from "uuid"

import Lista_Comp from "./components/Lista_Comp"
import Head from "./components/Head"

import './index.css'

function App() {

  let targetItem: Item
  let targetTitulo: string = ""
  const [listA, setListA] = useState<Lista>({
    titulo: "A",
    Item: [{ id: uuidv4(), name: "ABC" }, { id: uuidv4(), name: "DEF" }, { id: uuidv4(), name: "DEF" }]
  },)

  const [listB, setListB] = useState<Lista>({
    titulo: "B",
    Item: [{ id: uuidv4(), name: "CDE" }, { id: uuidv4(), name: "FHI" }]
  })


  const addClick = (item: Item, titulo: string) => {
    addItem(item, titulo)
  }

  const removeClick = (item: Item) => {
    removeItem(item)
  }

  const getID = (item: Item) => {
    targetItem = item
    //console.log(id)
  }
  const getTitulo = (titulo: string) => {
    //console.log(titulo)
    targetTitulo = titulo
    removeClick(targetItem)
    addClick(targetItem, targetTitulo)
  }

  const setList = (titulo: string, item: Item[]) => {
    //console.log(item, titulo)

    switch (titulo) {
      case "A":
        setListA({ titulo: "A", Item: item })
        break;
      case "B": setListB({ titulo: "B", Item: item })
    }
  }

  const addItem = (item: Item, titulo: string) => {

    let newList: Item[] = []
    if (titulo == "A") {

      newList = [...listA.Item]

      //console.log(newList)
    }
    if (titulo == "B") {
      newList = [...listB.Item]
    }
    newList.push(item)
    setList(titulo, newList)
  }


  const removeItem = (item: Item) => {
    let newList = [...listB.Item]
    let titulo = "B"
    newList = newList.filter((teste, index) => teste.id === item.id)

    if (newList.length == 0) {
      titulo = "A"
      console.log("AQUI")
      newList = [...listA.Item]
      newList = newList.filter((teste, index) => teste.id=== item.id)
      console.log(newList)
    }
    //console.log(newList)
    setList(titulo, newList)
  }

  return (

    < div className="App" >
      <Head />
      <div className="Container-List">
        <Lista_Comp key={listA.titulo} list={listA} getID={getID} getTitulo={getTitulo} />
        <Lista_Comp key={listB.titulo} list={listB} getID={getID} getTitulo={getTitulo} />
      </div>
    </div >
  )
}
export default App
