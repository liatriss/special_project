import { useState } from 'react';
import { Table } from 'react-bootstrap';
import CheckBox from './CheckBox';
import { professor, teachingWeek } from '../../Props/sectionProps';
import './Table.css'
import '../teachLoadTable/TeachingWeekTable'

let colors = ["color1", "color2", "color3", "color4", "color5"]

export const TableRow = ({info}:{info: any}) => {
  
  const [ allSelect, setAllSelect ] = useState(false);
  const [ someSelect, setSomeSelect] = useState(false);
  const [ checkedBoxs, setCheckedBox] = useState(
    new Array(info.teachingWeek.length).fill(false)
  );

  const handleAllSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllSelect(event.target.checked)
    setSomeSelect(!event.target.checked)
    let tempCheckedBox = checkedBoxs.map(()=> {
      return {...info.teachingWeek, isChecked: true}
    })
    setCheckedBox(tempCheckedBox);
  }

  const handleSomeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSomeSelect(event.target.checked)
    setAllSelect(!event.target.checked);
    setCheckedBox(new Array(info.teachingWeek.length).fill(false));
  }

  const handleCheckedBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = event.target

    if(allSelect) {
      let tempCheckedBox = checkedBoxs.map(()=> {
        return {...info.teachingWeek, isChecked: true}
      })
      setCheckedBox(tempCheckedBox);
    } else {
      let tempCheckedBox = checkedBoxs.map((checkedBox)=> {
        return checkedBox.name === name ? {...info.teachingWeek, isChecked: checked} : checkedBox 
      })
      setCheckedBox(tempCheckedBox);
      if(checked) {
        info.totalWeek++;
      } else {
        info.totalWeek--;
      }
      
    }
  }

  return (
        <div className="tablespe element">
            <div className="row">
                <div className="col-sm"><h6> คณะ: {info.faculty}</h6></div>
                <div className="col-sm"><h6>สาขา: {info.department}</h6> </div>
                <div className="col-sm"><h6>กลุ่ม: {info.sectionId} </h6></div>
                <div className="col-sm"><h6>{info.typeLearning} </h6></div>
            </div>
            <br />
            <h5>อาจารย์ผู้สอน</h5><br />
            <div className='row'>
              <div className='col-sm'>
                <ul className='list-group'>
                {info.professor && info.professor.map((professor: professor, index: number)=> (
                    <li className='list-group-item'>
                      <td className={colors[index] }></td>
                      <td>{professor.name}</td>
                    </li>
                ))}
                </ul>
              </div>
            </div>
            <br />
            <h5>รูปแบบการสอน</h5> <br />
            <div className='container'>
              <div className="row">
                <div className="col-sm form-check">
                  <input className="form-check-input" type="radio" name="select" id="allSelect" value={'allSelect'} checked={allSelect} onChange={handleAllSelect} ></input>
                  <label className="form-check-label">สอนคนเดียว, สอนร่วมกันทุกสัปดาห์</label>
                </div>
                <div className="col-sm form-check">
                  <input className="form-check-input" type="radio" name="select" id="someSelect" value={'someSelect'} checked={someSelect} onChange={handleSomeSelect}></input>
                  <label className="form-check-label">สอนร่วมกันบางสัปดาห์</label>
                </div>
              </div>
            </div>
           
            {/*table */}
              <Table className='table table-bordered'>
                <thead className="thead">
                  <tr>
                    <th scope="col-sm-8">จำนวนสัปดาห์ที่สอน(ไม่รวมสัปดาห์สอบ)</th>
                    <th scope="col">จำนวนชั่วโมงภาระงานต่อภาคเรียน</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={1} scope="col-sm-8">
                      <div className='row'>
                      {checkedBoxs.map((checkedBox, index)=>(
                        <>
                          <CheckBox index={index+1} name={checkedBox.name} isChecked={checkedBox.isChecked} onChange={handleCheckedBox} teachingWeek={info.teachingWeek} typeLearning={info.typeLearning}></CheckBox>
                        </>
                      ))}
                      </div>
                      </th>
                    <td> {info.totalWeek} </td>
                  </tr>
                </tbody>
              </Table>
        </div>
  );
};