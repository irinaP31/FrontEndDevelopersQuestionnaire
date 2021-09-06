import { Injectable } from '@angular/core';
import { Questionnaire, Hobby } from './questionnaire.model';

@Injectable({
    providedIn: 'root'
})
export class QuestionnaireService {

    // formationHobbies(hobbies: Array<HobbyDate>): Array<Hobby> {
    //     let arr = [];
    //     let obj: Hobby;
    //     for (let i = 0; i < hobbies.length; i++) {
    //         obj = new Hobby(hobbies[i].name, hobbies[i].duration);
    //         console.log(obj)
    //         arr.push(obj);
    //     };
    //     return arr;
    // }

    transformDate(data:Date):string{
        return data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
    }

    formationQuestionnaire(firstName:string, 
                            lastName:string, 
                            dateOfBirth:string, 
                            framework:string, 
                            frameworkVersion:string, 
                            email:string,
                            hobby:Array<Hobby>):Questionnaire {
        return {
            firstName,
            lastName,
            dateOfBirth,
            framework,
            frameworkVersion,
            email,
            hobby
        }
    }
}