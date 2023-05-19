
import { Component } from "react";
import service from '../../Hooks/getInfo'
import TableDetail from "./TableDetail";
import { teachloadChecked } from "../../Props/teachloadProbs";

type Probs = {
    roleId: any
};

type State = {
    teachloads: Array<teachloadChecked>,
    teachers: Array<any>,
    currentIndex: number
}

class TableHead extends Component<Probs, State> {
    
    "unsubscribeTeachLoad" : () => void;
    "unsubscribeTeacher": () => void;

    constructor(props: Probs) {
        super(props)
        this.onTeachload = this.onTeachload.bind(this);
        this.onTeacher = this.onTeacher.bind(this);

        this.state = {
            teachloads: [],
            teachers: [],
            currentIndex: -1
        }

        this.unsubscribeTeachLoad = () => {};
        this.unsubscribeTeacher = () => {};
    }

    componentDidMount() {
        this.unsubscribeTeachLoad = service.getAllTeachload().onSnapshot(this.onTeachload);
        this.unsubscribeTeachLoad = service.getAllTeacher().onSnapshot(this.onTeacher);
    }

    componentWillUnmount() {
        this.unsubscribeTeachLoad();
        this.unsubscribeTeacher();
    }

    onTeacher(items: any) {
      let teachers = new Array<any>();

      items.forEach((item: any) => {
        let data = item.data();

        teachers.push({
          teacherId: data.teacherId,
          name: data.name
        })
      })

      this.setState({
        teachers: teachers
      })
    }


    onTeachload(items: any) {
        let teachloads = new Array<teachloadChecked>();

        items.forEach((item: any)=> {
            let data = item.data();
            let id = item.id;

            teachloads.push({
                teacherId: id,
                name: '',
                financeChecked: data.financeChecked,
                headOfTeacherChecked: data.headOfTeacherChecked,
                regChecked: data.regChecked,
                teacherChecked: data.teacherChecked,
                hrChecked: data.hrChecked
            })
        })

        this.setState({
            teachloads: teachloads
        })
    }

    render() {

        const { teachloads, teachers} = this.state

        return (
            <>
            <TableDetail  teachers={teachers} teachloads={teachloads} roleId={this.props.roleId} ></TableDetail>
            </>
        )
        
    }
}

export default TableHead;