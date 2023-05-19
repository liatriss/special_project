import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar({roleId}: {roleId: any}) {
    return (
        <NavbarBs className="app"> 
            <Container>
                
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        หน้าแรก
                    </Nav.Link>
                    {
                        roleId === '1' || roleId === '2' ? 
                        (
                        <>
                            <Nav.Link to="/loadCheck" as={NavLink}>
                            ภาระงานสอน
                            </Nav.Link>
                        </>):(<></>)
                    }
                    
                    <Nav.Link to="/summary" as={NavLink}>
                        สรุปภาระงาน
                    </Nav.Link>
                    {
                        roleId === '2' || roleId === '3' || roleId === '4' || roleId === '5'
                        ? (
                        <>
                            <Nav.Link to="/teachload" as={NavLink}>
                            ตรวจสอบภาระงาน
                            </Nav.Link>
                        </>): (<></>)
                    }
                    <Nav.Link to="/calender" as={NavLink}>
                            ปฏิทิน
                    </Nav.Link>
                    
                </Nav>
            </Container>
        </NavbarBs>
    )

}