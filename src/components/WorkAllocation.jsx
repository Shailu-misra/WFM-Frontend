import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
const WorkAllocation = () => {
    const [items, setItems] = useState([]);
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault();
        readExcel(file);
    }

    const readExcel = async (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);
                console.log(data);

                resolve(data);
                console.log(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };


        });

        promise.then((d) => {
            setItems(d);
        });
        const API_URL = "http://localhost:8080/consumers"
        let response = await axios.post(API_URL, items).catch((res) => {
            //alert user about any error in saving user
            alert(res.response.data.message)
        })

        console.log(response)
        if (response && response.status === 200) {
            alert("File Upload Successfully");
        }

        else {
            alert('File Upload Failed');
        }

    };

    return (

        <div className="container  text-center " style={ {marginTop:"100px"}}>
        
            <form onSubmit={handleSubmit}>
                <h1> Upload Consumer Master</h1><br/>
                <input type="file" onChange={handleChange} accept=".xlsx,.csv,.xls" />
                <button type="submit">Upload</button>
            </form>
            <br/>
            <a href="src\components\format_list_upload.xlsx"  download="Format.xlsx"><h3>Download-Format of file</h3></a>

        </div>


        //   {/* <table class="table container">
        //     <thead>
        //       <tr>
        //         <th scope="col">Item</th>
        //         <th scope="col">Description</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {items.map((d) => (
        //         <tr key={d.Item}>
        //           <th>{d.Item}</th>
        //           <td>{d.Description}</td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table> */}

    );
}

export default WorkAllocation;
