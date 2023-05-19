import TableHead from "../components/teachLoadTable/TableHead";

  const Teachload = ({roleId}: {roleId: any}) => {

    return (
      <>
        {/* Page content */}
        <TableHead roleId={roleId}></TableHead>
      </>
      
    );
  };
  
  export default Teachload;
  