import { useEffect, useState } from 'react';

const SearchBar = ({search, setSearch, maxLen, setMaxLen, clicked, setClicked, movies}) => {

    const [orderState, setOrderState] = useState('asc');

    const orderStateHandler = () => {
        setClicked(true)
        if(orderState === 'asc') {
            movies.sort((a,b) => b.length - a.length);
            setOrderState('desc');
            console.log(movies);
        } else {
            movies.sort((a,b) => a.length - b.length);
            setOrderState('asc');
            console.log(movies);
        }
    }

    const searchHandler = (e) => {
        setSearch(e.target.value);
        
    }

    const maxLenHandler = (e) => {
        setMaxLen(e.target.value);
    }

    return <>
    <label htmlFor="search">Search Query</label>
    <input type='text' name='search' onChange={searchHandler} value={search}></input>

    <label htmlFor="max-len">Max Length</label>
    <input type='number' name='max-len' onChange={maxLenHandler} value={maxLen}></input>

    <button onClick={orderStateHandler}>Change Order ({orderState})</button>
    {clicked && <table>
        <thead>
            <tr>
                <th>Title (year)</th>
                <th>Director(s)</th>
                <th>Length</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>{
            movies.map(({title, year, director, length, country}) => {

                return <tr key={`${title}${year}`}>
                    <td>{title} ({year})</td>
                    <td>{director}</td>
                    <td>{length}</td>
                    <td>{country}</td>
                </tr>
            })
            
            }</tbody>
    </table>}
    </>
}

export default SearchBar;