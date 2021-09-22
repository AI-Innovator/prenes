import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        handleSubmission();
    }

    const handleSubmission = () => {
        const formData = new FormData();
    }

    return (
    <div className="m-3">
        <label className="mx-3">
            <input type="file" className="d-none" name="file" onChange={changeHandler}/>
            <i className="fa fa-upload fa-3x"></i>
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
        </label>
    </div>
    )
}