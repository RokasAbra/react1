function Books({ books }) {

    if (books.length === 0) {
        return <div class="lds-ripple"><div></div><div></div></div>
    }
    return (
        <>
            {
                books.map(b => <div key={b.id}>{b.title}<img src={b.img} alt="#"></img></div>)
            }
        </>
    );
}

export default Books;