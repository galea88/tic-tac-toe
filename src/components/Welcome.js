const Welcome = (props) => {

    return(
        <>            
            <div className="row mt-4">
                <div className="col d-flex justify-content-center">
                    <h1>Tic & Tac</h1>
                </div>
            </div>    
            <div className="row mt-4">
                <div className="col d-flex justify-content-center">
                    <button className="btn btn-light" onClick={() => props.setGameStatus({status: "inProgress", reason: ""})}>Start</button>
                </div>
            </div>  
        </>              
    )

}

export default Welcome;