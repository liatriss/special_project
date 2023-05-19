import { Component } from "react";
import { section } from "../../Props/sectionProps";
import { subject } from "../../Props/subjectProps";
import { teachLoad } from "../../Props/teachloadProbs";
import service from '../../Hooks/getInfo'
import TableHead from "./TableHead";

type Probs = {
    teacherId: any
    name: any
    roleName: any
};

type State = {
    sections: Array<section>,
    subjects: Array<subject>,
    teachloads: Array<teachLoad>,
    semester: string,
    currentIndex: number
}

class TableSubject extends Component<Probs, State> {
    
    "unsubscribeSection" : () => void;
    "unsubscribeSubject" : () => void;
    "unsubscribeTeachLoad" : () => void;
    "unsubscribeSemester": () => void;

    constructor(props: Probs) {
        super(props)
        this.onSections = this.onSections.bind(this);
        this.onSubject = this.onSubject.bind(this);
        this.onTeachload = this.onTeachload.bind(this);
        this.onSemester = this.onSemester.bind(this);

        this.state = {
            sections: [],
            subjects: [],
            teachloads: [],
            semester: '',
            currentIndex: -1
        }

        this.unsubscribeSection = () => {};
        this.unsubscribeSubject = () => {};
        this.unsubscribeTeachLoad = () => {};
        this.unsubscribeSemester = () => {};
    }

    componentDidMount() {
        this.unsubscribeSection = service.getAllSection().orderBy("subjectCode").onSnapshot(this.onSections);
        this.unsubscribeSubject = service.getAllSubject().orderBy("subjectCode").onSnapshot(this.onSubject);
        this.unsubscribeTeachLoad = service.getTeachload(this.props.teacherId).onSnapshot(this.onTeachload);
        this.unsubscribeSemester = service.getSemester(this.props.teacherId).onSnapshot(this.onSemester);
    }

    componentWillUnmount() {
        this.unsubscribeSection();
        this.unsubscribeSubject();
        this.unsubscribeTeachLoad();
        this.unsubscribeSemester();
    }

    onSections(items: any) {
        let sections = new Array<section>();

        items.forEach((item: any)=> {
            let id = item.id;
            let data = item.data();

            sections.push({
                sectionId: id,
                subjectCode: data.subjectCode,
                subjectID: data.subjectId,
                totalStudents: data.totalStudents,
                degree: data.degree,
                faculty: data.faculty,
                department: data.department,
                year: data.year,
                typeLearning: data.typeLearning,
                professor: data.professor,
                teachingWeek: data.teachingWeek
            })
        })

        this.setState({
            sections: sections
        })
    }

    onSubject(items: any) {
        let subjects = new Array<subject>();

        items.forEach((item: any)=> {
            let data = item.data();

            subjects.push({
                subjectCode: data.subjectCode,
                name: data.name,
                language: data.language,
                teachingDate: data.teachingDate
            })
        })

        this.setState({
            subjects: subjects
        })
    }

    onTeachload(items: any) {
        let teachloads = new Array<teachLoad>();

        items.forEach((item: any)=> {
            let data = item.data();

            teachloads.push({
                teacherId: data.teacherId,
                subjectId: data.subjectId,
                totalWeek: data.totalWeek,
                totalTeachload: data.totalTeachload
            })
        })

        this.setState({
            teachloads: teachloads
        })
    }

    onSemester(items: any) {
        this.setState({
            semester: items.get("semester")
        })
    }

    render () {

        const { teachloads, sections, subjects, semester } = this.state

        return (
            <>
             <TableHead teachloads={teachloads} sections={sections} subjects={subjects} semester={semester} roleName={this.props.roleName} name={this.props.name}></TableHead>
            </>
            
        )
    }

}

export default TableSubject;