import Link from "next/link";
import {prisma} from "@/db";
import TodoItem from "@/app/components/TodoItem";

const toggleTodo = async (id:string, complete:boolean) => {
    'use server'

    await prisma.todo.update({where: {id}, data: {complete}})
}

export default async function Home() {

    const todos = await prisma.todo.findMany();
    return (
       <>
           <header className={"flex justify-between items-center mb-4"}>
               <h1>Reminder App</h1>
               <Link href={"/new"} className={'border rounded accent-slate-50 p-3'}>New page</Link>
           </header>
           <ul>
               {todos.map((todo) => (
                   <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
               ))}
           </ul>
       </>
  );
}
