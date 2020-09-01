import React from 'react'
import { Todo, ToggleTodo } from './type'
import "./TodoListItem.css"
interface TodoListitemProps {
    todo: Todo,
    toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<TodoListitemProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label className={todo.complete ? "complete" : undefined}>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo)} />
                {todo.text}
            </label>
        </li>
    )
}