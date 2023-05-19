import { useState } from 'react';

const CheckboxConfirm = () => {

    const [ allSelect, setAllSelect ] = useState(false);
    const [ someSelect, setSomeSelect] = useState(false);

    const handleAllSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAllSelect(event.target.checked)
        setSomeSelect(!event.target.checked)
        
      }
    
      const handleSomeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSomeSelect(event.target.checked)
        setAllSelect(!event.target.checked);
      }
    
    return (
        <>
            <div className="card-footer">
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-4 form-check">
                        <input className="form-check-input" type="checkbox" name="select" id="allSelect" value={'allSelect'} checked={allSelect} onChange={handleAllSelect} ></input>
                        <label className="form-check-label">ยืนยัน</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckboxConfirm