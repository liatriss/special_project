import { Component } from "react"
import service from "../Hooks/getUser"
import SubHeader from '../components/subHeader';
import Userbtn from '../components/userNavbar/userNavbar'

type Probs = {
    user: any
}

type State = {
    userId: string,
    teacherId: string,
    email: string,
    name: string,
    roleId: string,
    role: Array<any>
}


class FirstPage extends Component<Probs, State> {

    "unsubscribeUser" : () => void;
    "unsubscribeRole" : () => void;

    constructor(probs: Probs) {
        super(probs)
        this.onUser = this.onUser.bind(this);
        this.onRole = this.onRole.bind(this);

        this.state = {
            userId: "",
            teacherId: "",
            email: "",
            name: "",
            roleId: "",
            role: []
        }

        this.unsubscribeUser = () => {};
        this.unsubscribeRole = () => {};
    }

    componentDidMount () {
        this.unsubscribeUser = service.getUserDetail({this: this.props.user.uid}.this).onSnapshot(this.onUser);
        this.unsubscribeRole = service.getUserRole().onSnapshot(this.onRole);
    }

    componentWillUnmount () {
        this.unsubscribeRole();
        this.unsubscribeUser();
    }

    onUser(items: any) {
        this.setState({
            userId: items.id,
            teacherId: items.get("teacherId"),
            email: items.get("email"),
            name: items.get("name"),
            roleId: items.get("roleId"),
        })
    }

    onRole (items: any) {
        let role = new Array();

        items.forEach((item: any)=> {
            let data = item.data();

            role.push({
                roleId: data.roleId,
                roleName: data.roleName
            })
        })

        this.setState({
            role: role
        })
    }

    render() {

    const { name, email, teacherId, roleId, userId, role } = this.state

    return (
        <>
        <Userbtn />
        <SubHeader name={name} email={email} teacherId={teacherId} roleId={roleId} userId={userId} role={role}></SubHeader>
        </>
    )
    }
}

export default FirstPage;