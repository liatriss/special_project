import {
    Card,
    Table,
    Row,
  } from "reactstrap"

import { Info } from "../../Props/info";
import { section } from "../../Props/sectionProps";
import { teachLoad } from "../../Props/teachloadProbs";
import { subject } from "../../Props/subjectProps";
import TableSection from "./TableSection";
import './Table.css'

const TableHead = ({teachloads, sections, subjects, semester, roleName, name}:  {teachloads: Array<teachLoad>, sections:  Array<section>, subjects: Array<subject>, semester: any, roleName: any, name: any}) => {

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

    return (
        <>
         {/*page content */}

         <Card>
         <div className="container card-header">
            <div className="row">
                <div className="col-sm">
                    ชื่อ: {name}
                </div>
                <div className="col-sm">
                    ตำแหน่ง: {roleName}
                </div>
                <div className="col-sm">
                    ภาคการศึกษา: {semester}
                </div>
            </div>
        </div>
        </Card>
        {/*table */}
        <Row className="mt-5">
            <div className="col">
                <br />
                <h3 className="headwork"><center>รายวิชาที่สอน</center></h3>
                <br/>

                <Card className="table table-striped">
                    <Table className="headTableSec">
                        <thead className="thead">
                            <tr>
                            <th><center>ชื่อ - รหัสวิชา</center></th>
                            <th><center>จำนวนนักศึกษาที่ลงทะเบียน</center></th>
                            <th><center>ระดับ</center></th>
                            <th><center>จำนวนชั่วโมงที่สอนต่อสัปดาห์</center></th>
                            <th><center>จำนวนชั่วโมงที่สอนต่อภาคเรียน</center></th>
                            <th><center>จำนวนภาระงานที่สอนต่อภาคเรียน</center></th>
                            <th><center>จำนวนสัปดาห์ที่สอนต่อภาคเรียน</center></th>
                            </tr>
                        </thead>
                        
                        {info && info.map((info)=> (
                            <TableSection info={info}></TableSection>))                   
                        }
                        
                    </Table>
                </Card>
            </div>
        </Row>
        </>
    );
};

export default TableHead;