import { Container, Form, Col, Button, Card } from 'react-bootstrap';
import { useRef } from "react"
import { auth } from "../../fireauth";
import './LoginForm.css'

const LoginForm = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
        
    } catch (error) {
      console.error(error);
    }
  }

    return (
        <>
        <div className="App-header">
            KMITL <br />
            TEACHLOAD
        </div>
        <div className='text'>Login</div>
        <Container className='cardLogin' style={{maxWidth: "500px"}} fluid>
            <div className='form'>
                <br/>
            <Form className="mt-4 element">
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="email@kmitl.ac.th"></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="password"></Form.Control>
                </Form.Group>
                <Form.Group className='element'><center>
                    <Col>
                        <Button className='Signbtn' type="button" onClick={signIn}>Sign in</Button>
                    </Col>
                </center></Form.Group> 
            </Form>
            </div>
        </Container>
        
        </>
    )
}

export default LoginForm;