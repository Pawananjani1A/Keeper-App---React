import React,{useState} from "react";
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import notes from '../notes';
import CreateArea from './createArea';




function App()
{  

    const [Oldnotes,setNotes] = useState([]);

    function addNote(newNote)
    {
    //   console.log(note);
       setNotes(prevNotes=>{
             return [
                 ...prevNotes,newNote
             ];
       });
    }

    function deleteNote(id)
    {  
        // console.log("Delete was triggered");
        setNotes(prevNotes=>{
         return prevNotes.filter((currNote,index)=>{
             return index !== id ;
         });
        });
    }
 

    return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {Oldnotes.map((notesItem,index) => <Note
            
            key={index}
            id={index}
            title={notesItem.title}
            content={notesItem.content}
            onChecked={deleteNote}
        />)}
        <Footer />
    </div>
}

export default App;