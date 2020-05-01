export class Speech {
    id:number;   
    author: string;
    text:string;
    keywords: string;
    date:string;

    constructor(          
        author?:string,         
        text?:string,        
    ) {
     
        this.author = author;
        this.text = text;
    }
}