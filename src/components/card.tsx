import React from "react";
import {Link} from "react-router-dom"

interface ICardProps{
    title: string,
    description: string,
    category: string,
    btn_label?: string
    LanguageId?: string
}

const Card:React.FC<ICardProps> = ({title,description,category, btn_label, LanguageId}) => {

    return(
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <div className="card-header">
                    {category}
                </div>      
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    { btn_label ? (
                        <Link to="/languages/new">{btn_label}</Link>
                    ) : (
                        <Link to={`/languages/${LanguageId}/edit`}>Edit</Link>
                    ) }
                    
                </div>
            </div>
        </div>
    )

}

export default Card;