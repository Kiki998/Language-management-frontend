import axios from "axios";

const query: string = "http://localhost:3001"

export function getLanguages(){       
    return axios.get(`${query}/languages`);    
};

export function postLanguage(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/language`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putLanguage(id:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/language/${id}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteLanguage(id:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/language/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getLanguage(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/language/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getLanguagesCategory(id: string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/categories/${id}`)
        .then(result=>{        
            resolve(result);
        })
        .catch(error => resolve([]));
    });
}
