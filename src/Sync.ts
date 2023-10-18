import axios, {AxiosPromise} from 'axios';

interface HasId {
    id?: string;
}

export class Sync<T extends HasId> {
    constructor(public rootUrl: string){}

    fetch(id: string): AxiosPromise{
        return axios.get(`${this.rootUrl}/${id}`); 
    }

    add(addData: T):AxiosPromise {
        return axios.post(this.rootUrl, addData);
    }

    edit(editData: T): AxiosPromise {
        return axios.put(`${this.rootUrl}/${editData.id}`, editData);
    }

    delete(id: string): AxiosPromise {
        return axios.delete(`${this.rootUrl}/${id}`);
    }
    
    collection():AxiosPromise {
        return axios.get(this.rootUrl);
    }
}