import { Component } from "react";
import Title from "../Props/titleProbs";
import service from '../Hooks/getSpecialProblem'
import Table from 'react-bootstrap/Table';
import '../components/loadCheckTable/Table.css'
import Modal from "react-bootstrap/Modal";
import "../components/teachLoadTable/Modal.css"
import Form from "./Form"

type Probs = {
    teacherId: any,
    roleName: any,
    name: any,
};

type State = {
    titles: Array<Title>,
    currentTitle: Title | null,
    showModel: boolean
}

class List extends Component<Probs, State>{

    "unsubscribe": () => void;

    constructor(props: Probs) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        

        this.state = {
            titles: [],
            currentTitle: null,
            showModel: false
        }

        this.unsubscribe = () => {};
    }

    componentDidMount(){
        this.unsubscribe = service.getTitle(this.props.teacherId).orderBy("title", "asc").onSnapshot(this.onDateChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onDateChange(items: any) {
        let titles = new Array<Title>();

        items.forEach((item: any)=> {
            let data = item.data();
            titles.push({
                id: item.id,
                title: data.title,
                degree: data.degree,
                studentName: data.studentName,
                advisorName: data.advisorName,
            })
        })
        
        this.setState({
            titles: titles
        })
    }

    refreshList() {
        this.setState({
            currentTitle: null,
        })
    }

    setTitle(titles: Title) {
        this.setState({
            currentTitle: titles
        })
    }

    handleDelete (teacherId: any, docId: any){
        service.delete(teacherId, docId);
    }

    render() {

        const { titles} = this.state;

        const renderBackdrop = (props: any) => <div className="backdrop" {...props} />
    
        let handleClose = () => {
            this.setState({
                showModel: false
            })
        }

        return (
            <>
                <div className="tablespe element">
                <div className="headspe">
                <br />
                <center>รายชื่อปัญหาพิเศษ, โครงการพิเศษ, วิทยานิพนธ์</center>
                <br />
                </div>
                <Table bordered hover size="sm">
                    <tbody>
                        <tr className="headtablespe">
                            <td>ชื่อหัวข้อ</td>
                            <td>ระดับ</td>
                            <td>ชื่อนักศึกษา</td>
                            <td>ที่ปรึกษา</td>
                            <td>แก้ไข/ลบ</td>
                        </tr>
                        {titles && titles.map((titles, index)=> (
                            <tr key={index}>
                            <td >{titles.title}</td>
                            <td >{titles.degree}</td>
                            <td >{titles.studentName.map((studentName)=> (
                               <ul>  {studentName.name} </ul> ))}</td>
                            <td >{titles.advisorName.map((advisorName)=> (
                                <ul>{advisorName.name} </ul>))}</td>
                            <td >
                                <button onClick={()=> this.handleDelete(this.props.teacherId,titles.id)}>ลบ</button>/
                                <button>แก้ไข</button>
                            </td> 
                            </tr>
                            
                            ))} 
                    </tbody>
                </Table>
                <div className="row justify">
                    <button className="button-add" onClick={() => this.setState({showModel: true})}>เพิ่มหัวข้อ</button>
                </div>
            </div>

            <Modal
                show={this.state.showModel}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}
                fullscreen={true}
            >
                <Modal.Header>
                    <Modal.Title>ปัญหาพิเศษ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form teacherId={this.props.teacherId} roleName={this.props.roleName} name={this.props.name}/>
                </Modal.Body>
                <Modal.Footer>
                    <div className="justify"><button className="button" onClick={handleClose}>ปิด</button> </div>
                </Modal.Footer>
            </Modal>
            </>
        ) //close return
        } //render
} //class

export default List;
