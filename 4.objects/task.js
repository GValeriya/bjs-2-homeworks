function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student = new Student();

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
} 

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.hasOwnProperty('marks')){
        this.marks.push(...marksToAdd)
    }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty('marks') || 
      this.marks.length === 0) {
        return 0;
    } 

    let sum = this.marks.reduce((acc, curr) => acc + curr, 0); 
    return  sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
}
