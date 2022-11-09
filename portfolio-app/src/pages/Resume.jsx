import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Nav from '../routes/route'


const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);

    }
    return (
        <div>
            <Nav></Nav>
            <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page renderAnnotationLayer={false} renderTextLayer={false} renderMode='svg' pageNumber={pageNumber} width="1000"></Page>
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            {/* <form action="">
                <p htmlFor="Name"></p>
                <input type="text" />
                <label htmlFor="Email"></label>
                <input type="email" name="" id="" />
            </form> */}
        </div>
    );
}

export default Resume;
