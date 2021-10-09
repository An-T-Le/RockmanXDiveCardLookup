import React, {useState} from 'react';
function SearchTools()
{
const [searchTerm, setSearchTerm] = useState(0);

return(<div>
    <form>
    <label>Search
    <input type="text" name="searchTermInput"/>
    </label>
    <input type="submit" value="Submit"/>
    </form>
</div>);
}
export default SearchTools;