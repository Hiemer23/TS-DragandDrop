import ItemLista from "./ItemLista"
import style from '../styles/Lista.module.css'
import { useState } from "react"
import { Lista } from "../types/Lista"

type Props = {
    list: Lista,
    addClick: (id: string, titulo: string) => void,
    removeClick: (id: string, titulo: string) => void,
}

function Lista_Comp({ list }: Props) {

    const getID = (id: string) => {

        //console.log(id,list.titulo)
    }

    const dragStatus = {
        onDragEnter: (e: any) => {
            e.preventDefault();
            console.log('onDragEnter');
        },
        onDragOver: (e: any) => {
            e.preventDefault();
            console.log('onDragOver');
        },
        onDrop: (e: any) => {
            e.preventDefault();

            console.log('soltou2');
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