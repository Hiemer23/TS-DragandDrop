import React from 'react'
import style from '../styles/ItemLista.module.css'
import { Item } from '../types/Item'

type Props = {
    item: Item,
    getID: (id: string) => void,
}

function ItemLista({ item, getID }: Props) {


    const dragItem = React.useRef<any>(null)
    const dragOverItem = React.useRef<any>(null)
    const handleclick = () => {
        getID(item.id)
    }

    const onDragStart = (id: string) => {
        //console.log("id: ", id)
        handleclick
    }

    const onDragEnter = (id: string) => {
        //console.log("id: ", id)
    }

    const onDragEnd = (id: string) => {
        //console.log("id: ", id)
        handleclick()
    }

    return (
        <div key={item.id}
            className={style.container}
            onClick={handleclick}
            draggable
            onDragStart={() => onDragStart(item.id)}
            onDragEnter={() => onDragEnter(item.id)}
            onDragEnd={() => onDragEnd(item.id)}
            onDragOver={e => e.preventDefault()}
        > {item.name}</div >
    )
}

export default ItemLista