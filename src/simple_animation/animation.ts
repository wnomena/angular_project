//admin or member
export let bool:number[] = []
class type {
    name : String
    value : String

    constructor (a:string,b:string){
        this.name = a
        this.value = b
    }
}
//value for subscription
export let subscription_value:type[] = []
export class member_model {
    nom_complet:String
    mail : String
    mot_de_passe:String
    _id : String

    constructor(a:String,b:String,c:String, d:String){
        this._id = a
        this.nom_complet = b
        this.mail = c
        this.mot_de_passe = d
    }
}
export class commentary_model {
    _id : String
    id : Number
    mail : String
    string_commentary : String
    created : String

    constructor(a:String,b : String , c : Number , d : String , e : String) {
        this._id = a
        this.created = b
        this.id = c
        this.mail = d
        this.string_commentary = e
    }
}