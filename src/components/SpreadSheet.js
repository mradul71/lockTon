
import {useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import DataTable from "react-data-table-component";
import * as XLSX from 'xlsx'
import './spreadSheet.css'

function SpreadSheet() {
  
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelData, setExcelData]=useState([]);
  const [excelHeadings, setExcelHeadings]=useState([]);
  const [columns, setColumns]=useState([]);
  const [Loading, setLoading]=useState(false);
  // it will contain array of objects

  const [marketDescription, setmarketDescription] = useState("Unmapped");
  const [marketCategory, setmarketCategory] = useState("Unmapped");
  const [preferredWholesaler, setpreferredWholesaler] = useState("Unmapped");
  const [preferredWholesalerName, setpreferredWholesalerName] = useState("Unmapped");

  // handle File
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];

    if(selectedFile){
      if(selectedFile){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        }
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit=async (e)=>{
    setLoading(true);
    e.preventDefault();
    if(excelFile!==null){
      const workbook = await XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      await setExcelData(data);
      await setExcelHeadings(Object.keys(data[0]));
      setLoading(false);
    }
    else{
      setExcelData(null);
    }
  }

  useEffect(() => {
    const col = [];
    excelHeadings?.map((heading) => {
        if(heading==="MarketDescription")
          col.push({
            name: heading,
            cell: (row) => <input style={{width: "7rem"}} type="text" defaultValue={marketDescription} onChange={(e) => setmarketDescription(e.target.value)}/>
          })
        else if(heading==="PreferredWholesaler")
        col.push({
          name: heading,
          cell: (row) => <input style={{width: "7rem"}} type="text" defaultValue={preferredWholesaler} onChange={(e) => setpreferredWholesaler(e.target.value)}/>
        })
        else if(heading==="MarketCategory")
        col.push({
          name: heading,
          cell: (row) => <input style={{width: "7rem"}} type="text" defaultValue={marketCategory} onChange={(e) => setmarketCategory(e.target.value)}/>
        })
        else if(heading==="PreferredWholesalerName")
        col.push({
          name: heading,
          cell: (row) => <input style={{width: "7rem"}} type="text" defaultValue={preferredWholesalerName} onChange={(e) => setpreferredWholesalerName(e.target.value)}/>
        })
        else{
          col.push({
            name: heading,
            cell: (row) => row.SurrCarrierID
          })
        }
      
    })
    setColumns(col);
  }, [excelHeadings]);
  
  
  return (
    <div className="container">
      <div className='form'>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" onChange={handleFile} required/>
        <Button variant='success' onClick={handleSubmit} >Submit</Button>
      </Form.Group>
        {/* <form className='form-group' autoComplete="off"
        onSubmit={handleSubmit}>
          <label><h5>Upload Excel file</h5></label>
          <br></br>
          <input type='file' className='form-control'
          onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{excelFileError}</div>}
          <button type='submit' className='btn btn-success'
          style={{marginTop:5+'px'}}>Submit</button>
        </form> */}
      </div>

      <br></br>
      <hr></hr>
      {
        Loading && <div><h2>Loading...</h2></div>
      }
      {!Loading && 
        <div className="col-md-12">
          <DataTable
            noHeader={true}
            columns={columns}
            data={excelData}
            selectableRows
            pagination={true}
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 50, 100, 200]}
          />
        </div>
      }
      {
        excelData.length!==0 && 
        <button type='submit' className='btn btn-success' onClick={() => console.log("Saving the data")}
          style={{marginTop:5+'px'}}>Save</button>
      }
      

    </div>
  );
}

export default SpreadSheet;