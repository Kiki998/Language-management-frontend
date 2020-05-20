import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import CategoryTable from "../components/category-table"

const Categories: React.FC = () => {
    return(
        <div>
            <Header></Header>            

            <div className="container">
                <Subheader 
                    title="Category Management"                     
                />
                <div className="row">
                    <CategoryTable/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Categories;