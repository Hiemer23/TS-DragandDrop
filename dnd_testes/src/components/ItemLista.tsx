import React, { useState } from 'react'
import style from '../styles/ItemLista.module.css'
import { Item } from '../types/Item'

type Props = {
    item: Item,
    getID: (id: string) => void,
}

function ItemLista({ item, getID }: Props) {

    const [drag, SetDrag] = useState(false)
    const handleclick = () => {
        getID(item.id)
    }

    const onDragStart = (id: string) => {
        SetDrag(true)
        //console.log("id: ", id)
        handleclick()
    }

    const onDragEnter = (id: string) => {
        console.log("id: ", id)
    }

    const onDragEnd = (id: string) => {
        console.log("id: ", id)
        handleclick()
        SetDrag(false)
    }

    return (
        <div key={item.id}
            className={drag ? style.container_drag : style.container}
            onClick={handleclick}
            draggable
            onDragStart={() => onDragStart(item.id)}
            onDragEnter={() => onDragEnter(item.id)}
            onDragEnd={() => onDragEnd(item.id)}
        // onDragOver={() => onDragEnd(item.id)}
        > {item.name}</div >
    )
}

export default ItemLista