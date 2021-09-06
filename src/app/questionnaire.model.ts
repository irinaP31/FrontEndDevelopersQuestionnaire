export class Questionnaire {
constructor(
    firstName:string, 
    lastName:string, 
    dateOfBirth:string, 
    framework:string, 
    frameworkVersion:string, 
    email:string,
    hobbies:Array<Hobby> ){ }

}

export class Hobby {
    constructor(name:string, duration:string){}
}

// export interface HobbyDate {
//     name:string;
//     duration:string;
// }