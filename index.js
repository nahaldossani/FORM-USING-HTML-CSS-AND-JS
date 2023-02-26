const nextBtn = document.querySelector("#next-btn");
const whySelection = document.querySelector("#whySelection");
const destination = document.querySelector("#destination");
const currentLocation = document.querySelector("#current-location");

// nextBtn.addEventListener("click", () => {
	// if (whySelection.value === "") {
	// 	alert("Please select a reason");
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }
	
	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }
	
	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }

	// if (whySelection.value === "WORK") {
	// 	window.location.href = "http://127.0.0.1:49351/workForm.html";
	// 	return;
	// }
// });

const formQuestion = document.querySelector("#formQuestion");

let step = 1;

function nextOrSubmitBtn() {
	// If any blank is left
	if (destination.value === "" || currentLocation.value === "" || whySelection.value === "") {
		alert("Please fill in all the details");
		return;
	}

	// If all blanks are filled
	// if (destination.value !== "" && currentLocation.value !== "" && whySelection.value !== "") {
	// 	step = 1;
	// }	


	// Visit Tourism
	// Page 1
	if (step === 1 && whySelection.value === "visit-tourism") {
		formQuestion.innerHTML = `<div id="questions" class="mx-5 my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="" required>When are you planning on visiting ${destination.value}?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2">
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>How long will you be in ${destination.value} for?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2">
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>How many people are accompanying you?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2">
			</div>
			<div class="m-6 flex flex-col">
				<label for="">Do you have accommodation?</label>
				<div class="m-2">
					<input type="radio" id="yes-accomodation" name="accommodation" value="Yes">
					<label for="Yes">Yes</label><br>
					<input type="radio" id="no-accomodation" name="accommodation" value="No">
					<label for="No">No</label><br>
				</div>
			</div>
			<div class="m-6 flex flex-col">
				<label for="">Have you arranged flights?</label>
				<div class="m-2">
					<input type="radio" id="html" name="flights" value="Yes">
					<label for="Yes">Yes</label><br>
					<input type="radio" id="css" name="flights" value="No">
					<label for="No">No</label><br>
				</div>
			</div>
		</form>
	</div>`
		step = 2;
		return;
	}

	// Page 2
	if (step === 2 && whySelection.value === "visit-tourism") {
		formQuestion.innerHTML = "Page 2 for visit tourism. Yet to be build";
		step = 3;
		return;
	}

	// Page 3
	if (step === 3 && whySelection.value === "visit-tourism") {
		formQuestion.innerHTML = "Page 3 for visit tourism. Yet to be build";
		step = 4;
		document.querySelector("#submit-next").innerText = `Submit`
		return;
	}









	// Visit Business
	// Page 1
	if (step === 1 && whySelection.value === "visit-business") {
		formQuestion.innerHTML = `<div id="questions" class="mx-5 my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="" required>When are you planning on visiting ${destination.value}?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2">
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>How long will you be in ${destination.value} for?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2">
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>How many people are accompanying you?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2">
			</div>
			<div class="m-6 flex flex-col">
				<label for="">Do you have accommodation?</label>
				<div class="m-2">
					<input type="radio" id="yes-accomodation" name="accommodation" value="Yes">
					<label for="Yes">Yes</label><br>
					<input type="radio" id="no-accomodation" name="accommodation" value="No">
					<label for="No">No</label><br>
				</div>
			</div>
			<div class="m-6 flex flex-col">
				<label for="">Have you arranged flights?</label>
				<div class="m-2">
					<input type="radio" id="html" name="flights" value="Yes">
					<label for="Yes">Yes</label><br>
					<input type="radio" id="css" name="flights" value="No">
					<label for="No">No</label><br>
				</div>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}

	// Page 2
	if (step === 2 && whySelection.value === "visit-business") {
		formQuestion.innerHTML = "Page 2 for visit business. Yet to be build";
		step = 3;
		return;
	}

	// Page 2
	if (step === 3 && whySelection.value === "visit-business") {
		formQuestion.innerHTML = "Page 3 for visit business. Yet to be build";
		document.querySelector("#submit-next").innerText = `Submit`
		step = 4;
		return;
	}
}
