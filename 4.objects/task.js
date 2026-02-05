function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.subject.hasOwnProperty('marks')) {
        this.subject.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (!this.subject.hasOwnProperty('marks') && 
      this.marks.length === 0) {
        return 0;
    } 

    let sum = marks.reduce((acc, curr) => acc + curr, 0); 
    this.subject.getAverage = sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}
