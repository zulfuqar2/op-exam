class Students{
    constructor(fullname,id){
        this.fullname =fullname;
        this.id =id;
    }updateName(newName){
        this.fullname =newName
    }

}


class Group {
    constructor() {
      this.students = [];
      this.nextId = 1;
    }
  
    addStudent(name) {
      const student = {
        name: name,
        id: this.nextId
      };
      this.students.push(student);
      this.nextId++;
      return student.id;
    }
  
    getStudentById(id) {
      return this.students.find(student => student.id === id);
    }
  
    getAllStudents() {
      return this.students;
    }

    removeStudents(name,nextId){
        const byId = this.students.find.byId(student => student.id === id);{
            if(byId !==0){
                this.students.splice(byId,1);
                return ;
            }
        }
    }
  }

class Faculity{

}

