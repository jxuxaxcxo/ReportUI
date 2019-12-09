
import Url from '../config.js'

  export async function getJson(){
        const response = await fetch(Url)
        const myJson = await response.json();

        return myJson;
     }