import '../expandButton/ExpandableButton.css'

export const ExpendableButton = ({isOpen, toggle , label, disable}: {isOpen: any, toggle: any, label: any, disable: boolean}) => {
 
  var className = "expand";

  if(disable) {
    className = "disable"
  } 

  return (
    <button className= {className} onClick={toggle} disabled={disable}>
      <span className="material-symbols-rounded"
      style={{
        transition: "all 0.25s",}}
       >
      <div className="button">
        <center>{label}</center>
      </div>
      </span>
    </button>
  );
};

