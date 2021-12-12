import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [preview, setPreview] = useState();

    const changeHandler = (event) => {
        const image = event.target.files[0]
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);

        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onloadend = () => {
            uploadImage(reader.result)
        }
    }

    useEffect(() => {
        if (!selectedFile) {
          setPreview(undefined)
          return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        console.log("33333333333: ", preview)
        // props.setState({ ...props.state, image: objectUrl })

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const appendData = async (data) => {
        var mainContainer = document.getElementById("myData");
        mainContainer.setAttribute("cols", "40");
        mainContainer.setAttribute("rows", "10");
        mainContainer.innerHTML = JSON.stringify(data, undefined, 4);
        // for (var i = 0; i < data.length; i++) {
        //     var div = document.createElement("div");
        //     div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
        //     mainContainer.appendChild(div);
        // }
    }

    const uploadImage = async (base64EncodedImage) => {

        try {
            await fetch('https://prenes-face-analyzer.p.rapidapi.com/face/liveness/v1/score', {
                method: 'POST',
                body: JSON.stringify({
                    image: base64EncodedImage
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'token-value',
                    "x-rapidapi-key": "d795214830msh9a862b18ec8afd2p152901jsn6bc4b3d61b43",
                    "x-rapidapi-host": "prenes-face-analyzer.p.rapidapi.com"
                },
            })
            .then(response => response.json())
                .then(data => {
                    console.log("11111111: ", data)
                    appendData(data);
                })
            .catch(err => {
                console.error("2222: ", err);
            });
        } catch (error) {
            console.log("3333333333: ", error);
        }
    }

    const handleSubmission = async (e) => {
        const formData = new FormData();
        formData.append("image", selectedFile);
    }

    return (
    <div className="m-3">
        <label className="mx-3">
            <input type="file" className="d-none" name="file" onChange={changeHandler}/>
            <i className="fa fa-upload fa-3x"></i>
            {selectedFile && <img height="300px" alt="preview" src={preview} />}

			{isFilePicked ? (
				<textarea id="myData">
				</textarea>
			) : (
				<p>Upload an image for anti-spoof detection</p>
			)}
        </label>
    </div>
    )
}