const Items = ({title}) => {


    return(
        {
            items.map((item)) => (
        
        <div className = "col-sm-10" key={item.id}>
            <h1>Roster Generator</h1>
            <p>{item.day}</p>
            <div className="row item">
                <div className = "col-sm-3">
                    Imagen
                </div>
                <div className = "col-sm-8">
                {item.title} - {item.category}
                </div>
                <div className = "col-sm-1">
                    Eliminar
                </div>
            </div>
        </div>
    )
        }
    </>
    )
}

export default Items