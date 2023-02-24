import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onToggleDone,
  onSave,
  onDelete,
  OnChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            onSave={({ id, title }) => onSave?.({ id, title })}
            key={todos.id}
            onToggleDone={(id) => onToggleDone?.(id)}
            OnChangeMode={({ id, isEdit }) => OnChangeMode?.({ id, isEdit })}
            onDelete={(id) => onDelete?.(id)}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
