import React, { ChangeEvent, Component} from 'react'
import "firebase/database";
import Title from '../Props/titleProbs';
import service from "../Hooks/getSpecialProblem"
import "../App.css"
import LoadCheck from '../interfaces/loadCheck';

type Probs = {
  teacherId: any,
  roleName: any,
  name: any
};

type State = Title & {
  submitted: boolean;
  firstName: string,
  addStudent: boolean,
  firstName2: string, 
  fName: string, 
  addAdvisor: boolean
  fName2: string,
}

class Form extends Component<Probs, State> {

 constructor(probs: Probs) {
  super(probs);
  this.handleOnChange = this.handleOnChange.bind(this);
  this.handleAdvisorName2OnChange = this.handleAdvisorName2OnChange.bind(this);
  this.handleAdvisorNameOnChange = this.handleAdvisorNameOnChange.bind(this);
  this.handleDegreeOnChange = this.handleDegreeOnChange.bind(this);
  this.handleStudentName2OnChange = this.handleStudentName2OnChange.bind(this);
  this.handleStudentNameOnChange = this.handleStudentNameOnChange.bind(this)
  this.saveTitle = this.saveTitle.bind(this);
  this.newTitle = this.newTitle.bind(this);
  this.newStudent = this.newStudent.bind(this);
  this.newAdvisor = this.newAdvisor.bind(this);

  this.state = {
    id: '',
    title: '',
    degree: '',
    studentName: [],
    advisorName: [],
    submitted: false,
    firstName: '', 
    addStudent: true,
    firstName2: '', 
    fName: '',
    addAdvisor: true,
    fName2: '',
  }
 }

  handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: event.target.value
    })
  }

  handleDegreeOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      degree: event.target.value
    })
  }

  handleStudentNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleAdvisorNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      fName: event.target.value
    })
  }


  handleStudentName2OnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      firstName2: event.target.value
    })
  }

  handleAdvisorName2OnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      fName2: event.target.value
    })
  }

  saveTitle () {
    let student = [
      {
        name: this.state.firstName,
      },
      {
        name: this.state.firstName2,
      },
    ]

    let advisor = [
      {
        name: this.state.fName,
      },
      {
        name: this.state.fName2,
      },
    ]

    

    let data = {
      id: this.state.id,
      title: this.state.title,
      degree: this.state.degree,
      studentName: student,
      advisorName: advisor
    };

    service.create(data, this.props.teacherId, data.id).then(() => {
      this.setState({
        submitted: true
      });
    }).catch((e: Error)=> {
      console.log(e);
    })
  }

  newStudent () {
    this.setState({
      addStudent: false
    })
  }

  newAdvisor () {
    this.setState({
      addAdvisor: false
    })
  }

  newTitle() {
    this.setState({
      title: '',
      degree: '',
      studentName: [],
      advisorName: [],
      submitted: false,
      firstName: '',
      firstName2: '', 
      addStudent: true,
      fName: '',
      fName2: '',
      addAdvisor: true
    })
  }

/* Content */
  render () {
    return (
      <>
      <div className='submit-form element'>
        {this.state.submitted ? (
          <div>
            <LoadCheck teacherId={this.props.teacherId} roleName={this.props.roleName} name={this.props.name}/>
          </div>
        ):(
          <div>
            <div className='form-group'>
              <label htmlFor='title'>ชื่อปัญหาพิเศษ</label>
              <input 
                type="text"
                className='form-control'
                id='title'
                required
                value={this.state.title}
                onChange={this.handleOnChange}
                name="title"
              ></input>
            </div>
            <div className='form-group'>
              <label htmlFor='title'>ลำดับ</label>
              <input 
                type="text"
                className='form-control'
                id='title'
                required
                value={this.state.degree}
                onChange={this.handleDegreeOnChange}
                name="title"
              ></input>
            </div>
            <div className='row'>
              <div className='col-sm'>
                <div className='form-group'>
                  <label htmlFor='title'>ชื่อนักศึกษา</label>
                  <input 
                    type="text"
                    className='form-control'
                    id='title'
                    required
                    value={this.state.firstName}
                    onChange={this.handleStudentNameOnChange}
                    name="title"
                  ></input>
                </div>
              </div>
            </div>
            <div>
              {this.state.addStudent ? (
                <div className='element'>
                  <button className='btn btn-success' onClick={this.newStudent}>Add</button>
                </div>
              ):(
            <>
            <div className='row'>
              <div className='col-sm'>
                <div className='form-group'>
                  <label htmlFor='title'>ชื่อนักศึกษา 2</label>
                  <input 
                  type="text"
                  className='form-control'
                  id='title'
                  required
                  value={this.state.firstName2}
                  onChange={this.handleStudentName2OnChange}
                  name="title"
                  ></input>
                </div>
              </div>
            </div>
                </>
          )}
          </div>
            <div className='row'>
              <div className='col-sm'>
                <div className='form-group'>
                  <label htmlFor='title'>ชื่อที่ปรึกษา</label>
                  <input 
                  type="text"
                  className='form-control'
                  id='title'
                  required
                  value={this.state.fName}
                  onChange={this.handleAdvisorNameOnChange}
                  name="title"
                  ></input>
                </div>
              </div>
            </div>
            <div>
                {this.state.addAdvisor ? (
                  <div className='element'>
                    <button className='btn btn-success' onClick={this.newAdvisor}>Add</button>
                  </div>
                ):(
                <>
            <div className='row'>
              <div className='form-inline'>
                <div className='form-group'>
                  <label htmlFor='title'>ชื่อที่ปรึกษา 2</label>
                  <input 
                  type="text"
                  className='form-control'
                  id='title'
                  required
                  value={this.state.fName2}
                  onChange={this.handleAdvisorName2OnChange}
                  name="title"
                  ></input>
                </div>
              </div>
            </div>
            </>
          )}
          </div>
          <center>
          <button onClick={this.saveTitle} className='btn btn-success'> Submit </button>
          </center>
          </div>
        )}
      </div>
      </>
    )
  }
  

}

export default Form