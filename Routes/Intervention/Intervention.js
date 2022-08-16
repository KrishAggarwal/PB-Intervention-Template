app.controller("interventionController", function ($scope) {
  
  $scope.patients = [
    {
      image: "./user.jpg",
      name: "Amelia Dawsun",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
    {
      image: "./user.jpg",
      name: "Amelia Dawsun2",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
    {
      image: "./user.jpg",
      name: "Amelia Dawsun3",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
    {
      image: "./user.jpg",
      name: "Amelia Dawsun4",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
    {
      image: "./user.jpg",
      name: "Amelia Dawsun5",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
    {
      image: "./user.jpg",
      name: "Amelia Dawsun6",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
    {
      image: "./user.jpg",
      name: "Amelia Dawsun7",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
    {
      image: "./user.jpg",
      name: "Amelia Dawsun8",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
    {
      image: "./user.jpg",
      name: "Amelia Dawsun9",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
    {
      image: "./user.jpg",
      name: "Amelia Dawsun10",
      profession: "Priority Juggler",
      disease: "Breast HRA Surgery",
      dateOfTreatment: "05/11/2021",
      priority: "High",
    },
  ];
  $scope.maxSize = 2;
  $scope.itemsPerPage = 5;
  $scope.bigTotalItems = 10;
  $scope.bigCurrentPage = 1;
  $scope.treatmentDetails = [
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
    //
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
    {
      icon: "fa-solid fa-id-card",
      heading: "Intervention Id",
      value: "2543462453643",
    },
  ];
  $scope.patientJourney = [
    {
      color: "rgb(36 174 63)",
      icons: "fa-solid fa-envelope-open-text",
      text: "Email Sent",
      date: "Jun 01,2022 12:53 PM",
      options: {
        dateOfTreatment: "08-09-2022",
        location: "New York",
        visitDate: "08-09-2022",
        surveyDate: "08-09-2022",
        program: "HRA",
        status: "Opened",
        type: "Type",
        memberCellNumber: "4564536345",
        locationId: "34562345",
        interventionDateTime: "08-09-2022",
        providerDesignation: "Doctor",
        gender: "Male",
        visitId: "dasf4325",
      },
    },
    {
      color: "rgb(58 77 92)",
      icons: "fa-solid fa-file-invoice",
      text: "Survey",
      date: "Jun 01,2022 12:53 PM",
      options: {
        dateOfTreatment: "08-09-2022",
        location: "New York",
        visitDate: "08-09-2022",
        surveyDate: "08-09-2022",
        program: "HRA",
        status: "Opened",
        type: "Type",
        memberCellNumber: "4564536345",
        locationId: "34562345",
        interventionDateTime: "08-09-2022",
        providerDesignation: "Doctor",
        gender: "Male",
        visitId: "dasf4325",
      },
    },
    {
      color: "rgb(36 174 63)",
      icons: "fa-solid fa-envelope-open-text",
      text: "Email Sent",
      date: "Jun 01,2022 12:51 PM",
      options: {
        dateOfTreatment: "08-09-2022",
        location: "New York",
        visitDate: "08-09-2022",
        surveyDate: "08-09-2022",
        program: "HRA",
        status: "Opened",
        type: "Type",
        memberCellNumber: "4564536345",
        locationId: "34562345",
        interventionDateTime: "08-09-2022",
        providerDesignation: "Doctor",
        gender: "Male",
        visitId: "dasf4325",
      },
    },
    {
      color: "rgb(229 197 75)",
      icons: "fa-solid fa-phone",
      text: "Phone Call",
      date: "Jun 01,2022 12:51 PM",
      options: {
        dateOfTreatment: "08-09-2022",
        location: "New York",
        visitDate: "08-09-2022",
        surveyDate: "08-09-2022",
        program: "HRA",
        status: "Opened",
        type: "Type",
        memberCellNumber: "4564536345",
        locationId: "34562345",
        interventionDateTime: "08-09-2022",
        providerDesignation: "Doctor",
        gender: "Male",
        visitId: "dasf4325",
      },
    },
    {
      color: "rgb(229 197 75)",
      icons: "fa-solid fa-phone",
      text: "Phone Call",
      date: "Jun 01,2022 12:51 PM",
      options: {
        dateOfTreatment: "08-09-2022",
        location: "New York",
        visitDate: "08-09-2022",
        surveyDate: "08-09-2022",
        program: "HRA",
        status: "Opened",
        type: "Type",
        memberCellNumber: "4564536345",
        locationId: "34562345",
        interventionDateTime: "08-09-2022",
        providerDesignation: "Doctor",
        gender: "Male",
        visitId: "dasf4325",
      },
    },
    {
      color: "rgb(229 197 75)",
      icons: "fa-solid fa-phone",
      text: "Phone Call",
      date: "Jun 01,2022 12:51 PM",
      options: {
        dateOfTreatment: "08-09-2022",
        location: "New York",
        visitDate: "08-09-2022",
        surveyDate: "08-09-2022",
        program: "HRA",
        status: "Opened",
        type: "Type",
        memberCellNumber: "4564536345",
        locationId: "34562345",
        interventionDateTime: "08-09-2022",
        providerDesignation: "Doctor",
        gender: "Male",
        visitId: "dasf4325",
      },
    },
    {
      color: "rgb(229 197 75)",
      icons: "fa-solid fa-phone",
      text: "Phone Call",
      date: "Jun 01,2022 12:51 PM",
      options: {
        dateOfTreatment: "08-09-2022",
        location: "New York",
        visitDate: "08-09-2022",
        surveyDate: "08-09-2022",
        program: "HRA",
        status: "Opened",
        type: "Type",
        memberCellNumber: "4564536345",
        locationId: "34562345",
        interventionDateTime: "08-09-2022",
        providerDesignation: "Doctor",
        gender: "Male",
        visitId: "dasf4325",
      },
    },
  ];

  $scope.assignClasses = function () {
    for (let i = 0; i < $scope.patientJourney.length; ++i) {
      $scope.patientJourney[i].count = i + 1;
      if ($scope.patientJourney[i].text.match("Email"))
        $scope.patientJourney[i].class = "email";
      else if ($scope.patientJourney[i].text.match("SMS"))
        $scope.patientJourney[i].class = "sms";
      else if ($scope.patientJourney[i].text.match("Phone"))
        $scope.patientJourney[i].class = "phone";
      else if ($scope.patientJourney[i].text.match("Survey"))
        $scope.patientJourney[i].class = "survey";
    }
    for (let i = 0; i < $scope.patientJourney.length; ++i) {
      if (i == 0) {
        $scope.patientJourney[i].class += " left";
      } else if (i == 1) {
        $scope.patientJourney[i].class += " top top-right";
      } else if (i == 2) {
        $scope.patientJourney[i].class += " rightt";
      } else {
        if ($scope.patientJourney[i - 2].class.match(" left"))
          $scope.patientJourney[i].class += " rightt";
        else if ($scope.patientJourney[i - 2].class.match("top")) {
          if ($scope.patientJourney[i - 2].class.match(" top-right"))
            $scope.patientJourney[i].class += " top top-left";
          else $scope.patientJourney[i].class += " top top-right";
        } else if ($scope.patientJourney[i - 2].class.match("rightt"))
          $scope.patientJourney[i].class += " left";
      }
    }
  };
  $scope.assignClasses();
  console.log($scope.patientJourney);
  // $scope.patientJourney = [
  //   { icon: "", action: "Email Sent", Time: new Date() },
  //   { icon: "", action: "Survey", Time: new Date() },
  //   { icon: "", action: "Email Sent", Time: new Date() },
  //   { icon: "", action: "PhoneCall", Time: new Date() },
  //   { icon: "", action: "Email Sent", Time: new Date() },
  //   { icon: "", action: "SMS Sent", Time: new Date() },
  //   { icon: "", action: "Email Sent", Time: new Date() },
  //   { icon: "", action: "Phone Call", Time: new Date() },
  //   { icon: "", action: "Email Sent", Time: new Date() },
  //   { icon: "", action: "SMS Sent", Time: new Date() },
  //   { icon: "", action: "Phone Call", Time: new Date() },
  // ];
  $scope.surveyQuestions = [
    {
      number: 1,
      text: "Have you developed breast pain,or breast lump or nipple discharge?",
      required: "Required",
      yes: false,
      no: false,
    },
    {
      number: 2,
      text: "Have you developed breast pain,or breast lump or nipple discharge?",
      required: "Required",
      yes: false,
      no: false,
    },
    {
      number: 3,
      text: "Have you developed breast pain,or breast lump or nipple discharge?",
      required: "Required",
      yes: false,
      no: false,
    },
  ];
  // $scope.options = [
  //   {
  //     action: "Email Sent",
  //     icon: "fa-solid fa-id-card",
  //     dateOfTreatment: "08-09-2022",
  //     Location: "New York",
  //     visitDate: "08-09-2022",
  //     surveyDate: "08-09-2022",
  //     program: "HRA",
  //     status: "Opened",
  //     type: "Type",
  //     memberCellNumber: "4564536345",
  //     locationId: "34562345",
  //     interventionDateTime: "08-09-2022",
  //     providerDesignation: "Doctor",
  //     gender: "Male",
  //     visitId: "dasf4325",
  //   },
  // ];

  $scope.add = function () {
    $scope.patientJourney.push({
      color: "rgb(229 197 75)",
      icons: "fa-solid fa-envelope-open-text",
      text: "Email Sent",
      date: "Jun 01,2022 12:51 PM",
      options: {
        action: "Email Sent",
        dateOfTreatment: "08-09-2022",
        location: "New York",
        visitDate: "08-09-2022",
        surveyDate: "08-09-2022",
        program: "HRA",
        status: "Opened",
        type: "Type",
        memberCellNumber: "4564536345",
        locationId: "34562345",
        interventionDateTime: "08-09-2022",
        providerDesignation: "Doctor",
        gender: "Male",
        visitId: "dasf4325",
      },
    });
    $scope.assignClasses();
  };
  $scope.dynamicPopover = {
    templateUrl: "/Routes/Intervention/popover.html",
  };
  $scope.labelColor = function (obj, res) {
    if (res == "y") {
      obj.yes = true;
      obj.no = false;
    } else {
      obj.no = true;
      obj.yes = false;
    }

    // res.yes == false
    //   ? ((res.yes = true), (res.no = false))
    //   : ((res.yes = false), (res.no = true));
  };
});
