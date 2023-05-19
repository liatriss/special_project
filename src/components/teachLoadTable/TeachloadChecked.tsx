import TeachingWeekTable from "./TeachingWeekTable";
import CheckboxConfirm from "./checkbox"
import PrintBtn from '../PdfPrint/PdfPrint'
import DownloadButton from "../printButton/downloadButton";
import { Info } from "../../Props/info";
import { section } from "../../Props/sectionProps";
import { teachLoad } from "../../Props/teachloadProbs";
import { subject } from "../../Props/subjectProps";
import { professor } from "../../Props/sectionProps";

import { useState } from 'react';
import { Table } from "reactstrap";
import { Card } from "react-bootstrap";


let colors = ["color1", "color2", "color3", "color4", "color5"]

const Teachload = ({teachloads, sections, subjects, checked}:  {teachloads: Array<teachLoad>, sections:  Array<section>, subjects: Array<subject>, checked: boolean}) => {

    const [confirm, setConfirm] = useState('');

    const handleConfirmOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button:HTMLButtonElement = event.currentTarget;
        setConfirm(button.name);
    }

    let info = new Array<Info>();
        
        for(let i = 0; i < teachloads.length; i++) {
            for(let j = 0; j < sections.length; j++) {
             if(teachloads[i].subjectId === sections[j].subjectID){
                 for(let l = 0; l < subjects.length; l++) {
                     if(sections[j].subjectCode === subjects[l].subjectCode) {
                        info.push({
                            sectionId: sections[j].sectionId,
                            subjectID: sections[j].subjectID,
                            subjectCode: sections[j].subjectCode,
                            totalStudents: sections[j].totalStudents,
                            degree: sections[j].degree,
                            faculty: sections[j].faculty,
                            department: sections[j].department,
                            year: sections[j].year,
                            typeLearning: sections[j].typeLearning,
                            professor: sections[j].professor,
                            teachingWeek: sections[j].teachingWeek,
                            name: subjects[l].name,
                            language: subjects[l].language,
                            teachingDate: subjects[l].teachingDate,
                            totalWeek: teachloads[i].totalWeek,
                            totalTeachload: teachloads[i].totalTeachload,
                            teacherId: teachloads[i].teacherId
                        })
                     }
                 }
             }
            }
         }

    
{/*Card detail */}
    return (
    <>
    <div className="container-fluid">
    <Card>
        {info.map((info) => (
        <>
        <Table className="table table-bordered">
            <thead>
                <tr>
                    {checked ? <></>: <th scope="col-sm-8" className="text-danger">ยืนยันภาระงาน</th>}
                    <th scope="col">รายละเอียด</th>
                    {checked ? <th scope="col">report</th>: <></>}
                    
                </tr>
            </thead>
            <tbody>
            <tr>
                {checked ? <></> :
                    <th>
                    {/*checkbox */}
                    <CheckboxConfirm></CheckboxConfirm>
                    </th>
                }
                <th>
                <Card>
                    <div className="row">
                    <div className="row">
                        {/* first row */}
                        <div className="card-header">
                            <div className="row">
                                <div className="col-sm">รหัสวิชา : {info.subjectCode}</div>
                                <div className="col-sm"><h6>ชื่อวิชา : {info.name}</h6></div>
                                <div className="col-sm"> {info.typeLearning}</div>
                                <div className="col-sm">คณะ : {info.faculty}</div>
                                <div className="col-sm">สาขา : {info.department}</div>
                            </div>
                        </div>
                        {/* second row */}
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm"><td>จำนวนนักศึกษาต่อภาคเรียน : {info.totalStudents}</td></div>
                                <div className="col-sm"><td>จำนวนนักศึกษาต่อสัปดาห์ : {info.totalStudents}</td></div>
                                <div className="col-sm"><td>จำนวนสัปดาห์ที่สอนต่อภาคเรียน : {info.totalWeek}</td></div>
                                <div className="col-sm"><td>จำนวนชั่วโมงที่สอนต่อภาคเรียน : {info.totalWeek * 3}</td></div>
                            </div>
                        </div>
                        {/* third row */}
                        <div className="card-body">
                            <div className='row'>
                                <h5>อาจารย์ผู้สอน</h5><br />
                                <div className='col-sm'>
                                    <ul className='list-group row'>
                                        {info.professor && info.professor.map((professor: professor, index: number)=> (
                                            <>
                                            <li key={index} className= 'list-group-item'>
                                                <td className={colors[index] }></td>
                                                <td>{professor.name}</td>
                                            </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* table teaching week */}
                        <div className="card-body">
                            <h5>หมายเหตุ :</h5><br />
                            <Table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col-sm-8">จำนวนสัปดาห์ที่สอน(ไม่รวมสัปดาห์สอบ)</th>
                                        <th scope="col">จำนวนชั่วโมงภาระงานต่อภาคเรียน</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th colSpan={1} scope="col-sm-8">
                                        <div className="row">
                                        {info.teachingWeek?.map((teachingWeek, index) => (
                                            <>
                                                <TeachingWeekTable teachingWeek={teachingWeek} index={index}></TeachingWeekTable>
                                            </>
                                        ))}
                                        </div>
                                    </th>
                                    <th scope="col-sm-4"><p className="text-danger">{info.totalTeachload}</p></th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    </div>    
                </Card>
                </th>
                {checked ? <th><center><DownloadButton /><PrintBtn /></center></th>: <></>}
                </tr>
            </tbody>
        </Table>
        
        </>
        ))}
        </Card>
    </div>
    </>
    )
}

export default Teachload;