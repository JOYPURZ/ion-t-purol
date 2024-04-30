import React, { useState, useEffect, useRef } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonTextarea,
  useIonToast
} from '@ionic/react';
//Ionicons
import { trashOutline, pencilOutline } from 'ionicons/icons';

import './notes.css';

// Firebase
import { collection, addDoc, onSnapshot,updateDoc,doc, deleteDoc} from 'firebase/firestore';
import { db } from './firebase';

const Notes: React.FC = () => {
  const [notes, readNotes] = useState<{ id: string; title: string; description: string;dateAdded: string; }[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const inputRefTitle = useRef<HTMLIonInputElement>(null);
  const inputRefDescription = useRef<HTMLIonTextareaElement>(null);
  const [present] = useIonToast();

  // Clear the input field
  const clearInput = () => {
    setNewTitle('');
    setNewDescription('');
    if (inputRefTitle.current && inputRefDescription.current) {
      inputRefTitle.current.setFocus();
    }
  };

  // Toast
  const addNoteToast = (position: 'middle') => {
    present({
      message: 'Added new Note',
      duration: 1500,
      position: position,
    });
  };

  const editNoteToast = (position: 'middle') => {
    present({
      message: 'Changes Saved',
      duration: 1500,
      position: position,
    });
  };

  const deleteNoteToast = (position: 'middle') => {
    present({
      message: 'Note deleted',
      duration: 1500,
      position: position,
    });
  };

  //Create Note
  const addNote = async () => {
    if (newTitle.trim() !== '') {
      if (editIndex !== null) {
        // Update existing note (not implemented in this code snippet)
      } else {
        const currentDate = new Date().toISOString(); 
        addNoteToast('middle');
        await addDoc(collection(db, 'notes'), {
          title: newTitle,
          description: newDescription,
          dateAdded: currentDate
        });
        
      }
      clearInput();
    }
  };

  //Read Firebase Data
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'notes'), (snapshot) => {
      readNotes(snapshot.docs.map(doc => ({
        id: doc.id, // Include the id property
        description: doc.data().description,
        title: doc.data().title,
        dateAdded: doc.data().dateAdded
      })));
    });
    return () => unsubscribe();
  }, []);

// Edit Handler
const editNote = (index: number) => {
  setEditIndex(index);
  const editedNote = notes[index];
  setNewTitle(editedNote.title);
  setNewDescription(editedNote.description);
};

// Update Firebase Data
const updateNote = async () => {
  if (editIndex !== null) {
    editNoteToast('middle');
    const noteToUpdate = notes[editIndex];
    await updateDoc(doc(db, 'notes', noteToUpdate.id), {
      title: newTitle,
      description: newDescription,
    });
    // Clear the input fields and reset editIndex
    clearInput();
    setEditIndex(null);
  }
};

//Cancel Edit function
const cancelEdit = () => {
  clearInput(); // Clear input fields
  setEditIndex(null); // Reset editIndex
};

// Delete Firebase Data
const deleteNote = async (index: number) => {
  deleteNoteToast('middle');
  const noteToDelete = notes[index];
  // Delete note from Firestore
  await deleteDoc(doc(db, 'notes', noteToDelete.id));
};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill="clear" href='/'>
            Back
          </IonButton>
          <IonTitle>Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonInput
                placeholder="Type something here"
                label="Title"
                id="custom-input"
                labelPlacement="floating"
                counter={true}
                maxlength={50}
                counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} / ${maxLength} characters remaining`}
                value={newTitle}
                onIonInput={(e) => setNewTitle(e.detail.value!)}
                ref={inputRefTitle}
              ></IonInput>
            </IonCardTitle>
            <IonCardSubtitle>
              <IonTextarea 
                placeholder="Type something here"
                label="Description"
                id="custom-input"
                labelPlacement="floating"
                counter={true}
                maxlength={200}
                counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} / ${maxLength} characters remaining`}
                value={newDescription}
                onIonInput={(e) => setNewDescription(e.detail.value!)}
                ref={inputRefDescription}
              ></IonTextarea>
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonRow>
              <IonCol>
                <IonButton expand="block" onClick={editIndex !== null ? updateNote : addNote}>
                  {editIndex !== null ? 'Update' : 'Add'}
                </IonButton>
              </IonCol>
              <IonCol> 
                <IonButton expand="block" fill="clear" onClick={editIndex !== null ? cancelEdit : clearInput}>
                  {editIndex !== null ? 'Cancel' : 'Clear'}
                </IonButton>
              </IonCol>
            </IonRow>      
          </IonCardContent>
        </IonCard>
        {/*Todo list output*/}
        <br></br>
        <IonItemDivider color="light">
          <IonLabel>Notes</IonLabel>
        </IonItemDivider>
        <IonList>
          {notes
            .slice() // Create a shallow copy of the notes array to avoid mutating the original array
            .sort((a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()) // Sort the array by dateAdded
            .map((note, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{note.title}</h2>
                <p>{note.description}</p>
                <p>{new Date(note.dateAdded).toLocaleString()}</p>
              </IonLabel>
              <IonButton fill="clear" onClick={() => editNote(index)}>
                <IonIcon icon={pencilOutline} />
              </IonButton>
              <IonButton fill="clear" onClick={() => deleteNote(index)}>
                <IonIcon icon={trashOutline} />
              </IonButton>
            </IonItem>
          ))}
        </IonList> 
      </IonContent>
    </IonPage>
  );
};

export default Notes;