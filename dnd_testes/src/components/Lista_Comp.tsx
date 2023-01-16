import ItemLista from "./ItemLista"
import style from '../styles/Lista.module.css'
import { useState } from "react"
import { Lista } from "../types/Lista"

type Props = {
    list: Lista
    addClick: (id: string, titulo: string) => void
}

function Lista_Comp({ list, addClick }: Props) {

    const getID = (id: string) => {
        addClick(id, list.titulo)
        //onsole.log(id,list.titulo)
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                {list.titulo}
            </div>
            {list.Item.map(item => <ItemLista key={item.id} item={item} getID={getID}></ItemLista>)}
        </div>
    )
}

export default Lista_Comp