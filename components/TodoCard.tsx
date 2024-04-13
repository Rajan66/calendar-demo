'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'

import type { Todo } from "./Todos"

const TodoCard = ({ completed, title, id, content, createdAt, updatedAt }: Todo) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={completed ? 'line-through' : ''}>{title}</CardTitle>
            </CardHeader>
            <CardFooter>
                <div className="flex justify-between min-w-full">
                    <Button>Update Status</Button>
                    <Button>Delete</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default TodoCard