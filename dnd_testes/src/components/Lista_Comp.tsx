import ItemLista from "./ItemLista"
import style from '../styles/Lista.module.css'
import { useState } from "react"
import { Lista } from "../types/Lista"
import { Item } from "../types/Item"

type Props = {
    list: Lista,
    getID: (item: Item) => void,
    getTitulo: (titulo: string) => void
}

function Lista_Comp({ list, getID, getTitulo }: Props) {

    const dragStatus = {
        onDragEnter: (e: any) => {
            e.preventDefault();
        },
        onDragOver: (e: any) => {
            e.preventDefault();
        },
        onDrop: (e: any) => {
            e.preventDefault();
            getTitulo(list.titulo);
        }
    }

    return (
        <div className={style.container}
            {...dragStatus}>
            <div className={style.title}>
                {list.titulo}
            </div>
            {list.Item.map(item => <ItemLista key={item.id} item={item} getID={getID}></ItemLista>)}
        </ div >
    )
}

export default Lista_Comp