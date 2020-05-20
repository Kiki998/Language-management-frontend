import React from "react";

interface ISubheaderProps{
    title: string,
    deletebtn?: boolean,
    fncbtn?: () => void
}

const Subheader: React.FC<ISubheaderProps> = ({title, deletebtn,fncbtn}) => (


<header className="my-5">
    <h2 className="display-3">{title}</h2>
    {(deletebtn) && (
        <button type="button" className="btn btn-danger btn-lg" onClick={fncbtn} >Delete</button>
    )}
    
</header>

)

export default Subheader;