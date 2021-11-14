import axios from 'axios';

import React,{Component} from 'react';
const QUESTION_API_BASE_URL = "http://QuestionsBank:8081";
class uploadingImageComponent extends Component {

	state = {
	// Initially, no file is selected
	selectedFile: null ,
	imageSource :''  ,

	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	      // Update the state
	     this.setState(
	     	{ selectedFile: event.target.files[0] });
	
	};
	
	onFileUpload = () => {
	        const formData = new FormData();
			formData.append(
			    "myFile",
				this.state.selectedFile,
				this.state.selectedFile.name
					);
		  console.log(this.state.selectedFile);
          axios.post(QUESTION_API_BASE_URL +'/image', formData).then((res) => 
		   {
			this.setState({ imageSource: res.data}  );
		   //	console.log(res.data);
		   }
		);

	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	if (this.state.selectedFile) {	
		return (
		<div>
			<h2>File Details:</h2>
			
<p>File Name: {this.state.selectedFile.name}</p>

			
<p>File Type: {this.state.selectedFile.type}</p>

			
<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>
			GeeksforGeeks
			</h1>
			<h3>
			File Upload using React!
			</h3>
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
			<img  src ={this.state.imageSource}    width= '300' height='300'   />
		{this.fileData()}
		</div>
	);
	}
}

export default uploadingImageComponent;
