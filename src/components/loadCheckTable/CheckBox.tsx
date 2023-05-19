import { teachingWeek } from '../../Props/sectionProps'
import '../loadCheckTable/Table.css'

interface Probs {
  name: string
  isChecked: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  typeLearning: string,
  teachingWeek: teachingWeek
  index: number,
}

const CheckBox = (probs: Probs) => {

  return (
    <>
    <div className='col-md-auto'>
          <div className='row-sm'>
            <div className="checkbox">
              <label htmlFor=''></label>
                <input
                  type='checkbox'
                  name={probs.name}
                  id={probs.name}
                  checked={probs.isChecked}
                  onChange={probs.onChange}
                  disabled={false}
                  >
                </input>
            </div>
          </div>
        </div>
    
      
    </>
  )
}

export default CheckBox

