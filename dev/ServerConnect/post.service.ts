//(92)Connecting to a Server
//(92.1)
//after this go Index.html and import: <script src="node_modules/angular2/bundles/http.dev.js"></script>
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
//(94.1) import Injectable
import {Injectable} from 'angular2/core';
//(94.2) Use Injectable
//(96)Static type checking //Import Post interface
import {Post} from './post';
import {Observable} from 'rxjs/Observable'
@Injectable()

export class PostService{
    //Inject this Http Class into the Constructor of our Post Service
    private _url = "http://jsonplaceholder.typicode.com/posts"
    
    constructor(private _http:Http){                
    }
    //(96) make getPosts have return type of Post[]"array" 
    //(96)in order to have intelisense in app.component
    getPosts() : Observable <Post[]>{
        return this._http.get(this._url)
            //using the map method to transform the response to json objects 
            .map(res => res.json());
    }
    
    createPost(post: Post){
        this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
    //testing branch
    //testing branch1
}