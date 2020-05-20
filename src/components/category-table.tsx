import React,{useState,useEffect} from "react";

import {getCategoriesWLanguages, deleteCategory} from "../services/categories";
import Modal from "./modal";
import { Link } from "react-router-dom";

const CategoryTable: React.FC = () => {

    const [categories,setCategories] = useState([]);
    const [updatedCategories,setUpdatedCategories] = useState(false);
    const [categoryId,setCategoryId] = useState("");

    /* MODAL */
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Do you want to delete?");
    const [completed,setCompleted] = useState(false);
     

    function hideModal(){
        setShowmodal(false);
    }

    function showModal(event:any){
        console.log(event.target);
        setCategoryId(event.target.id);
        setShowmodal(true);
    }      

    function drop(){

      if(!completed){

        setSubmitting(true);
        setMessage("Sending...");

        deleteCategory(categoryId).then(value=>{
            
            setCompleted(true);
            setSubmitting(false);
            if(value.successed){
                setMessage("Category deleted successfuly!");
            }else{
                setMessage("This category has languages linked, drop these ones before drop this!");
            }
        });

      }else{
        setUpdatedCategories(false);
        setCompleted(false);
        setMessage("Do you want to delete?");
        hideModal();
      }
      
    }

    /*********************** */



    useEffect(()=>{        
        if(!updatedCategories){
            getCategoriesWLanguages().then(r=>{                
                setCategories(r);
                setUpdatedCategories(true);               
            });            
        } 
    },[updatedCategories]);

    return(

        <div>
            <Modal
                title="Confirmation"
                description={message}
                lbl_main_btn="Ok"
                lbl_snd_btn="No"
                show={showmodal}
                closeModal={hideModal}
                accept={drop}
                submitting={submitting}
                completed={completed}
            />

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Languages Setted</th>
                        <th scope="col"></th> 
                        <th scope="col">  </th>            
                    </tr>
                </thead>
                <tbody>
                    { categories.map((data:any)=>(
                        <tr key={data._id} >
                            <th scope="row">{data._id}</th>
                            <td>{data.name}</td>
                            <td>{data.l.length}</td>
                            <td>
                                <button 
                                type="button" 
                                className="btn btn-danger" 
                                onClick={showModal} 
                                id={data._id}
                                >Delete</button>
                            </td>
                            <td>
                                <Link 
                                type="button" 
                                className="btn btn-success" 
                                to= {`categories/${data._id}`}
                                id={data._id}
                                >Go</Link>
                            </td>
                    </tr>
                    ))}
                                    
                </tbody>
            </table>
        </div>

        
    );
}

export default CategoryTable;
