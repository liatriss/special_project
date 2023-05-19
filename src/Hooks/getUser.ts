import firebase from "../firebase";

const userDb = firebase.collection("/employee")
const roleDb = firebase.collection("/employeeRole")

class GetUser {
    getUserDetail(uid: string) {
        return userDb.doc(uid);
    }

    getUserRole() {
        return roleDb;
    }
}

export default new GetUser();