import { Observer } from "rxjs"

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
    identifiant : Number
    name : String
    about_all_road : String
    presentation_image : String
    price : number
    period : string

    constructor(a:Number,b : String, c: String, d : String,e:number,f : string){
        this.identifiant = a
        this.name = b
        this.about_all_road = c
        this.presentation_image = d
        this.price = e
        this.period = f
    }
}
export class fetch {
    message : String
    data : parent_road_list[]

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
export function Month(number : number) {
    if(number == 1) return "Janv"
    else if(number == 2) return "Fev"
    else if(number == 3) return "Mar"
    else if(number == 4) return "Avr"
    else if(number == 5) return "Mai"
    else if(number == 6) return "Juin"
    else if(number == 7) return "Juil"
    else if(number == 8) return "Aout"
    else if(number == 9) return "Sept"
    else if(number == 10) return "Oct"
    else if(number == 11) return "Nov"
    else if(number == 12) return "Dec"
    else return false
}
export function inversed_month(month : string) {
    if(month == "Janv") return 1
    else if(month == "Fev") return 2
    else if(month == "Mar") return 3
    else if(month == "Avr") return 4
    else if(month == "Mai") return 5
    else if(month == "Juin") return 6
    else if(month == "Juil") return 7
    else if(month == "Aout") return 8
    else if(month == "Sept") return 9
    else if(month == "Oct") return 10
    else if(month == "Nov") return 11
    else if(month == "Dec") return 12
    else return false
}
export class indexedDB_model {
    identifiant : number
    data : parent_road_list[]

    constructor(a:number,b : parent_road_list[] ) {
        this.identifiant = a
        this.data = b
    }
}
class like {
    mail : string
    constructor(a:string) {
        this.mail = a
    }
}
export class child_road_list {
    name : string
    description : string
    distance : number
    presentation_image : string
    sejour_delay : string
    price : number
    difficulty : number
    like_by_membes : like[]
    confort : number

    constructor(a:string,b : string, c: number, d : string, e : string, f : number,g : number,h : like[],i : number) {
        this.name = a
        this.description = b
        this.distance = c
        this.presentation_image = d
        this.sejour_delay = e
        this.price = f
        this.difficulty = g
        this.like_by_membes = h
        this.confort = i
    }
}
export class fetch_clild_road {
    message : string
    data : child_road_list[]
    
    constructor(a : string,data : child_road_list[]) {
        this.message = a
        this.data = data
    }
}
export class fetch_clild_road_2 {
    message : string
    data : child_road_list
    
    constructor(a : string,data : child_road_list) {
        this.message = a
        this.data = data
    }
}