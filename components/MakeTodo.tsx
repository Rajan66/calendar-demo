'use client'

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import axios from "axios"
import { useToast } from "./ui/use-toast"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"


const MakeTodo = () => {

    const [input, setInput] = useState('')
    const queryClient = useQueryClient()
    const { toast } = useToast()

    const { mutate: submitTodo, isPending } = useMutation({
        mutationFn: async () => await axios.post("http://127.0.0.1:8090/api/collections/Notes/records", { title: input, content: input }),
        onSuccess: () => {
            toast({ description: 'Todo added successfully!' })
            setInput('')
            queryClient.invalidateQueries({ queryKey: ['userTodos'] })
        },
        onError: () => {
            toast({ description: 'Something went wrong, try again', variant: "destructive" })
        }
    })



    return (
        <div className="flex gap-2 min-w-full">
            <Input
                placeholder="to do.."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isPending}
            />
            <Button
                onClick={() => submitTodo()}
                
                disabled={isPending}
            >Submit</Button>
        </div>
    )
}

export default MakeTodo