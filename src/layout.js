import React, {Component} from 'react';
import GoogleMap from './Components/GoogleMap/GoogleMap';
import Button from 'material-ui/Button';
import GoogleMapBuilder from './Containers/MapBuilder/GoogleMapBuilder';
import axios from 'axios';
import blobUtil from 'blob-util';
import fileSaver from 'file-saver';
import {ht} from './getHtml';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import TableView from './table';

class layout extends Component{

    downloadFile = () => {
        console.log('file Download');
        console.log(ht(<TableView/>));
        axios.post(
          'http://localhost:5000/pdf',
          {
            html : ht(<TableView/>)
          }).then(file => {
            console.log(file.data);
          blobUtil.base64StringToBlob(file.data).then( blob =>  {
            fileSaver.saveAs(blob, 'new.pdf'); 
          }).catch( err => {
            console.log();
          });
        })
      }

      getScreenShot = () => {
        const input = document.getElementById('table');
        html2canvas(input).then(canvas => {
          document.body.appendChild(canvas);
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jspdf({
            orientation: 'landscape'
          });
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
        })
      }

    render(){
        return(
            <div>
                <Button variant="raised" color="primary" onClick={this.getScreenShot}>Download File</Button>
                <Button variant="raised" color="secondary" onClick={this.downloadFile}>
        From Server
      </Button>
                <br/>
                <br/>
                <TableView/>
                <GoogleMapBuilder/>
                <GoogleMap/>
            </div>
        )
    }
};

export default layout;