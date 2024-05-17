import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ExcelGenerator = () => {
  const [jsonData, setJsonData] = useState(null);
  const [excelGenerated, setExcelGenerated] = useState(false);
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const fetchJsonData = () => {
    fetch('http://localhost:5000/api/departments/L/IT/labs')
      .then(response => response.json())
      .then(json => {
        setJsonData(json);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const convertJsonToExcel = () => {
    if (!jsonData) return;

    const keys = Object.keys(jsonData[0]);
    const data = jsonData.map(item => {
      const row = {};
      keys.forEach(key => {
        row[key] = item[key];
      });
      return row;
    });

    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, 'posts');

    XLSX.writeFile(workBook, 'postsData.xlsx');

    setExcelGenerated(true);
  };

  const convertJsonToPDF = () => {
    if (!jsonData) return;

    const doc = new jsPDF();
    doc.autoTable({ html: '#jsonTable' });
    doc.save('jsonData.pdf');

    setPdfGenerated(true);
  };

  return (
    <div>
      <button onClick={fetchJsonData}>Fetch JSON Data</button>
      <br />
      {jsonData && (
        <div>
          <h2>Fetched JSON Data:</h2>
          <table id="jsonTable">
            <thead>
              <tr>
                {Object.keys(jsonData[0]).map(key => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jsonData.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <button onClick={convertJsonToExcel}>Generate Excel</button>
          <button onClick={convertJsonToPDF}>Generate PDF</button>
          {excelGenerated && <p>Excel file generated successfully.</p>}
          {pdfGenerated && <p>PDF file generated successfully.</p>}
        </div>
      )}
    </div>
  );
};

export default ExcelGenerator;