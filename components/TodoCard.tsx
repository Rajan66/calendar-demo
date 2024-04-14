'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useToast } from "./ui/use-toast"
import axios from "axios"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'

import type { Todo } from "./Todos"


const TodoCard = ({ completed, title, id, content, createdAt, updatedAt }: Todo) => {

    const { toast } = useToast()
    const queryClient = useQueryClient()


    const { mutate: deleteTask, isPending: deleteLoading } = useMutation({
        mutationFn: async () => await axios.delete(`http://127.0.0.1:8090/api/collections/Notes/records/${id}`),
        onSuccess: () => {
            toast({ description: 'Task deleted successfully!' })
            queryClient.invalidateQueries({ queryKey: ['userTodos'] })
        },
        onError: () => {
            toast({ description: 'There was an error.' })
        }
    }
    )


    const { mutate: updateTask, isPending: updateLoading } = useMutation({
        mutationFn: async () => await axios.patch(`http://127.0.0.1:8090/api/collections/Notes/records/${id}`, { completed: !completed }),
        onSuccess: () => {
            toast({ description: 'Task status updated' })
            queryClient.invalidateQueries({ queryKey: ['userTodos'] })
        },
        onError: () => {
            toast({ description: 'There was an error.' })
        }
    }
    )

    return (
        <Card>
            <CardHeader>
                <CardTitle className={completed ? 'line-through' : ''}>{title}</CardTitle>
                <CardContent>{content}</CardContent>
            </CardHeader>
            <CardFooter>
                <div className="flex justify-between min-w-full">
                    <Button onClick={() => updateTask()} disabled={updateLoading}>Update Status</Button>
                    <Button onClick={() => deleteTask()} disabled={deleteLoading}>Delete</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default TodoCard