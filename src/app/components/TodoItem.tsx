'use client'
import React from 'react';

type TodoItemProps = {
    id: string,
    title: string,
    description: string,
    action_date: Date,
    reminder_date: Date,
    complete: boolean,
    toggleTodo: (id:string, complete:boolean) => void

}
function TodoItem({id, title, description, action_date, reminder_date, complete, toggleTodo}: TodoItemProps) {
    return (
        <li className={"flex gap-1 items-center"}>
            <input id={id} type={"checkbox"} className={"cursor-pointer peer"} defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
            <label htmlFor={id} className={"peer-checked:line-through cursor-pointer peer-checked:text-slate-400"}>{title}</label>
        </li>
    );
}

export default TodoItem;