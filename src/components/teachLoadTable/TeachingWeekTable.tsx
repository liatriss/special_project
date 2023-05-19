import { teachingWeek } from '../../Props/sectionProps';
import '../teachLoadTable/BgColors.css'
import BgColors from './BgCompo';

const TeachingWeekTable = ({teachingWeek, index} : {teachingWeek: teachingWeek, index: any}) => {

    let temp = new Array<any>();
    if(teachingWeek.teacherId != null) {
        for(let i = 0; i < teachingWeek.teacherId?.length; i++) {
            temp.push(teachingWeek.teacherId[i]);
        }
    }

    return (
        <>
            <div className='col' key={index}>
                <div className='row-sm-auto'>{teachingWeek.name}</div>
                <div className='row-sm-auto'>
                    <BgColors teacherId={temp}></BgColors>
                </div>
            </div>
        </>
    )
}

export default TeachingWeekTable;