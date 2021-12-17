import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Progressbar from "../progressbar/progressbar";
import Fl_jumbo from './fl_jumbo';
import './index.css'

export default () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [preview, setPreview] = useState();

    const changeHandler = (event) => {
        const image = event.target.files[0];
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        setIsShow(true);

        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onloadend = () => {
            uploadImage(reader.result)
        }
    }

    const clickHandler = (event) => {
        fetch(event.target.value)
        .then((res) => res.blob())
        .then((myBlob) => {
            setSelectedFile(myBlob)
            setIsFilePicked(true);
            setIsShow(true);

            const reader = new FileReader()
            reader.readAsDataURL(myBlob)
            reader.onloadend = () => {
                uploadImage(reader.result)
            }

            // logs: Blob { size: 1024, type: "image/jpeg" }
        });
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
        // mainContainer.setAttribute("cols", "40");
        // mainContainer.setAttribute("rows", "10");
        mainContainer.innerHTML = JSON.stringify(data, undefined, 4);
        $("#myPicture").attr("src", preview);
        // for (var i = 0; i < data.faces.length; i++) {
        //     var div = document.createElement("div");
        //     div.innerHTML = 'x1: ' + data.faces[i].box.x1 + ' y1: ' + data.faces[i].box.y1 +
        //         ' x2: ' + data.faces[i].box.x2 + ' y2: ' + data.faces[i].box.y2;
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
                    setIsShow(false);
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

    var url ="https://stackblitz.com/files/react-spinner-sample/github/RahmanM/react-spinner-sample/master/loading.gif";

    return (
    <div className="m-3">
        <Fl_jumbo />
        <div className={"row header-part"}>
            <div className={"offset-md-2 col-md-8 text-center mb-5"}>
                <h2 className={"header2 text-center"}>Passive Face Liveness Detection</h2>
                <p className={"header2"}>Try this solution out right now. Select one of the pictures below or upload your own image.</p>
            </div>
        </div>
        <div className={"row"}>
            <div className={"offset-md-1 col-md-5"}>
                <img src={isFilePicked ? preview : "/static/assets/imgs/empty.png"} alt={"preview"} height={"300px"}/>
            </div>
            <div className={"col-md-1"}>
                <Progressbar show={isShow} imageUrl={url} height="90" width="90" alignment="middle" alttext="Loading..." />
            </div>
            <div className={"col-md-5"}>
                <textarea id={"myData"} cols="40" rows="12"></textarea>
            </div>
        </div>
        <div className={"row"}>
            <div className={"offset-md-1 col-md-5"}>
                <label className="mx-1">
                    <input type="button" className="d-none" value={"/static/assets/imgs/fl_sample1.jpg"} name="file" onClick={clickHandler}/>
                    <img src={"/static/assets/imgs/fl_sample1.jpg"} alt={"preview"} height={"100px"}/>
                </label>

                <label className="mx-1">
                    <input type="button" className="d-none" value={"/static/assets/imgs/fl_sample2.png"} name="file" onClick={clickHandler}/>
                    <img src={"/static/assets/imgs/fl_sample2.png"} alt={"preview"} height={"100px"}/>
                </label>

                <label className="mx-1">
                    <input type="file" className="d-none" name="file" onChange={changeHandler}/>
                    <img src={"/static/assets/imgs/upload.png"} alt={"preview"} height={"100px"}/>
                </label>
            </div>
        </div>
    </div>
    )
}