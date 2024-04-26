import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonBackButton, IonButtons, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonIcon } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="10">
              <IonInput
                placeholder="Add a new todo"
                value={newTodo}
                onIonChange={e => setNewTodo(e.detail.value!)} // Use ! to assert non-null
              />
            </IonCol>
            <IonCol size="2">
              <IonButton expand="block" color="danger" onClick={addTodo}>Add</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          {todos.map(todo => (
            <IonItem key={todo.id}>
              <IonLabel style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</IonLabel>
              <IonCheckbox slot="start" checked={todo.completed} onIonChange={() => toggleTodo(todo.id)} />
              <IonIcon slot="end" icon={trashOutline} onClick={() => deleteTodo(todo.id)} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TodoList;
