function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function myreplacer(str) {
        var mapObj = {
            ">": "&gt;",
            "<": "&lt;",
            "&": "&amp;"
        };
        str = str.replace(/<|>|&/gi, function(matched) {
            return mapObj[matched];
        });
        return str;
    }
    function submit(e) {
        alert("Submitted");
    }
    function backButton(e) {
        $.submitWin.close();
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "submissionPage";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.submitWin = Ti.UI.createWindow({
        orientationModes: [ Ti.UI.PORTRAIT ],
        backgroundColor: "#e6e6e6",
        backgroundDisabledColor: "#000000",
        id: "submitWin"
    });
    $.__views.submitWin && $.addTopLevelView($.__views.submitWin);
    $.__views.navBar = Ti.UI.createView({
        backgroundColor: "black",
        top: "0%",
        width: "100%",
        height: "13%",
        font: {
            fontSize: 14
        },
        zIndex: 0,
        id: "navBar"
    });
    $.__views.submitWin.add($.__views.navBar);
    $.__views.back = Ti.UI.createButton({
        left: "5%",
        color: "white",
        backgroundColor: "transparent",
        borderColor: "transparent",
        font: {
            fontFamily: "queensfoundationfont",
            fontSize: 35
        },
        top: "0%",
        title: "T",
        id: "back"
    });
    $.__views.navBar.add($.__views.back);
    backButton ? $.addListener($.__views.back, "click", backButton) : __defers["$.__views.back!click!backButton"] = true;
    $.__views.QL = Ti.UI.createImageView({
        width: "33%",
        top: "13%",
        id: "QL",
        image: "QL300.png"
    });
    $.__views.navBar.add($.__views.QL);
    $.__views.titleBan = Ti.UI.createView({
        backgroundColor: "white",
        top: "7%",
        height: "15%",
        font: {
            fontSize: 12
        },
        id: "titleBan"
    });
    $.__views.submitWin.add($.__views.titleBan);
    $.__views.qp = Ti.UI.createImageView({
        top: "12%",
        width: "30%",
        left: "7%",
        id: "qp",
        image: "QM_FINAL_outlines.png"
    });
    $.__views.titleBan.add($.__views.qp);
    $.__views.Title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 18,
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: "bold"
        },
        color: "#000000",
        textAlign: "Titanium.UI.TEXT_ALIGNMENT_RIGHT",
        top: "25%",
        right: "5%",
        text: "Submission Preview",
        id: "Title"
    });
    $.__views.titleBan.add($.__views.Title);
    $.__views.__alloyId125 = Ti.UI.createScrollView({
        top: "18%",
        backgroundColor: "#e6e6e6",
        showVerticalScrollIndicator: "true",
        width: Titanium.UI.FILL,
        bottom: "0%",
        contentHeight: Titanium.UI.SIZE,
        contentWidth: "auto",
        layout: "vertical",
        scrollType: "vertical",
        id: "__alloyId125"
    });
    $.__views.submitWin.add($.__views.__alloyId125);
    $.__views.pickerView = Ti.UI.createView({
        height: "300dp",
        id: "pickerView"
    });
    $.__views.__alloyId125.add($.__views.pickerView);
    $.__views.uploadedImage = Ti.UI.createImageView({
        height: "60%",
        width: "65%",
        autorotate: true,
        top: "20%",
        left: "17%",
        id: "uploadedImage"
    });
    $.__views.pickerView.add($.__views.uploadedImage);
    $.__views.subPrev = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "20",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: "bold"
        },
        color: "#000000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10%",
        left: "21.5%",
        text: "Submission Preview",
        id: "subPrev"
    });
    $.__views.pickerView.add($.__views.subPrev);
    $.__views.uploadIcon = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "50",
            fontFamily: "Entypo",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "16%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "82.4%",
        text: "z",
        id: "uploadIcon"
    });
    $.__views.pickerView.add($.__views.uploadIcon);
    $.__views.ImageInfo = Ti.UI.createLabel({
        width: "100.09%",
        height: "6.72%",
        font: {
            fontSize: "10",
            fontFamily: "",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        left: "5%",
        top: "83.7%",
        text: "1 Image to upload, and includes the following:",
        id: "ImageInfo"
    });
    $.__views.pickerView.add($.__views.ImageInfo);
    $.__views.submissionsView = Ti.UI.createView({
        backgroundColor: "transparent",
        top: "0%",
        left: "0%",
        width: "100%",
        layout: "vertical",
        height: "700dp",
        id: "submissionsView"
    });
    $.__views.__alloyId125.add($.__views.submissionsView);
    $.__views.photoDate = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Date:",
        id: "photoDate"
    });
    $.__views.submissionsView.add($.__views.photoDate);
    $.__views.photoTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Title of item:",
        id: "photoTitle"
    });
    $.__views.submissionsView.add($.__views.photoTitle);
    $.__views.photoPlace = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Location:",
        id: "photoPlace"
    });
    $.__views.submissionsView.add($.__views.photoPlace);
    $.__views.photoNameF = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Photographer First:",
        id: "photoNameF"
    });
    $.__views.submissionsView.add($.__views.photoNameF);
    $.__views.photoName = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Photographer Last:",
        id: "photoName"
    });
    $.__views.submissionsView.add($.__views.photoName);
    $.__views.photoPeopleName = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Person/People Name:",
        id: "photoPeopleName"
    });
    $.__views.submissionsView.add($.__views.photoPeopleName);
    $.__views.photoEventName = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Event Name:",
        id: "photoEventName"
    });
    $.__views.submissionsView.add($.__views.photoEventName);
    $.__views.photoOrg = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Organizations:",
        id: "photoOrg"
    });
    $.__views.submissionsView.add($.__views.photoOrg);
    $.__views.photoMake = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Make/Model and/or Software used:",
        id: "photoMake"
    });
    $.__views.submissionsView.add($.__views.photoMake);
    $.__views.photoLoc = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Places Depicted:",
        id: "photoLoc"
    });
    $.__views.submissionsView.add($.__views.photoLoc);
    $.__views.photoMeasure = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Measurements:",
        id: "photoMeasure"
    });
    $.__views.submissionsView.add($.__views.photoMeasure);
    $.__views.photoNotesLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "12",
            fontFamily: "Montserrat-Regular",
            fontStyle: "",
            fontWeight: ""
        },
        color: "#000000",
        left: "5%",
        top: "1%",
        wordWrap: "true",
        text: "Additional Notes:",
        id: "photoNotesLabel"
    });
    $.__views.submissionsView.add($.__views.photoNotesLabel);
    $.__views.bannerBottom = Ti.UI.createView({
        backgroundColor: "#ffffff",
        height: "25%",
        left: "0%",
        top: "93%",
        width: "100%",
        id: "bannerBottom"
    });
    $.__views.submitWin.add($.__views.bannerBottom);
    $.__views.edit = Ti.UI.createButton({
        top: "5%",
        left: "5%",
        width: "30%",
        backgroundColor: "#f2f2f2",
        borderColor: "gray",
        color: "black",
        borderRadius: 5,
        height: "20%",
        font: {
            fontWeight: "bold"
        },
        title: "Edit",
        id: "edit"
    });
    $.__views.bannerBottom.add($.__views.edit);
    backButton ? $.addListener($.__views.edit, "click", backButton) : __defers["$.__views.edit!click!backButton"] = true;
    $.__views.next = Ti.UI.createButton({
        top: "5%",
        right: "5%",
        width: "30%",
        backgroundColor: "#f2f2f2",
        borderColor: "gray",
        color: "black",
        borderRadius: 5,
        height: "20%",
        font: {
            fontWeight: "bold"
        },
        title: "Submit",
        id: "next"
    });
    $.__views.bannerBottom.add($.__views.next);
    submit ? $.addListener($.__views.next, "click", submit) : __defers["$.__views.next!click!submit"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var data = require("data");
    $.Title.text = args.thisTitle || "Error, most like";
    $.QL.image = "/images/QL300.png";
    $.qp.image = "/images/QM_FINAL_outlines.png";
    var checkOS = "android";
    if ("Scanned Item" == args.thisTitle) {
        args.photoTitle.length <= 35 && args.photoDate.length <= 35 && args.photoEventName.length <= 35 && args.photoOrg.length <= 35 && args.photoFirstName.length <= 35 && args.photoLastName.length <= 35 && args.photoPeopleNames.length <= 35 && args.photoModel.length <= 35 && args.photoLocation.length <= 35 && args.artifactType.length <= 35 && args.photoMeasurements.length <= 35 ? $.submissionsView.height = "470dp" : args.photoTitle.length >= 90 && args.photoDate.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoModel.length >= 90 && args.photoLocation.length >= 90 && args.artifactType.length >= 90 && args.photoMeasurements.length >= 90 ? $.submissionsView.height = "800dp" : args.artifactType.length >= 5 && args.photoTitle.length >= 90 && args.photoDate.length >= 90 && args.photoEventName.length >= 90 && args.photoOrg.length >= 90 && args.photoFirstName.length >= 90 && args.photoLastName.length >= 90 && args.photoPeopleNames.length >= 90 && args.photoModel.length >= 90 && args.photoLocation.length >= 90 && args.photoMeasurements.length >= 90 ? $.submissionsView.height = "700dp" : args.photoTitle.length >= 50 && args.photoDate.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoModel.length >= 50 && args.photoLocation.length >= 50 && args.artifactType.length >= 50 && args.photoMeasurements.length >= 50 ? $.submissionsView.height = "650dp" : $.submissionsView.height = "560dp";
        $.photoPlace.text = "Artifact Type: ";
        $.photoNameF.text = "Artifact Creator [First]: ";
        $.photoName.text = "Artifact Creator [Last]: ";
        $.photoDate.text += " " + data.getData().photoDate;
        $.photoPlace.text += " " + data.getData().artifactType;
        $.photoNameF.text += " " + data.getData().photoFirstName;
        $.photoName.text += " " + data.getData().photoLastName;
        $.photoPeopleName.text += " " + data.getData().photoPeopleNames;
        $.photoEventName.text += " " + data.getData().photoEventName;
        $.photoOrg.text += " " + data.getData().photoOrg;
        $.photoMake.text += " " + data.getData().photoModel;
        $.photoNotesLabel.text += " " + data.getData().photoNotes;
        $.photoTitle.text += " " + data.getData().photoTitle;
        $.photoLoc.text += " " + data.getData().photoLocation;
        $.photoMeasure.text += " " + data.getData().photoMeasurements;
    }
    if ("Digital Photo" == args.thisTitle) {
        args.photoTitle.length <= 49 && args.photoDate.length <= 49 && args.photoPlace.length <= 49 && args.photoEventName.length <= 49 && args.photoOrg.length <= 49 && args.photoFirstName.length <= 49 && args.photoLastName.length <= 49 && args.photoPeopleNames.length <= 49 && args.photoModel.length <= 49 ? $.submissionsView.height = "450dp" : args.photoTitle.length >= 100 && args.photoDate.length >= 100 && args.photoPlace.length >= 100 && args.photoEventName.length >= 100 && args.photoOrg.length >= 100 && args.photoFirstName.length >= 100 && args.photoLastName.length >= 100 && args.photoPeopleNames.length >= 100 && args.photoModel.length >= 100 ? $.submissionsView.height = "700dp" : args.photoTitle.length >= 50 && args.photoDate.length >= 50 && args.photoPlace.length >= 50 && args.photoEventName.length >= 50 && args.photoOrg.length >= 50 && args.photoFirstName.length >= 50 && args.photoLastName.length >= 50 && args.photoPeopleNames.length >= 50 && args.photoModel.length >= 50 ? $.submissionsView.height = "650dp" : $.submissionsView.height = "600dp";
        $.photoLoc.visible = false;
        $.photoMeasure.visible = false;
        $.photoLoc.top = "0%";
        $.photoMeasure.top = "0%";
        $.photoDate.text += " " + data.getData().photoDate;
        $.photoPlace.text += " " + data.getData().photoPlace;
        $.photoNameF.text += " " + data.getData().photoFirstName;
        $.photoName.text += " " + data.getData().photoLastName;
        $.photoPeopleName.text += " " + data.getData().photoPeopleNames;
        $.photoEventName.text += " " + data.getData().photoEventName;
        $.photoOrg.text += " " + data.getData().photoOrg;
        $.photoMake.text += " " + data.getData().photoModel;
        $.photoNotesLabel.text += " " + data.getData().photoNotes;
        $.photoTitle.text += " " + data.getData().photoTitle;
        $.photoLoc.text += " " + data.getData().photoLocation;
        $.photoMeasure.text += " " + data.getData().photoMeasurements;
    }
    $.uploadedImage.image = args.customImage || "/images/QL300.png";
    var activityIndicator = Ti.UI.createActivityIndicator({
        color: "black",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 26,
            fontWeight: "bold"
        },
        message: "Sending...",
        style: Ti.UI.ActivityIndicatorStyle.DARK,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    });
    $.submitWin.add(activityIndicator);
    if ("Scanned Material" == data.getData().resourceType) {
        var scannedMaterial = data.getData().userPhoto;
        var stringToSaveInDatabase = Ti.Utils.base64encode(scannedMaterial).toString();
        ({
            userPhoto: stringToSaveInDatabase,
            submit: data.getData().submitType,
            resourceType: data.getData().resourceType,
            step: data.getData().photoStepNumber,
            firstname: myreplacer(data.getData().photoFirstName),
            lastname: myreplacer(data.getData().photoLastName),
            lang: myreplacer(data.getData().photoLanguage),
            right: data.getData().photoRights,
            title: myreplacer(data.getData().photoTitle),
            memberType: data.getData().photoMemberType,
            additional: myreplacer(data.getData().photoNotes),
            scannedLocation: myreplacer(data.getData().photoLocation),
            measurements: myreplacer(data.getData().photoMeasurements),
            descriptionAbstract: myreplacer(data.getData().artifactType),
            artifactEvent: myreplacer(data.getData().photoEventName),
            artifactOrganization: myreplacer(data.getData().photoOrg),
            artifactPerson: myreplacer(data.getData().photoPeopleNames),
            scanner: myreplacer(data.getData().photoModel),
            year: myreplacer(data.getData().photoDate),
            email: Ti.App.Properties.getString("Email Address"),
            uploaderfname: Ti.App.Properties.getString("First Name"),
            uploaderlname: Ti.App.Properties.getString("Last Name"),
            mimeType: data.getData().mimeType,
            fileExtension: data.getData().fileExtension,
            operatingSystem: checkOS,
            osVersion: Ti.Platform.version
        });
    } else {
        var stringToSaveInDatabase = Ti.Utils.base64encode(data.getData().userPhoto).toString();
        ({
            userPhoto: stringToSaveInDatabase,
            submit: data.getData().submitType,
            resourceType: data.getData().resourceType,
            step: data.getData().photoStepNumber,
            firstname: myreplacer(data.getData().photoFirstName),
            lastname: myreplacer(data.getData().photoLastName),
            lang: myreplacer(data.getData().photoLanguage),
            right: data.getData().photoRights,
            title: myreplacer(data.getData().photoTitle),
            memberType: data.getData().photoMemberType,
            additional: myreplacer(data.getData().photoNotes),
            camera: myreplacer(data.getData().photoModel),
            events: myreplacer(data.getData().photoEventName),
            organization: myreplacer(data.getData().photoOrg),
            persons: myreplacer(data.getData().photoPeopleNames),
            photoLocation: myreplacer(data.getData().photoPlace),
            year: myreplacer(data.getData().photoDate),
            email: Ti.App.Properties.getString("Email Address"),
            uploaderfname: Ti.App.Properties.getString("First Name"),
            uploaderlname: Ti.App.Properties.getString("Last Name"),
            mimeType: data.getData().mimeType,
            fileExtension: data.getData().fileExtension,
            operatingSystem: checkOS,
            osVersion: Ti.Platform.version
        });
    }
    __defers["$.__views.back!click!backButton"] && $.addListener($.__views.back, "click", backButton);
    __defers["$.__views.edit!click!backButton"] && $.addListener($.__views.edit, "click", backButton);
    __defers["$.__views.next!click!submit"] && $.addListener($.__views.next, "click", submit);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;