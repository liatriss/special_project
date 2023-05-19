import List from "../components/List";
import TableSubject from "../components/loadCheckTable/TableSubject";
import '../App.css'

const LoadCheck = ({teacherId, roleName, name}: {teacherId: any, roleName: any, name: any}) => {

    return (
        <>
        <div className="loadCheck element">
            {/*<TableCheck />*/}
            <TableSubject teacherId={teacherId} roleName={roleName} name={name}></TableSubject>
        </div>
            {/*Special problem list */}
        <div className="container">
            <List teacherId={teacherId} roleName={roleName} name={name}></List>
        </div>
        </>
    );
};

export default LoadCheck;
