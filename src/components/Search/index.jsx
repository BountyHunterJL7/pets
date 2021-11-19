export const Search = (props) => {
    return (
        <input name="onSearch" plaveholder = "Search by Breed" 
        type="text" onChange={props.handleSearchUpdate}/>
    )
}