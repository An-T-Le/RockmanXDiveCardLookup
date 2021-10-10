import React, { useState, useEffect } from 'react';


// function onHandleChange(event,props)
// {
//     props.setSearchTerm(event.target.value);
// }

function SearchTools(props)
{
    const [searchTerm,setSearchTerm] = useState("");
    


    return (<div>
        <form onSubmit={(event) =>{
            event.preventDefault();
            props.setSearchTerm(searchTerm);
        }}>
            <label>Search</label>
            <div />
            <input type="text" name="searchTermInput" onChange={(event) => { setSearchTerm (event.target.value) }} />

        </form>
    </div>);
}

export default SearchTools;
//