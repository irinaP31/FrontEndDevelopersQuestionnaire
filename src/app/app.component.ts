import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";
import { MyValidators } from './my.validators';
import { QuestionnaireService } from './questionnaire.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'questionnaire';
  constructor(private fb: FormBuilder,
              private questionnaireService: QuestionnaireService) { }

  form: FormGroup;
  versionJSTech: string[];
  selectFilled = false;
  hobbyFilled = false;

  ngOnInit() {
    this.form = this.fb.group({
      userFirstname: ['', Validators.required],
      userLastname: ['', Validators.required],
      userBirthday: ['', Validators.required],
      jsTechnology: ['', Validators.required],
      version: ['', Validators.required],
      userEmail: ['', [Validators.email, Validators.required], MyValidators.uniqueEmail],
      hobbies: this.fb.array([
      ])
    });
    this.addHobbies();
  }

  onSubmit() {
    let data: string;
    data = this.questionnaireService.transformDate(this.form.value.userBirthday);
    if (this.form.controls.hobbies.value.length == 0 || this.form.invalid) {
      this.hobbyFilled=true;
      this.addHobbies();
    } else {
      this.hobbyFilled=false;
      console.log(this.questionnaireService.formationQuestionnaire(this.form.value.userFirstname,
                                                                  this.form.value.userLastname,
                                                                  data,
                                                                  this.form.value.jsTechnology,
                                                                  this.form.value.version,
                                                                  this.form.value.userEmail,
                                                                  this.form.value.hobbies

      ));
      this.form.reset();
    }
  }

  select() {
    const versions: { [key: string]: string[] } = {
      angular: ['1.1.1', '1.2.1', '1.3.3'],
      react: ['2.1.2', '3.2.4', '4.3.1'],
      vue: ['3.3.1', '5.2.1', '5.1.3'],
    }
    const jsTech: string = this.form.get('jsTechnology').value;
    this.versionJSTech = versions[jsTech];
    this.selectFilled = true;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
    })
  }

  addHobbies() {
    (<FormArray>this.form.controls["hobbies"]).push(this.newSkill());
  }

  clear(i: number) {
    (<FormArray>this.form.controls["hobbies"]).removeAt(i);
  }

  getFormsControls(): FormArray {
    return this.form.controls['hobbies'] as FormArray;
  }

  onChange(){
    this.hobbyFilled = false;
  }
}
