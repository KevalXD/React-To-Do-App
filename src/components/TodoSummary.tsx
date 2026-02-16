import type { Todo } from "../type/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted
}: TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p className="text-sm text-center font-medium">
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button
                onClick={deleteAllCompleted}
                className="text-red-500 text-center hover:underline text-sm font-medium"
                >
                    Delete All Completed
                </button>
            )}
        </div>
    )
}