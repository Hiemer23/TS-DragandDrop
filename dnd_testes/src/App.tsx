import { useState } from "react"
import { Lista } from './types/Lista'
import { v4 as uuidv4 } from "uuid"

import Lista_Comp from "./components/Lista_Comp"
import Head from "./components/Head"

import './index.css'

function App() {

  const [listao, setListao] = useState<Lista[]>([
    {
      titulo: "A",
      Item: [{ id: uuidv4(), name: "ABC" }, { id: uuidv4(), name: "DEF" }, { id: uuidv4(), name: "DEF" }]
    },
    {
      titulo: "B",
      Item: [{ id: uuidv4(), name: "CDE" }, { id: uuidv4(), name: "FHI" }]
    }
  ]
  )

  const [listA, setListA] = useState<Lista[]>(listao.filter(vetor => vetor.titulo === "A"))

  const [listB, setListB] = useState<Lista[]>(listao.filter(vetor => vetor.titulo === "B"))


  const addClick = (id: string, titulo: string) => {
    addItem(id, titulo)
  }


  const addItem = (id: string, titulo: string) => {
    let pos = 0
    listao.forEach((item_filtro) => {
      item_filtro.Item.forEach((item2, index) => {
        if (item2.id === id) {
          pos = index
        }
      })
    })
    console.log(pos)

    // let newList = [...listA.Item]
    // newList.push({ id: id, name: listB.Item[pos].name })
    // setListA({ titulo: "A", Item: newList })
    // //console.log(newList)
    // removeItem(pos, titulo)
  }

  // if (titulo == 'A') {
  //   let pos = 0
  //   listA.Item.forEach((item_filtro, index) => {
  //     if (item_filtro.id === id) {
  //       pos = (index)
  //     }
  //   })
  //   //console.log(pos)

  //   let newList = [...listB.Item]
  //   newList.push({ id: id, name: listA.Item[pos].name })
  //   setListB({ titulo: "B", Item: newList })
  //   //console.log(newList)
  //   removeItem(pos, titulo)
  // }

  const removeItem = (pos?: number, titulo?: string, id?: string) => {
    // if (titulo == 'B') {
    //   let newList = [...listB.Item]

    //   newList = newList.filter((item, index) => index !== pos)

    //   //console.log(newList)
    //   setListB({ titulo: "B", Item: newList })
    // }
    // if (titulo == 'A') {
    //   let newList = [...listA.Item]
    //   newList = newList.filter((item, index) => index !== pos)

    //   //console.log(newList)
    //   setListA({ titulo: "A", Item: newList })
    // }
  }

  return (

    < div className="App" >
      <Head />
      <div className="Container-List">
        <Lista_Comp key={listA[0].titulo} list={listA[0]} addClick={addClick} />
        <Lista_Comp key={listB[0].titulo} list={listB[0]} addClick={addClick} />
      </div>
    </div >
  )
}
export default App
