import Teachload from '../interfaces/teachload';
import LoadCheck  from '../interfaces/loadCheck';
import Summary from "../interfaces/summary"
import From from './Form';
import { Home } from "../interfaces/Home"
import { Navbar } from "./Navbar"

import { Routes, Route } from "react-router-dom"
import { Container, Button} from 'react-bootstrap';
import { auth } from '../fireauth'
import Calender from '../interfaces/CalendarApp'

const SubHeader = ({name, email, teacherId, roleId, userId, role} : {name: any, email: any, teacherId: any, roleId: any, userId: any, role: any}) => {

    const signOut = async () => {
        await auth.signOut();
    }

    let roleName;

    for(let i = 0; i < role.length; i++) {
        if(roleId === role[i].roleId) {
            roleName = role[i].roleName;
        }
    }

    return (
        <>
        <div className='App'>
            <div className="App-header">
                KMITL <br />
                TEACHLOAD

            {/* <div className="justify-content-between">
                <Button onClick={signOut}>{name}</Button>
            </div> */}
            
            </div>

            <div className='App-subheader'>
                <Navbar roleId={roleId}/>
            </div>

            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home /> } />
                    <Route path="/teachload" element={<Teachload roleId={roleId} />} />
                    <Route path="/summary" element={<Summary />} />
                    <Route path="/loadCheck" element={<LoadCheck teacherId={teacherId} roleName={roleName} name={name}/>} />
                    <Route path="/form" element={<From teacherId={teacherId} roleName={roleName} name={name}/>} />
                    <Route path='/calender' element={<Calender />}></Route> 
                </Routes>
            </Container>
            </div>
        </>
    )
}

export default SubHeader;