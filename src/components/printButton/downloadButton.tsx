import React, { Component } from "react";
import { Button } from 'reactstrap'
import jsPDF from 'jspdf'
import './downloadButton.css'

class printButton extends Component {

    pdfGenerate = () => {
        var doc = new jsPDF('portrait','px','a4', false);
        // doc.addPage()
        // doc.text(60, 0, 'Name')
        doc.save('load.pdf')
    }
    
    render() {
        
        return (
            <div>
            <Button className="download" onClick={this.pdfGenerate}>Download</Button>
            </div>
        );
    }
}

export default printButton;