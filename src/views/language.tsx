import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom"; 

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import Card from "../components/card";

import {ILanguage} from "../interfaces/language";

import {getLanguages, getLanguagesCategory} from "../services/languages"; 

const Language: React.FC = () => { 

    const [languages,setLanguages] = useState([]);
    const [update,setUpdate] = useState(true);
    const [cat, setCat] = useState(""); 
    const {id} = useParams(); 

    useEffect(()=>{
        if(update){
            if(id){
                getLanguagesCategory(id).then( r=>{                
                    setUpdate(false);
                    setLanguages(r.data);
                    setCat(r.data[0].category[0].name);
                });
            }else{
                getLanguages().then(r=>{              
                    setUpdate(false);
                    setLanguages(r.data);
                    setCat("Language Management");
                });
            }
        }      
    },[update, cat, id]);

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    return(
        <div>
            <Header></Header>
            <div className="container">
                <Subheader title={cat} ></Subheader>
                <div className="row text-center">
                    {languages.map((lan: ILanguage,index) => (
                        <Card 
                            title={lan.name} 
                            description={lan.description} 
                            key={lan._id} 
                            category={lan.category[0].name}
                            LanguageId={lan._id}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default Language;