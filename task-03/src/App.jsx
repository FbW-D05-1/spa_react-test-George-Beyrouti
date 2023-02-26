import React from "react";
import { useState, useEffect} from "react";
import uuid from "react-uuid";


function App() {
    const [ data, setData ] = useState([]);


    const getData = () =>
    {

        fetch("https://anapioficeandfire.com/api/books")
        .then(response => response.json())
        .then(json =>
        {
            console.log(json);
            setData(json);

        });
    }

    useEffect(() =>
    {
        getData();
    }, []); 

    return (
        <div className="App">
            <h1>Fetch results</h1>

            <button onClick={ () => getData() }>Load the result</button>
          <div>
            {  data.map((book)=> (
                      <div key={uuid()}>
                        <h1>{ book.name }</h1> 

                        <h3>for more details : <a href={book.url}>click here</a></h3>
                        
                        <h3>number of pages : {book.numberOfPages}</h3> 

                        <h3>publisher : {book.publisher}</h3>

                        <h3>released : {book.released}</h3>





                        </div>) 


                            


              
                
              
            )
            }
</div>
          </div>
            
)}

export default App;
