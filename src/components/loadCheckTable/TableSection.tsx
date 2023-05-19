import useOpenController from '../../Hooks/useOpenController';
import { TableRow } from './TableRow';
import { ExpendableButton } from '../expandButton/ExpandableButton';
import { Info } from '../../Props/info';

const TableSection  = ({ info}: {info: Info}) => {

    const { isOpen, toggle } = useOpenController(false);
    
    return (
        <>
        <tbody>   
            <tr>
                <td><center>{isOpen ? "วิชา : " : ""}{info.name}</center></td>
                <td><center>{isOpen ? "จำนวนนักศึกษาที่ลงทะเบียน : " : ""}{info.totalStudents}</center></td>
                <td><center>{isOpen ? "ระดับ : " : ""}{info.degree}</center></td>
                <td><center>{isOpen ? "จำนวนชั่วโมงที่สอนต่อสัปดาห์ : " : ""}3</center></td>
                <td><center>{isOpen ? "จำนวนชั่วโมงที่สอนต่อภาคเรียน : " : ""}{info.totalWeek * 3}</center></td>
                <td><center>{isOpen ? "จำนวนภาระงานที่สอนต่อภาคเรียน : " : ""}{info.totalTeachload}</center></td>
                <td>
                    <center>
                        {isOpen ? "จำนวนสัปดาห์ที่สอนต่อภาคเรียน : " : ""}
                        {info.totalWeek}
                        <ExpendableButton isOpen={isOpen} toggle={toggle} label={"เลือกสัปดาห์ที่สอน"} disable={false}/>
                    </center>
                </td>
            </tr>
            <tr>
            <th colSpan={7}>
            {isOpen && <TableRow info={info}/>}
            </th>
            </tr>
        </tbody>   
        </>
    )
}

export default TableSection;