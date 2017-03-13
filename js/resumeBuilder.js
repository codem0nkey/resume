 var bio = {
	 "name" : "Marc Davis",
	 "role" : "Web Developer",
	 "contacts" : {
		 "email" : "marcdavis25@gmail.com",
		 "mobile" : "310-293-5315",
		 "location" : "Long Beach, CA",
		 "twitter" : "@Boba_Fetta",
		 "github" : "codem0nkey"
		},
	"welcomeMessage" : "Welcome to my online resume",
	"skills" : [
	 "Guitar Ninja",
	 "HTML", 
	 "CSS", 
	 "Javascript"
	 ],
	 "biopic" : "images/homer.jpg"
 };
 
 bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend([formattedRole]);
	$("#header").prepend([formattedName]);
	$("#header").append([formattedBiopic]);
	$("#header").append([formattedWelcome]);
	$("#header").append([HTMLskillsStart]);

	bio.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace("%data%", skill);
		$("#skills").append([formattedSkill]);
	});
	
	for(contact in bio.contacts) {
		var formattedContact = HTMLcontactGeneric.replace( "%contact%", contact).replace("%data%", bio.contacts[contact]);
		$("#topContacts, #footerContacts").append([formattedContact]);
	};
};

var work = {
	"jobs" : [
		{
			"employer" : "AT&T",
			"title" : "Professional-Network Support",
			"dates" : "2013 - present",
			"location" : "Cerritos, CA",
			"description" : "National Tier 2 Radio Access Network Engineer supporting RF Engineering, Field & Switch Network Operations, and Network Engineering"
		},
		{
			"employer" : "AT&T",
			"title" : "Sr.  Specialist-Network Support",
			"dates" : "2011 - 2013",
			"location" : "Anaheim, CA",
			"description" : "National Tier 2 Radio Access Network Engineer"
		},
		{
			"employer" : "Star Wars",
			"title" : "Jedi Knight",
			"dates" : "Birth - 2011",
			"location" : "Dallas, TX",
			"description" : "Defending the galaxy against evil Sith Lords"
		}
	]
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

var projects = {
	"projects": [{
		"title": "Death Star",
		"dates": "2010-2011",
		"description": "The first project",
		"images": [
			"images/pic1.jpg",
			"images/pic2.jpg"
		]
	}]
};

projects.display = function () {
	$("#projects").append(HTMLprojectStart);
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[0].title);
	$(".project-entry").append(formattedProjectTitle);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
	$(".project-entry").append(formattedProjectDates);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
	$(".project-entry").append(formattedProjectDescription);
	
	for(image in projects.projects[0].images) {
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[0].images[image]);
		$(".project-entry").append(formattedProjectImage);
	}
};

var education = {
	"schools" : [
		{
			"name" : "Long Beach City College",
			"location" : "Long Beach, CA",
			"degree" : "Audio Engineering Certification",
			"majors" : "Audio Engineering",
			"dates" : "1995-1997",
			"url" : "www.lbcc.edu"
		},
		{
			"name" : "Jedi Training Academy",
			"location" : "Lubbock, TX",
			"degree" : "Using the Force",
			"majors" : "Lightsaber Dueling",
			"dates" : "1974-1995",
			"url" : "www.starwars.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "MSCE",
			"school" : "New Horizons",
			"dates" : "2000",
			"url" : "www.newhorizons.com"
		},
		{
			"title" : "Front-End Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "www.udacity.com"
		}
	]	
};


education.display = function () {
	$("#education").append(HTMLschoolStart);
	for (school in education.schools) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry").append(formattedSchoolName + formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry").append(formattedSchoolMajor);
	};
	
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLonlineDiv);
	for (course in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".online-entry").append(formattedOnlineTitle + formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".online-entry").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".online-entry").append(formattedOnlineURL);
	};
};

function displayMap() {
var mapTime = googleMap;
$("#mapDiv").append(mapTime);
};




bio.display();
work.display();
education.display();
projects.display();
displayMap();



