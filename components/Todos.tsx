'use client'

import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

import TodoCard from "./TodoCard";

export interface Todo {
    id: number;
    completed: boolean;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
}


const Todos = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["userTodos"],
        queryFn: async () => {
            const { data } = await axios.get('http://127.0.0.1:8090/api/collections/Notes/records')
            return data.items as Todo[]
        }
    })

    if (isLoading) return <div>Loading tasks... </div>

    if (isError) return <div> There was an error, try again</div>

    return (
        // have the component fetch data for todos
        // if loading render a loading screen
        // if error, render an error message
        // render todos
        <div className="flex flex-col gap-2">
            {data?.map((todo) => (
                <TodoCard {...todo} />
            ))}
        </div>

    )
}

export default Todos