//(92)Connecting to a Server
//(92.1)
import {Http} from 'angular2/http' 
//after this go Index.html and import: <script src="node_modules/angular2/bundles/http.dev.js"></script>
export class PostService{
    //Inject this Http Class into the Constructor of our Post Service
    constructor(private _http:Http){
        
    }
    getPost(){
        this._http.get("http://jsonplaceholder.typicode.com/posts")        
    }
    //testing branch
}