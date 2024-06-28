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