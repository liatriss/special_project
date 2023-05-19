import React,{useRef} from 'react';
import { useReactToPrint } from 'react-to-print'
import { Button } from 'reactstrap'
import './PdfPrint.css'

const PdfPrint = () => {

  const componentRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: 'emp-data',
  // });

  return (
    <>
    {/* <div ref={componentRef}>
    </div>
    <Button className='PrintBtn' onClick={handlePrint}>Print</Button> */}
    </>
  )
}

export default PdfPrint;