import React from "react";
import './Download.css';

const Download = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('Schedule.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Schedule.pdf';
				alink.click();
			})
		})
	}
	const onBut = () => {
		// using Java Script method to get PDF file
		fetch('palmlet.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'palmlet.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
			<center id="schedule">
                <div className="group">
				
                <button onClick={onButtonClick} className="c1">
                Inaugural Ceremony Schedule
				</button>
                <button onClick={onBut} className="c1">
                Program Details
				</button>
        
                
                <button onClick={onButtonClick} className="c1">
                Events Schedule
				</button>
                <button onClick={onButtonClick} className="c1">
                Closing Ceremony Schedule
				</button>
                </div>
				
			
				
			</center>
		</>
	);
};

export default Download;
