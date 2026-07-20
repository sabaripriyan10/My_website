function NavBar({setPage}){
    return(
        <pre>
            <button onClick={() => setPage("Header")}>Header</button> <button onClick={() => setPage("movies")}>Movies</button>
        </pre>
    );
}
export default NavBar;