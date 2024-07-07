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
class presentation_image {
    image : String
    file_name : String
    extention_file_name : String
    constructor(a:String,b:String,c:String){
        this.image = a
        this.file_name = b
        this.extention_file_name = c
    }
}
export class parent_road_list {
    id : Number
    name : String
    about_all_road : String
    presentation_image : presentation_image[]
    price : number
    difficult : number
    period : string

    constructor(a:Number,b : String, c: String, d : presentation_image[],e:number,f:number,g:string){
        this.id = a
        this.name = b
        this.about_all_road = c
        this.presentation_image = d
        this.price = e
        this.difficult = f
        this.period = g
    }
}
export class fetch {
    message : String|undefined
    data : parent_road_list[] | undefined

    constructor(a:String,data : parent_road_list[]){
        this.message = a
        this.data = data
    }
}
class image {
    name : string
    image: string
    constructor(a:string,b:string) {
        this.image = a
        this.name = b
    }
}
export function Form_data(e:HTMLInputElement) {
let Form_data = new FormData()
if(e.files) Form_data.append("image",e.files[0])
return Form_data
}