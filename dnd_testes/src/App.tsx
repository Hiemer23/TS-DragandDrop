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
  let listAReserva: Lista
  let listBReserva: Lista
  const [listA, setListA] = useState<Lista>({
    titulo: "A",
    Item: [{ id: uuidv4(), name: "ABC" }, { id: uuidv4(), name: "DEF" }, { id: uuidv4(), name: "JDF" }]
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

  const setList = () => {
    //console.log(item, titulo)

    // switch (titulo) {
    //   case "A":
    //     setListA({ titulo: "A", Item: item })
    //     break;
    //   case "B": setListB({ titulo: "B", Item: item })
    // }
    setListA(listAReserva)
    setListB(listBReserva)
  }

  const addItem = (item: Item, titulo: string) => {

    let newList: Item[] = []
    if (titulo == "A") {

      newList = [...listAReserva.Item]
      newList.push(item)
      listAReserva = { titulo: "A", Item: newList }
      //console.log(newList)
    }
    if (titulo == "B") {
      newList = [...listBReserva.Item]
      newList.push(item)
      listBReserva = { titulo: "B", Item: newList }
    }
    setList()
  }


  const removeItem = (item: Item) => {
    listAReserva = listA
    listBReserva = listB
    let newList = [...listB.Item]
    let titulo = "B"
    newList = newList.filter((teste) => teste.id !== item.id)
    listBReserva = { titulo: "B", Item: newList }
    //console.log('passou aqui')
    if (newList.length === listB.Item.length) {
      titulo = "A"
      //console.log("AQUI")
      newList = [...listA.Item]
      newList = newList.filter((teste) => teste.id !== item.id)
      listAReserva = { titulo: "A", Item: newList }
      //console.log(newList)
    }
    console.log(newList)
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
