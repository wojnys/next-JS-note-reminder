import React from 'react';
import {prisma} from "@/db";
import {redirect} from "next/navigation";
import Link from "next/link";
import {FormError} from "@/lib/exeptions";

const createTodo = async (data: FormData) => {
    "use server"
    const title = data.get("title")?.valueOf() as string
    if (title.length === 0) throw new FormError("Title is required")
    console.log("server", data)

    await prisma.todo.create({data: {title, description: "", action_date: new Date(), reminder_date: new Date(), complete: false}})
    redirect("/")
}

function Page() {
    return (
        <div>
            <h1 className={'text-2xl text-center'}>Create new Note</h1>
            <form action={createTodo} className="flex flex-col gap-1.5">
                <label>Title of node</label>
                <input type={"text"} name={'title'} className={'text-white bg-black border-2 border-white rounded'}/>
                <label>Description of node</label>
                <input type={"text"} name={'title'} className={'text-white bg-black border-2 border-white rounded'}/>
                <label>Action Date</label>
                <input type={"datetime-local"} name={'title'} className={'text-white bg-black border-2 border-white rounded'}/>
                <label>Reminder Date</label>
                <input type={"datetime-local"} name={'title'} className={'text-white bg-black border-2 border-white rounded'}/>
                <label>Reminder Repeat</label>
                <input type={"string"} name={'title'} className={'text-white bg-black border-2 border-white rounded'} value={"never"}/>
                <div className={"flex flex-row gap-2 mt-4"}>
                    <button type={"submit"} className={"bg-black-300 text-green-400 border-white rounded border-2 w-28 text-center p-2"}>Create</button>
                    <Link href={"/"} className={'bg-black-300 text-red-300 border-white  rounded border-2 w-28 text-center p-2'}>Back</Link>
                </div>
            </form>
        </div>
    );
}

export default Page;