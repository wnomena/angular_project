class presentation_image {
    image:String;
    file_name:String;
    extension_file_name:String;
    constructor(a:String,b:String,c:String) {
        this.image = a
        this.file_name = b
        this.extension_file_name = c
    }
}
export class model_parent_road {
    identifiant:Number;
    name : String;
    about_all_road:String;
    presentation_image: presentation_image[]

    constructor(a:Number,b:String,c:String,d:presentation_image[]){
        this.identifiant = a
        this.name = b
        this.about_all_road = c
        this.presentation_image = d

    }
}