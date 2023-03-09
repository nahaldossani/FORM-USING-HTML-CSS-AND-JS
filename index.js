const nextBtn = document.querySelector("#next-btn");
const whySelection = document.querySelector("#whySelection");
const destination = document.querySelector("#destination");
const currentLocation = document.querySelector("#current-location");

const formQuestion = document.querySelector("#formQuestion");

let step = 1;

function nextOrSubmitBtn() {
	// If any blank is left
	if (destination.value === "" || currentLocation.value === "" || whySelection.value === "") {
		alert("Please fill in all the details");
		return;
	}

	if (step === 3){
		document.querySelector("#submit-next").innerText = "SUBMIT"
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
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>How long will you be in ${destination.value} for?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>How many people are accompanying you?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
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
	if (step === 2) {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="">First Name</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>Surname</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>Email Address</label>
				<input type="email" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex flex-col">
				<label for="" required>Dialing Code</label>
				<select name="dialing-code" id="" required class="border-2 border-gray-400 p-2 max-w-sm">
					<option value="SA">South Africa (+27)</option>
					<option value="UAE">UAE (+971)</option>
				</select>
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>Mobile</label>
				<input type="tel" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex flex-col">
				<label for="" required>Nationality</label>
				<select name="nationality" id="" required class="border-2 border-gray-400 p-2 max-w-sm">
					<option value="">-- please select --</option>
					<option value="SA">South African</option>
				</select>
			</div>
			<div class="m-6 flex flex-col">
				<label for="" required>If your assessment is positive, would you like to discuss the visa process over a free ZOOM call with your consultant?</label>
				<select name="zoom-call" id="" required class="border-2 border-gray-400 p-2 max-w-sm">
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</div>
		</form>
	</div>`;
		step = 3;
		return;
	}

	// Page 3
	if (step === 3) {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<!-- <div class="m-6 flex-col flex">
				<label for="">First Name</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div> -->
			<div class="m-6 flex flex-col">
				<label for="" required>Would you like us to expose your profile to international employers for possible job opportunities?</label>
				<select name="zoom-call" id="" class="border-2 border-gray-400 p-2 max-w-sm">
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">Is there any information you wish to add to further explain your situation?</label>
				<textarea name="" id="" cols="30" rows="10"></textarea>
			</div>
		</form>
	</div>`;
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
				<input type="text" class="border-2 border-gray-400 rounded-sm">
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>How long will you be in ${destination.value} for?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm">
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>How many people are accompanying you?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm">
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








	// Work
	// Page 1
	if (step === 1 && whySelection.value === "work") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex flex-col">
				<label for="" required>Age</label>
				<select name="age" id="" class="border-2 border-gray-400 p-2 max-w-sm" required>
					<option value="">-- please select --</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
					<option value="21">21</option>
					<option value="22">22</option>
					<option value="23">23</option>
					<option value="24">24</option>
					<option value="25">25</option>
					<option value="26">26</option>
					<option value="27">27</option>
					<option value="28">28</option>
					<option value="29">29</option>
					<option value="30">30</option>
					<option value="31">31</option>
					<option value="32">32</option>
					<option value="33">33</option>
					<option value="34">34</option>
					<option value="35">35</option>
					<option value="36">36</option>
					<option value="37">37</option>
					<option value="38">38</option>
					<option value="39">39</option>
					<option value="40">40</option>
					<option value="41">41</option>
					<option value="42">42</option>
					<option value="43">43</option>
					<option value="44">44</option>
					<option value="45">45</option>
					<option value="46">46</option>
					<option value="47">47</option>
					<option value="48">48</option>
					<option value="49">49</option>
					<option value="50+">50+</option>
				</select>
			</div>
			<div class="m-6 flex flex-col">
				<label for="" required>English Language Ability</label>
				<select name="English" id="" class="border-2 border-gray-400 p-2 max-w-sm" required>
					<option value="">-- please select --</option>
					<option value="poor">I am poor at speaking English</option>
					<option value="competant">I am competant at speaking English</option>
					<option value="proficient">I am proficient at speaking English</option>
					<option value="superior">I am superior at speaking English</option>
				</select>
			</div>
			<div class="m-6 flex flex-col">
				<label for="" required>Qualifications</label>
				<select name="qualifications" id="" class="border-2 border-gray-400 p-2 max-w-sm" required>
					<option Value="">-- please select --</option>
					<option Value="-50,No Qualifications">No Qualifications</option>
					<option Value="-50,High School Certificate">High School Certificate</option>
					<option Value="-15,1 Year Diploma">1 Year Diploma</option>
					<option Value="-5,2 Year Diploma">2 Year Diploma</option>
					<option Value="5,3 Year Diploma">3 Year Diploma</option>
					<option Value="10,4+ Year Diploma">4+ Year Diploma</option>
					<option Value="30,Trade Certificate">Trade Certificate</option>
					<option Value="30,Bachelors Degree">Bachelors Degree</option>
					<option Value="40,Honors Degree">Honors Degree</option>
					<option Value="40,Masters Degree">Masters Degree</option>
					<option Value="50,PHD">PHD</option>
				</select>
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>Profession</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex flex-col">
				<label for="" required>Work Experience</label>
				<select name="qualifications" id="" class="border-2 border-gray-400 p-2 max-w-sm" required>
					<option Value="">-- please select --</option>
					<option Value="-15,I only have work experience before I graduated">I only have work experience
						before I graduated</option>
					<option Value="10,1-3 Years after my qualification">1-3 Years after my qualification</option>
					<option Value="15,3-8 Years after my qualification">3-8 Years after my qualification</option>
					<option Value="25,8+ Years after my qualification">8+ Years after my qualification</option>
				</select>
			</div>
			<div class="m-6 flex-col flex">
				<label for="" required>Partner Profession</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex flex-col">
				<label for="" required>Professional Status</label>
				<select name="qualifications" id="" class="border-2 border-gray-400 p-2 max-w-sm" required>
					<option Value="">-- please select --</option>
					<option Value="30,I am a career professional">I am a career professional</option>
					<option Value="10,I am building my career">I am building my career</option>
					<option Value="-25,I am a fresh graduate">I am a fresh graduate</option>
					<option Value="-70,I can’t afford to immigrate">I can't afford to immigrate</option>
				</select>
			</div>
			<div class="m-6 flex flex-col">
				<label for="" required>Fast Tracking Application</label>
				<select name="qualifications" id="" class="border-2 border-gray-400 p-2 max-w-sm" required>
					<option Value="30,I am eager to start now">I am eager to start now</option>
					<option Value="15,Busy finding the best quote">Busy finding the best quote</option>
					<option Value="10,I have just begun investigating">I have just begun investigating</option>
					<option Value="0,I have no desire to get started now">I have no desire to get started now
					</option>
				</select>
			</div>
		</form>
	</div>	`;
		step = 2;
		return;
	}









	// Open a business
	// Page 1
	if (step === 1 && whySelection.value === "business") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="">What type of business do you want to conduct?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">What is the maximum you are willing to invest? </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label>Are you planning on investing in ${destination.value}</label>
				<div class="radio">
					<label><input type="radio" name="Question16" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question16" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label>Have you registered this business?</label>
				<div class="radio">
					<label><input type="radio" name="Question17" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question17" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do you have a business plan for this business?</label>
				<div class="radio">
					<label><input type="radio" name="Question18" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question18" value="No" checked>No</label>
				</div>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}

	









	// Invest
	// Page 1
	if (step === 1 && whySelection.value === "invest") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="">What type of investment activity do you want to conduct?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">What is the maximum you are willing to invest?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">What type of residency are you looking for?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}









	// Study
	// Page 1
	if (step === 1 && whySelection.value === "study") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label>Have you found a college/university/school to study at?</label>
				<div class="radio">
					<label><input type="radio" name="Question23" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question23" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do you have an enrolment letter for this institution?</label>
				<div class="radio">
					<label><input type="radio" name="Question24" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question24" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do you have the funds to cover your studies in Albania?</label>
				<div class="radio">
					<label><input type="radio" name="Question25" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question25" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do you have student medical cover?</label>
				<div class="radio">
					<label><input type="radio" name="Question26" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question26" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex flex-col">
				<label for="" required>How old are you? </label>
				<select name="dialing-code" id="" required class="border-2 border-gray-400 p-2 max-w-sm">
					<option value="">-- please select --</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
					<option value="21">21</option>
					<option value="22">22</option>
					<option value="23">23</option>
					<option value="24">24</option>
					<option value="25">25</option>
					<option value="26">26</option>
					<option value="27">27</option>
					<option value="28">28</option>
					<option value="29">29</option>
					<option value="30">30</option>
					<option value="31">31</option>
					<option value="32">32</option>
					<option value="33">33</option>
					<option value="34">34</option>
					<option value="35">35</option>
					<option value="36">36</option>
					<option value="37">37</option>
					<option value="38">38</option>
					<option value="39">39</option>
					<option value="40">40</option>
					<option value="41">41</option>
					<option value="42">42</option>
					<option value="43">43</option>
					<option value="44">44</option>
					<option value="45">45</option>
					<option value="46">46</option>
					<option value="47">47</option>
					<option value="48">48</option>
					<option value="49">49</option>
					<option value="50+">50+</option>
				</select>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">Do you have family that will be accompanying you to ${destination.value}</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">Do you have family in ${destination.value}</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">What is the highest level of study you have completed?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">Where did you complete this? </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">What are your study plans in ${destination.value} </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">What course are you interested in studying in ${destination.value} </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">How will you be able to financially support yourself to study in ${destination.value} </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">Will anyone be providing this financial support? </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}

	








	// Join Family
	// Page 1
	if (step === 1 && whySelection.value === "join-family") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="">What is your relationship with this family member? </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm m-2" required>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do they have sufficient means to support you if necessary?</label>
				<div class="radio">
					<label><input type="radio" name="Question24" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question24" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do you wish to work in Albania?</label>
				<div class="radio">
					<label><input type="radio" name="Question25" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question25" value="No" checked>No</label>
				</div>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}

	








	// Join Spouse / Life Partner
	// Page 1
	if (step === 1 && whySelection.value === "join-life-partner") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="">How long have you been together with your partner? </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label>Are you married to your partner?</label>
				<div class="radio">
					<label><input type="radio" name="Question24" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question24" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do you wish to work in ${destination.value}</label>
				<div class="radio">
					<label><input type="radio" name="Question25" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question25" value="No" checked>No</label>
				</div>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}

	








	// Retire
	// Page 1
	if (step === 1 && whySelection.value === "retire") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="">What is your monthly retirement income?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">From where do you derive your retirement income? </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do you have pensions and/or Retirement Annuities?</label>
				<div class="radio">
					<label><input type="radio" name="Question24" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question24" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do you need assistance with accommodation in ${destination.value}</label>
				<div class="radio">
					<label><input type="radio" name="Question25" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question25" value="No" checked>No</label>
				</div>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}

	








	// Volunteer
	// Page 1
	if (step === 1 && whySelection.value === "volunteer") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="">What is the name of the volunteer organisation?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">What is the duration of your contract? </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label>Do you know where you will be volunteering?</label>
				<div class="radio">
					<label><input type="radio" name="Question26" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question26" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label>Are you enrolled with them?</label>
				<div class="radio">
					<label><input type="radio" name="Question27" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question27" value="No" checked>No</label>
				</div>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}

	









	// Conduct and Internship
	// Page 1
	if (step === 1 && whySelection.value === "internship") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label>Do you know where you will be interning?</label>
				<div class="radio">
					<label><input type="radio" name="Question26" value="Yes">Yes</label>
				</div>
				<div class="radio">
					<label><input type="radio" name="Question26" value="No" checked>No</label>
				</div>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">What is the name of the company / organisation?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
			<div class="m-6 flex-col flex">
				<label for="">How long is your internship for?</label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}

	









	// Other
	// Page 1
	if (step === 1 && whySelection.value === "other") {
		formQuestion.innerHTML = `<div id="questions" class="my-2">
		<form action="" class="flex flex-row flex-wrap">
			<div class="m-6 flex-col flex">
				<label for="">Please let us know what your plans are once you enter ${destination.value}, we will find the right visa for you! </label>
				<input type="text" class="border-2 border-gray-400 rounded-sm" required>
			</div>
		</form>
	</div>`;
		step = 2;
		return;
	}

	











	// Thankyou after filling the form
	if (step === 4){
		formQuestion.innerHTML = `<div class="flex flex-col items-center">
		<i class="uil uil-check-circle text-9xl"></i>
		<div class="text-2xl font-bold text-black">Thank you for submitting the form. Your response has been recorded.</div>
	</div>`
	}
}