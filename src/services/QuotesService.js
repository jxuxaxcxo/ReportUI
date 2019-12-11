
import Urls from '../config.js'

  export async function getPendingJson(){
        const response = await fetch(Urls.pendingQuotesUrl)
        const myJson = await response.json();
        
        return myJson;
 }

 export async function getSoldJson(){
  const response = await fetch(Urls.soldQuotesUrl)
  const myJson = await response.json();

  return myJson;
}