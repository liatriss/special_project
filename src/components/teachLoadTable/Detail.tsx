import GetData from "./GetData";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Modal.css"


const DetailData = ({teacherChecked, index, roleId}: {teacherChecked:any, index: any, roleId: any} ) => {

    const [showModal, setShowModal] = useState(false);

    const renderBackdrop = (props: any) => <div className="backdrop" {...props} />

    let handleClose = () => {
        setShowModal(false);
    }

    let handleSave = () => {
        console.log("success");
    }    

    const [lists, setLists] = useState();
    // เปบี่ยนสถานะยืนยัน
    const handleConfirm = () => {
        setLists(prevLists => prevLists.map(list => {
            if (list.id === id) {
                return {...list, status: 'ตรวจสำเร็จ'};
            }
            return list;
        })
        );
    };

    //เปลี่ยนสถานะปฏิเสธ
    const handleReject = () => {
        const reason = prompt('เหตุผลการปฏิเสธ');
        if (reason) {
            setLists(prevLists => prevLists.map(list => {
                if (list.id === id) {
                    return {...list, status: 'ตรวจไม่สำเร็จ', reason};
                }
                return reason;
            }));
        }
    };

    let checkStatus;

    if(roleId === '2') {
        checkStatus = teacherChecked.headOfTeacherChecked;
    } else if (roleId === '3') {
        checkStatus = teacherChecked.regChecked;
    } else if (roleId === '4') {
        checkStatus = teacherChecked.hrChecked;
    } else if (roleId === '5') {
        checkStatus = teacherChecked.financeChecked;
    }

    return (
        <>
            <th scope="col"><center>{showModal ? "ชื่ออาจารย์ : " : ""}{teacherChecked.name}</center></th>
            <th scope="col"><center>{showModal ? "สถานะ : " : ""}{teacherChecked.teacherChecked ? <p className="text-secondary">ส่งแล้ว</p> : <p className="text-danger">ยังไม่ส่ง</p>}</center></th>
            <th scope="col">
                <center>
                    <button className="button" onClick={() => setShowModal(true)}>รายละเอียด</button>
                </center>
            </th>
            <th scope="col"><center>{showModal ? "สถานะการยืนยัน : " : ""}{checkStatus? <p className="text-secondary">ตรวจแล้ว</p> : <p className="text-danger">ยังไม่ตรวจ</p>}</center></th>
            
                <Modal
                    show={showModal}
                    onHide={handleClose}
                    renderBackdrop={renderBackdrop}
                    fullscreen={true}
                >
                    <>
                    <Modal.Header closeButton color="black">
                        <Modal.Title>รายละเอียด</Modal.Title>
                    </Modal.Header>
                    <div className="container card-header element">
                        <div className="row">
                            <div className="col">ชื่ออาจารย์ : {teacherChecked.name}</div>
                            <div className="col">สถานะ : {teacherChecked.teacherChecked ? <p className="text-secondary">ส่งแล้ว</p> : <p className="text-danger">ยังไม่ส่ง</p>}</div>
                            <div className="col">สถานะการยืนยัน : {checkStatus? <p className="text-secondary">ตรวจแล้ว</p> : <p className="text-danger">ยังไม่ตรวจ</p>}</div>
                        </div>
                    </div>
                    <Modal.Body>
                        <tr key={index + 1}>
                            <th colSpan={7}>  
                                <> 
                                <GetData teacherId={teacherChecked.teacherId} checked={checkStatus}></GetData>
                                </>
                            </th>
                        </tr>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="row">
                            <div className="col"><button className="button" onClick={handleClose}>ปิด</button> </div>
                            { checkStatus ? (<></>):(<>
                                <div className="col"><button className="button-save" onClick={handleSave}>สิ้นสุด</button></div>
                            </>)}
                        </div>
                    </Modal.Footer>
                    </>    
                </Modal>
            
        </>
    )
}

export default DetailData;