/**
 * Represents a todo item.
 */
interface ITodo {
  id: number;
  title: string;
  description?: string;
  dueDate?: string;
  priority?: string;
  completed: boolean;
}

export default ITodo;
