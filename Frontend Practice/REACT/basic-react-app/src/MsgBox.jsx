function MsgBox({userName, textColor}) {
    // let styles ={color : textColor};
    return (
        <div>
           <h1 style={{color : textColor}}>Hello : {userName}</h1>
        </div>
    )  
}

export default MsgBox;