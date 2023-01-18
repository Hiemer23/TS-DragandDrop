import React, { useState } from 'react'
import style from '../styles/ItemLista.module.css'
import { Item } from '../types/Item'

type Props = {
    item: Item,
    getID: (item: Item) => void,
}

function ItemLista({ item, getID }: Props) {

    const [drag, SetDrag] = useState(false)

    const onDragStart = (id: string) => {
        SetDrag(true)
        getID(item)
        //console.log("pegou")
    }

    const onDragEnd = (id: string) => {
        SetDrag(false)
        //console.log('drag enter', targetTitulo)
        //console.log("soltou")
    }

    return (
        <div key={item.id}
            className={drag ? style.container_drag : style.container}
            // onClick={handleclick}
            draggable
            onDragStart={() => onDragStart(item.id)}
            onDragEnd={() => onDragEnd(item.id)}>
            {item.name}</div >
    )
}

export default ItemLista