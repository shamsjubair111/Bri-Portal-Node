import React, {useState} from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [value, setValue] = useState({});
    // const [message, setMessage] = useState("");

    const changeHandler = (event) => {
        console.log(event.target.files[0].name);
        var myFile = event.target.files[0]?.name;
        var ext = myFile.split('.').pop();
        console.log("extension",ext)
        if(ext=="pdf" || ext=="docx" || ext=="doc" || ext=="xls"){
            setSelectedFile(event.target.files[0]);
		    setIsFilePicked(true);
        }
        else{
            setSelectedFile("");
        }

		
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);
        for (var value of formData.values()) {
            setValue(value);
        }

        // var myFile = value?.name;
        // console.log(myFile);
        // var ext = myFile.split('.').pop();
        // console.log("extension",ext)
        // if(ext=="pdf" || ext=="docx" || ext=="doc" || ext=="xls"){
        //     alert("upload file", ext);
        // }
        // else{
        //     alert("Cannot upload this format.", ext);
        // }

        console.log("formData",formData);
		
	};

    return (
        <div>
            <input type="file" name="file" accept=".xls, .xlsx, .pdf, .docx, .doc" onChange={changeHandler} />
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
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
        </div>
    );
};

export default FileUpload;