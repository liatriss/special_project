import firebase from "../firebase";

const sectionDb = firebase.collection("/section")
const subjectDb = firebase.collection("/subjects")
const teachloadDb = firebase.collection("/loadsum")
const employeeDb = firebase.collection("/employee")
 
class GetInfo {

    getAllSection () {
        return sectionDb;
    }
    
    getAllSubject () {
        return subjectDb;
    }

    getTeachload (teacherId: string) {
        return teachloadDb.doc(teacherId).collection("teachload");
    }

    getSemester (teacherId: string) {
        return teachloadDb.doc(teacherId);
    }

    getAllTeachload () {
        return teachloadDb;
    }

    getAllTeacher () {
        return employeeDb;
    }


}

export default new GetInfo();