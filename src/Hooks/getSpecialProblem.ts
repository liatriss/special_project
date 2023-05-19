import firebase from "../firebase";
import Title from "../Props/titleProbs";

const db = firebase.collection("/loadsum");

class LoadsumService {
    getAll() {
        return db
    }

    getTitle(teacherId: string) {
        return db.doc(teacherId).collection("specialProject");
    }

    create(title : Title, teacherId: string, docId: string) {
        return db.doc(teacherId).collection("specialProject").doc(docId).set(title)
    }

    update(id: string, value: any) {
        return db.doc(id).update(value)
    }

    delete(teacherId: string, docId: string) {
        return db.doc(teacherId).collection("specialProject").doc(docId).delete()
    }
}


export default new LoadsumService();