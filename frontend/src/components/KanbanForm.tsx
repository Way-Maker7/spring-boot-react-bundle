import './KanbanForm.css';
import {FormEvent, useEffect, useState} from "react";
import {KanbanStatus} from "../service/models";
import {postNewKanban} from "../service/apiService";


export default function KanbanForm(){

const [task,setTask] = useState(localStorage.getItem("task")??'')
const [desc, setDesc] = useState(localStorage.getItem("desc")??'')

useEffect(
    () =>{
        localStorage.setItem("task", task)
    }, [task]
)

    useEffect(
        () =>{
            localStorage.setItem("desc", desc)
        }, [desc]
    )


    const saveNewKanban = (ev: FormEvent) =>{
    ev.preventDefault()
    postNewKanban({'task':task,'description':desc,'status':KanbanStatus.OPEN})
        .then(() =>{
        setDesc('')
        setDesc('')
        })
    }


    return(
        <form className={'InputForm'} onSubmit={saveNewKanban}>
            <input className={'inputform'} type="text" placeholder={'Neuer Task'} value={task} onChange={ev => setTask(ev.target.value)}/>
            <input className={'inputform'} type="text" placeholder={'Beschreibung'} value={desc} onChange={ev =>setDesc(ev.target.value)}/>
            <button type={'submit'}>save</button>
        </form>
    )

}