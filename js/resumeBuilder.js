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
	 "biopic" : "images/fry.jpg",
};

var work = {
	"jobs" : [
		{
			"employer" : "www.att.com",
			"title" : "Professional-Network Support",
			"dates" : "2013 - present",
			"location" : "Cerritos, CA",
			"description" : "National Tier 2 Radio Access Network Engineer supporting RF Engineering, Field & Switch Network Operations, and Network Engineering"
		},
		{
			"employer" : "www.att.com",
			"title" : "Sr.  Specialist-Network Support",
			"dates" : "2011 - 2013",
			"location" : "Anaheim, CA",
			"description" : "National Tier 2 Radio Access Network Engineer"
		},
		{
			"employer" : "www.starwars.com",
			"title" : "Jedi Knight",
			"dates" : "birth - 2011",
			"location" : "Dallas, TX",
			"description" : "Defending the galaxy against evil Sith Lords"
		}
	]
};

var projects = {
	"projects": [{
		"title": "project 1",
		"dates": "begin-end",
		"description": "The first project",
		"images": [
			"images/pic1.jpg",
			"images/pic2.jpg"
		]
	}, {
		"title": "project 2",
		"dates": "begin-end",
		"description": "The second project",
		"images": [
			"images/pic3.jpg",
			"images/pic4.jpg"
		]
	}]
}


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
			"location" : "New York, NY",
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
			"dates" : "current",
			"url" : "www.udacity.com"
		}
	]	
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
		$("#header").append([formattedSkill]);
	});
	
	bio.contacts.forEach(function(contact) {
		var formattedContact = HTMLcontactGeneric.replace( "%contact%", contact).replace("%data%", contact);
		$("#topContacts, #footerContacts").append([formattedContact]);
	});
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
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

education.display = function () {
	// for school in schools, var and post via jQuery
	
	// for online in onlineSchools, var and post via jQuery
	
};

projects.display = function () {
	// for project in projects, var and post via jQuery
	
};


bio.display();
work.display();
education.display();
projects.display();



