﻿define(
({
		viewer: {
			loading: {
				step1: "LOADING APPLICATION",
				step2: "LOADING DATA",
				step3: "INITIALIZING THE TOUR",
				loadBuilder: "SWITCHING TO BUILDER MODE",
				fail: "Sorry, Map Tour loading failed",
				failButton: "Retry"
			},
			errors: {
				boxTitle: "An error has occurred",
				portalSelf: "Fatal error: Failed to get portal configuration",
				invalidConfig: "Fatal error: Invalid configuration",
				invalidConfigOwner: "Fatal error: Invalid configuration (authorized owner required)",
				invalidConfigNoWebmap: "Fatal error: Invalid configuration (web map or application identifier not specified in index.html)",
				createMap: "Unable to create map",
				invalidApp: "Fatal error: The application cannot be loaded",
				noLayer: "The web map does not contain a valid data layer for Map Tour.",
				noLayerMobile: "Welcome to the Map Tour web application. The application is not configured. The Map Tour builder is not supported on mobile devices.",
				noLayerView: "Welcome to the Map Tour web application.<br />The application is not configured yet.",
				appSave: "Error saving the web application",
				mapSave: "Error saving the web map",
				featureServiceLoad: "Error loading feature service",
				notAuthorized: "You are not authorized to access this application",
				oldBrowserTitle: "Browser not fully supported",
				noBuilderIE8: "The Map Tour builder is not supported on Internet Explorer before version 9.",
				ie10Win7Explain: "The Map Tour interactive builder is not supported on Internet Explorer 10 on Windows 7 when the data source is a Feature Service with attachments. To use a Feature Service with attachments, you have to <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>manually force document mode to Internet Explorer 9 standards</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>downgrade to Internet Explorer 9</a> or upgrade to Windows 8.",
				oldBrowserExplain: "This browser doesn't support automatic thumbnail generation from the images you upload into your map tour. You can create a map tour using this browser, but you will have to provide a separate thumbnail image for each of the images you upload.",
				oldBrowserExplain2: "To improve your experience, <a href='http://browsehappy.com/' target='_blank'>upgrade your browser</a> or <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>activate Google Chrome Frame for Internet Explorer</a>.",
				oldBrowserExplain3: "The Map Tour builder doesn't work with Internet Explorer 10 on Windows XP.",
				oldBrowserClose: "Close"
			},
			mobileHTML: {
				showIntro: "SHOW TITLE",
				hideIntro: "HIDE TITLE",
				navList: "List",
				navMap: "Map",
				navInfo: "Pictures",
				introStartBtn: "Start"
			},
			desktopHTML: {
				storymapsText: "A story map",
				builderButton: "Switch to builder mode",
				bitlyTooltip: "Get a short link to the application"
			},
			builderHTML: {
				panelHeader: "APPLICATION CONFIGURATION",
				buttonSave: "SAVE",
				buttonDiscard: "CANCEL",
				buttonSettings: "Settings",
				buttonView: "View mode",
				buttonItem: "Open the Web Application item",
				buttonHelp: "Help",
				buttonOrganize: "Organize",
				buttonAdd: "Add",
				buttonImport: "Import",
				buttonImportDisabled: "Import is not available when using a Feature Service with attachments",
				dataEditionDisabled: "Data edition is disabled on CSV data source",
				dataSourceWarning: "The Map Tour data layer has changed. If the features ID are not the same, you have to reset the order and hidden points through <b>Organize</b>. If the fields name differs, you have to reset the fields settings under the <b>data tab in Settings</b>.",
				dataPicError0a: "This tour includes <b>%NB%</b> non-compliant picture URLs.",
				dataPicError0b: "This tour may includes <b>%NB%</b> non-compliant picture URLs.",
				dataPicError1: "Map Tour now requires that a picture URL end with one of the following extension: .jp(e)g, .png, .gif or .bmp.",
				dataPicError2: "This requirement will not affect your existing published Map Tour. However, in order to use the interactive builder, you must first resolve the URL issue by performing one of two actions:",
				dataPicError3: "Edit URLs",
				dataPicError4: "This will add <i>#isPicture</i> to the end of unsupported picture URLs. Most server support URL appendages. However, once you have performed that action, you should verify that the updated picture URLs are functional by navigating through your points. If each pictures loads, you can now save the Map Tour. If <b>pictures are broken, don’t save the Map Tour</b>. Instead, reload the builder and perform the second action.",
				dataPicError5: "Limit the tour to pictures",
				dataPicError6: "This option cause all URLs to be considered images, but you won't be able to add videos using the interactive builder. This action is reversible, should you decide to add video in the future.",
				dataPicError7: "Your Map Tour has been restricted to pictures, videos can't be used. If you choose to remove that limitation, check that your pictures still loads correctly before saving the Map Tour. You will be able to restore that limitation later if needed.",
				dataPicError8: "Remove picture limitation",
				dataPicError9: "If these URLs points to videos you can ignore this warning, if they point to image, you need to perform one of the following two actions:",
				modalCancel: "Cancel",
				modalApply: "Apply",
				organizeHeader: "Organize the tour",
				organizeGeneralCaption: "Use drag and drop to sort tour points",
				organizeDelete: "Delete",
				organizeHide: "Hide",
				organizeReset: "Reset order and hidden points",
				addMaxPointReached: "You have reached the maximum number of points authorized by the icons set and cannot add another tour point.<br /><br />Note that if you delete existing points, you will need to reload the application.",
				addMaxPointReachedMobile: "Sorry, you have reached the maximum number of authorized points and cannot add that picture.",
				addClose: "Close",
				addHeader: "Add a new tour point",
				addTabPicture: "Media",
				addTabInformation: "Information",
				addTabLocation: "Location",
				addSelectCaption: "Select or drop picture",
				addNoteVideo: "Consult Help for instructions on using videos",		
				addSelectCaptionNoFileReader: "Select picture",
				addChangePhoto: "Change picture and thumbnail",
				addPictureResolutionIntro: "The picture resolution is higher than required:",
				addPictureResolutionOldBrowser: "The picture resolution is higher than required. Optimize the Map Tour experience by specifying a resolution lower than %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Change picture resolution to %RESOLUTION%",
				addPictureResolutionKeep: "Keep the original resolution of %RESOLUTION%",
				addSelectThumbnail: "Select thumbnail",
				addNoThumbSelected: "No thumbnail selected",
				addThumbSelected: "Selected",
				addCameraSettingsHeader: "CAMERA SETTINGS",
				addThumbnailHeader: "THUMBNAIL",
				addLabelPicUrl: "Picture",
				addLabelThumbUrl: "Thumbnail",
				addTextPlaceholderUrl: "Enter an image URL",
				addTextPlaceholderUrl2: "Enter a Youtube page URL",
				addTextPlaceholderUrl3: "Enter a Vimeo page URL",
				addTextPlaceholderUrl4: "Enter a video embed URL",
				addLabelVideo: "Video",
				addMediaVideoOther: "Other",
				addMediaVideoHelp: "Check the URL and get the default thumbnail",
				addMediaVideoHelpTooltip1: "Check succeeded",
				addMediaVideoHelpTooltip2: "Check failed",
				addMediaVideoHelpTooltip4: "Find the option to embed the video and copy the video URL that is present in the code",
				addLabelName: "Name",
				addLabelDescription: "Caption",
				addTextPlaceholder: "Type something",
				addLocatePlaceholder: "Locate an address or a place",
				addPinColor: "Color",
				addLatitude: "Latitude",
				addLongitude: "Longitude",
				addLatitudePlaceholder: "e.g. 34.056",
				addLongitudePlaceholder: "e.g. -117.195",
				addUploading: "Uploading tour point",
				addSave: "Add tour point",
				addMobileUploading: "Uploading picture",
				addMobileName: "Enter a name",
				addMobileNameMandatory: "Error, please enter a name.",
				addMobileError: "Sorry, something has gone wrong",
				settingsHeader: "Application settings",
				settingsTabLayout: "Layout",
				settingsTabColor: "Colors",
				settingsTabLogo: "Header",
				settingsTabFields: "Data",
				settingsTabExtent: "Extent",
				settingsTabZoom: "Zoom Level",
				settingsLayoutExplain: "Select the application layout you want.",
				settingsLayoutProfessional: "Three-panel Layout",
				settingsLayoutModern: "Integrated Layout",
				settingsLayoutSelected: "Selected layout",
				settingsLayoutSelect: "Select this layout",
				settingsLayoutNote: "Note that on points using videos, the placard will always be placed under the video even if that option is unchecked.",
				settingsColorExplain: "Change appearance by choosing a pre-defined theme, or create your own.",
				settingsLabelColor: "Header, content and footer colors",
				settingsLogoExplain: "Customize the header logo (maximum is 250 x 50px).",
				settingsLogoEsri: "Esri logo",
				settingsLogoNone: "No logo",
				settingsLogoCustom: "Custom logo",
				settingsLogoCustomPlaceholder: "Image URL",
				settingsLogoCustomTargetPlaceholder: "Click-through link",
				settingsLogoSocialExplain: "Customize the header top right link.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "This feature has been disabled by the Administrator",
				settingsDataFieldsExplain: "Select photo name, caption and color fields.",
				settingsDataFieldsError: "The application cannot determine the appropriate name, caption or color data. Please select the fields to be used here. These settings can be changed at a later time.",
				settingsFieldsLabelName: "Name",
				settingsFieldsLabelDescription: "Caption",
				settingsFieldsLabelColor: "Color",
				settingsFieldsReset: "Reset fields selection",
				settingsExtentExplain: "Set the Map Tour initial extent through the interactive map below.",
				settingsExtentExplainBottom: "The extent you define will modify your web map initial extent. Note that this extent isn't used if it doesn't include the first tour point. In that case the tour will open centered on the first point.",
				settingsExtentDateLineError: "The extent cannot be across the meridian of 180° longitude",
				settingsExtentDateLineError2: "Error computing the extent",
				settingsExtentDrawBtn: "Draw a new extent",
				settingsExtentModifyBtn: "Edit the extent",
				settingsExtentApplyBtn: "Preview on Map Tour",
				settingsExtentUseMainMap: "Use Map Tour extent",
				settingsZoomExplain: "Set zoom for story points following introduction (optional).",
				settingsLabelZoom: "Scale/level",
				settingsZoomFirstValue: "None",
				settingsFieldError: "Please select a field in each list",
				dataExplain: "The feature service will be added to your web map. It won't be shared with anyone, and only you will have add, edit, and delete privileges.<br /><br />If you change the application sharing privileges, the system will ask you if you want to update your Feature Service sharing configuration. This is required for your users to access your data. You will remain the only one with editing privileges.",
				dataNameLbl: "Service name",
				dataFolderListLbl: "Folder",
				dataFolderListFetching: "Fetching folders ...",
				dataRootFolder: "Root",
				dataNameError: "Enter a name for the feature service",
				dataFolderError: "Select a valid folder",
				dataSrcContainsInvalidChar: "The feature service name contains one or more invalid characters (-, <, >, #, %, :, \", ?, &, +, /, or \).",
				dataSrvAlreadyExistsError: "A service with that name already exists within the organization. Please choose a different name.",
				dataBtnSave: "Create the service",
				dataFooterProgress: "Creation in progress",
				dataFooterSucceed: "Creation succeeded. Loading",
				dataFooterError: "Creation failed. Please try again",
				tabError: "Please check for errors in all tabs",
				introRecordBtn: "Intro",
				introRecordActivate: "Use the first point as introduction (does not appear in carousel)"
			},
			addPopupJS: {
				uploadingPicture: "Uploading picture",
				uploadSuccess: "Upload successful",
				uploadError: "Error uploading the picture",
				notJpg: "Please choose a jpeg photo to upload",
				errorNoPhoto: "Choose an image to upload",
				errorNoThumbnail: "Choose a thumbnail to upload",
				errorInvalidPicUrl: "Enter a valid picture (starts with http(s)://, ends with jpg, png, gif or bmp). You can end the URL with '#isPicture' to override that rule.",
				errorInvalidThumbUrl: "Enter a valid thumbnail (starts with http(s)://, ends with jpg, png, gif or bmp).",
				errorInvalidVideoUrl: "Enter a valid video URL (starts with http(s)://)",
				errorNoName: "Enter a name for this tour point",
				errorNoDescription: "Enter a caption for this tour point",
				errorNoLocation: "Set a location for this tour point"
			},
			builderJS: {
				noPendingChange: "No pending change",
				unSavedChangeSingular: "1 unsaved change",
				unSavedChangePlural: "unsaved changes",
				popoverDiscard: "Are you sure to want to discard any unsaved changes?",
				yes: "Yes",
				no: "No",
				popoverLoseSave: "By opening the viewer, you will lose any unsaved changes",
				ok: "Ok",
				popoverSaveWhenDone: "Don't forget to save when you are done",
				closeWithPendingChange: "Are you sure to want to confirm the action ? Your changes will be lost.",
				gotIt: "Ok",
				savingApplication: "Saving application",
				saveSuccess: "Application saved successfully",
				saveError: "Save failed, please try again",
				dragColorPicker: "Move me around<br />or change my color",
				dataWarningExtent: "You have data outside of the web map extent. Those data won't be used as tour points, change map extent if you want to use them.",
				dataWarningVisibi: "Your Map Tour layer is not visible at the current web map extent. Confirm your Map Tour layer is visible with a %MAPSIZE% large map.",
				dataWarningEdit: "Edit web map",
				dataWarningClose: "Close",
				signIn: "Please sign in with an account on",
				signInTwo: "to save the application."
			},
			organizePopupJS: {
				messageStart: "You have chosen to delete",
				messageSinglePoint: "one tour point",
				messageMultiPoint: "tour points",
				messagePermantRemove: "This will permanently remove the",
				messageRecord: "record",
				messageRecordPlural: "records",
				messageConfirm: "from your database. Do you want to continue?",
				labelButtonShow: "Show",
				labelButtonHide: "Hide"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "This will permanently delete the picture and thumbnail",
				popoverDeleteWarningThumb: "This will permanently delete the thumbnail",
				popoverUploadingPhoto: "Uploading picture and thumbnail",
				popoverUploadingThumbnail: "Uploading thumbnail",
				popoverUploadSuccessful: "Upload successful",
				popoverUploadError: "Upload failed, please try again",
				changePicAndThumb: "Change picture",
				changeThumb: "Change thumbnail",
				selectPic: "Change media",
				selectThumb: "Change thumbnail",
				uploadPicAndThumb: "Apply"
			},
			headerJS:{
				editMe: "Edit me !",
				templateTitle: "Set template title",
				templateSubtitle: "Set template subtitle"
			},
			crossFaderJS:{
				setPicture: "Set picture title",
				setCaption: "Set picture caption"
			},
			importPopup: {
				title: "Import",
				prevBtn: "Back",
				nextBtn: "Next"
			},
			importPopupHome: {
				header: "Where are your pictures stored ?"
			},
			onlinePhotoSharingCommon: {
				disabled: "This feature has been disabled by the Administrator",
				disabledPortal: "This feature is disabled on Portal for ArcGIS",
				header1: "The pictures need to be publicly shared.",
				header2: "The import will be limited to %NB1% pictures to respect the limit of %NB2% points per tour.",
				emptyDataset: "Error, no pictures found",
				footerImport: "Import",
				selectAlbum: "Select a public album",
				selectAlbum2: "Select an album",
				pleaseChoose: "Please Choose",
				userLookup: "Look up",
				userLookingup: "Looking up",
				csv: "Referenced in a CSV",
				fromScratch: "Start from scratch",
				select: "Make a selection",
				locUse: "Use pictures location",
				locExplain: "You may not want to use pictures location as they can be inherited from the album, resulting in all photos being at the same location."
			},
			viewFlickr: {
				header: "Enter a Flickr user name and select a Photo Set or a Tag to be imported.",
				userInputLbl: "Enter a User Name",
				signInMsg2: "User not found",
				selectSet: "Select a Photo Set",
				selectTag: "or Select a Tag",
				footerImportTag: "Import the selected Tag",
				footerImportSet: "Import the selected Set"
			},
			viewFacebook: {
				header: "Authenticate with a Facebook User Account or use a Public Page. Private albums can be used to create a public Map Tour that does not require Facebook user authentication, which allows comments and likes to remain private.",
				leftHeader: "Facebook User",
				rightHeader: "Facebook Page",
				pageExplain: "A Facebook page is a public brand/product or celebrity like <b>esrigis</b>. You can get the page name after the first '/' in the page URL.",
				pageInputLbl: "Enter a page name",
				lookupMsgError: "Page not found"
			},
			viewPicasa: {
				header: "Enter the email or the ID of a Picasa or Google+ account.",
				userInputLbl: "Enter an email or ID",
				signInMsg2: "Account not found",
				howToFind: "How to find an account ID",
				howToFind2: "Copy digits between the first and second '/' of any Picasa or G+ page"
			},
			viewCSV: {
				uploadBtn: "Select or drop a CSV file",
				resultHeaderEmpty: "The CSV is empty",
				resultHeaderSuccess: "Successfully loaded %NB_POINTS% points",
				resultHasBeenLimited: "The import has been limited to the first %VAL1% points out of %VAL2% to respect the limit of %VAL3% points per tour",
				browserSupport: "Your browser isn't supported, to use a CSV you have to <a href='http://browsehappy.com/' target='_blank'>upgrade your browser</a> or use ArcGIS.com web map viewer (see Help).",
				errorLatLng: "Latitude and Longitude fields haven't been found. Possible values for latitude are: <i>%LAT%</i> and for longitude: <i>%LONG%</i>.",
				errorFieldsExplain: "The loading failed as the following required fields hasn't been found",
				errorFieldsName: "<b>Name</b> possible values are: %VAL%",
				errorFieldsDesc: "<b>Description</b> possible values are: %VAL%",
				errorFieldsUrl: "<b>Picture URL</b> possible values are: %VAL%",
				errorFieldsThumb: "<b>Thumbnail URL</b> possible values are: %VAL%",
				errorFields2Explain: "The loading failed as the CSV does not use the same attributes than the layer for the following attributes",
				errorFields2Name: "<b>Name</b> use %VAL1% instead of %VAL2%",
				errorFields2Desc: "<b>Description</b> use %VAL1% instead of %VAL2%",
				errorFields2Url: "<b>Picture URL</b> use %VAL1% instead of %VAL2%",
				errorFields2Thumb: "<b>Thumbnail URL</b> use %VAL1% instead of %VAL2%",
				resultFieldsAll: "All attributes have been imported",
				resultFieldsNotAll: "The following attributes haven't been imported because they don't exists in the map layer",
				resultFieldsNotAll2: "The following attributes have been imported",
				footerNextBtnResult: "Import into the web map",
				footerProgress: "Import in progress",
				footerSucceed: "Import succeeded. Loading"
			},
			viewGeoTag: {
				header: "Click or tap the pictures you want to import to locate them.",
				headerMore: "Why my pictures are not located?",
				headerExplain: "If your pictures have a valid location, they will be automatically located on the map and listed on the second tab.<br /><br />By default Picasa and Flickr don't exploit the pictures EXIF location metadata, check Flickr/Picasa settings under Privacy tab to enable pictures location usage. You may have to completly reimport your pictures into Flickr/Picasa.<br /><br />For Facebook, you have to go on each picture, click Edit and select the location between the suggested choices that are based on the pictures EXIF metadata.",
				leftPanelTab1: "To locate",
				leftPanelTab2: "Located",
				clickOrTap: "Click or tap the Map to locate",
				clickDrop: "Do not import",
				footerImport: "Import",
				footerProgress: "Import in progress",
				footerSucceed: "Import succeeded. Loading...",
				loading: "Loading",
				error: "Pictures location import failed, locations have been ignored."
			},
			initPopup: {
				title: "Welcome to the Map Tour Builder",
				prevBtn: "Back",
				nextBtn: "Next"
			},
			initPopupHome: {
				header2: "This assistant will help you build a Map Tour from pictures already stored online or it will import them into your ArcGIS Online for Organization account.",
				title1: "My pictures are already hosted",
				title2: "I need to host my pictures",
				hostedFsNA: "Only available for ArcGIS for Organization Publisher and Administrator users",
				footer1: "When you are done, don't forget to share your Map Tour with your audience through the application item page.",
				footer2: "Map Tour Help",
				footer3: "Download the CSV template",
				footer4: "\"Save as\" if it doesn't download",
				footerProgress: "Creation in progress",
				footerSucceed: "Creation succeeded. Loading..."
			},
			helpPopup: {
				title: "Help",
				close: "Close",
				tab1: {
					title: "Introduction",
					div1: "The Map Tour template is designed for presenting geographic information where there is a compelling photographic element to the story you want to tell.",
					div2: "The template produces an attractive, easy-to-use web application that lets you present a small set of places on a map in a numbered sequence through which users can browse. The template is designed to be used in any web browser on any device, including smartphones and tablets.",
					div3: "This Help will guide you through the steps for publishing Map Tours like:",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>Palm Springs Map Tour</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>Nederland country's best mountain biking</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>Los Angeles River Map Tour</a></li></ul>",
					div5: "We would love to hear from you! Do not hesitate to share your Map Tour with us:",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>StoryMaps Website</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "Find a bug or want to request a new feature? Please let us know by submitting an issue on the <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub project page</a>."
				},
				tab2: {
					title: "Data",
					div1: "The main element to consider when building a Map Tour is to choose where your pictures will be stored. A Map Tour can use pictures stored on major photo sharing services, on any web server, or as attachments to a feature service.",
					div1a: "See the last section of this tab for details about supported picture formats and videos.",
					div2: "The interactive builder gives you two options for handling the images in your Map Tour:",
					div3: "<ul><li>You can use <b>photos that are already online</b>, such as images stored in a photo sharing site like Flickr, or images stored on your own website. These images will be referenced in your Map Tour via their URLs.</li><li>You can also <b>upload photos from your computer</b> directly into your Map Tour. This upload option requires that you have an ArcGIS Online subscription and that you have Publisher or Administrator privileges, because a hosted feature service is automatically created for you in which your photos are stored as attachments.</li></ul>",
					div4: "The main use cases are:",
					div4b: "<b>Your photos are not hosted</b> yet and you have an ArcGIS Online subscription: Using a hosted feature service is your best choice. Like public photo sharing services, we will optimize your pictures to create fast-loading images and you will have access to all administration and data management capabilities of the ArcGIS platform.",
					div5: "<b>You aren't a member of an Organization</b>: You first have to upload your pictures to a photo sharing website or to your own web server. The builder will help you use these pictures that will continue to be hosted at their original location.",
					div6: "<b>You are looking to reuse an existing Feature Service</b> that stores your pictures as attachments or that references external pictures: See the detailed section below.",
					div7: "<b>You are a user of a previous version</b> of the Map Tour template and already have your CSV that references your pictures and thumbnails: You will be able to import it and refine your data. The builder only supports CSVs that use lat/long fields; address-based CSVs can continue to be used through your web map (see section below).",
					div8: "Importing from online photo sharing services",
					div9: "The import operation references pictures that are already hosted by storing their URLs in a web map feature collection. The pictures are not stored in ArcGIS Online. If the hosted pictures can't be accessed, they won't be available in the Map Tour and you'll see a 'Picture not available' image. Depending on your photo service provider, the Map Tour may not import the name, description, and location of the pictures. Those attributes are stored in the web map and any edits to the online services won't be reflected in the Map Tour.",
					div10: "Storing the pictures on a web server",
					div11: "If you choose to host the pictures yourself, you will have to manually create thumbnails of your pictures. Using the full resolution pictures for the thumbnail will result in poor performance. For that reason, we strongly recommend that you use an online photo sharing services or a feature service that will do that for you.",
					div12: "Using an existing Feature Service or Shapefile",
					div13: "Any point feature service or shapefile can be used as a Map Tour data source. You just have to add it as a layer into your web map through the arcgis.com Map Viewer. If the application finds the expected attributes in your layer, all builder functionalities will be available.",
					div14: "The expected fields are (case insensitive):",
					div151: "Name",
					div152: "Description",
					div153: "Picture",
					div154: "Thumbnail",
					div155: "Color (optional)",
					div16: "The Name and Description fields are mandatory. If the application doesn't find matching fields when using a feature service, the viewer will not work until you configure the fields to be used through the builder. CSV and shapefile layers added to the web map need to have all the required fields or the builder won't work.",
					div162: "When using a feature service that stores the pictures as attachments, <b>only the features with two attachments will be used</b>. The first attachment defines the main picture, and the second attachment defines the thumbnail.",
					div17: "The picture and thumbnail fields are mandatory for feature services without attachments and optional (but strongly recommended) for feature services with attachments. If your service has attachments enabled, the builder will let you upload pictures as attachments. If not, you will only be able to edit the picture and thumbnail URLs.",
					div172: "When present, the picture and thumbnail fields will always be used and the feature service attachments won't be queried.",
					div173: "Example CSVs and shapefiles can be downloaded from",
					div18: "Creating a hosted Feature Services from a CSV or shapefile",
					div19: "When you create a hosted feature service from a CSV or shapefile, the attachments are not enabled by default. To enable them, open the feature service’s details page, click the small arrow on the layer section, and you will see that option. The Map Tour will continue to use the pictures and thumbnail you have referenced through attributes. Optionally, if you want to upload your pictures as feature service attachments, you will be able to do so through two buttons on the picture panel (\"Change Picture\" and \"Change Thumbnail\").",
					div20: "Supported pictures formats and videos",
					div21: "Supported picture format are: <b>.jpg, .jpeg, .png, .gif and .bmp</b>. If your media doesn’t end with that extension, the Map Tour will consider it to be a video, except when using a feature service (see below).",
					div22: "The Map Tour template doesn't include a video player, so you have to use the external video player provided by your favorite video hosting service (find the option to embed the video and copy the URL present in the given code). If you want to host the video yourself, you can create an HTML page that contains a video player like <a href='http://www.videojs.com/'>Video.js</a>.",
					div23: "The interactive builder doesn't provide a dialog to include video when using feature services with attachments, but it is possible to do so by editing your data outside of the interactive builder. In the arcgis.com map viewer, if you modify the picture fields to point to an external video and add a special parameter at the end of your URL (#isVideo), your media will be considered to be a video.",
					div24: "Note that you still need to have two valid pictures attachments or the point won’t be used. It isn't possible to use videos when using feature service attachments without the picture and thumbnail fields."
				},
				tab3: {
					title: "Customization",
					div1: "The builder provides several customization options that are accessible through the SETTINGS button in the top panel. If you don't find the option you expect, we also provide a downloadable version that you can deploy on your web server and enhance to fit your needs.",
					div2: "We recommend that you use the hosted version unless:",
					div3: "<li>It doesn't offer a UI customization you want to have, like using a header background image.</li><li>You are a developer and you want to enhance the application.</li>",
					div4: "The downloadable version can be configured through a web map or a web mapping application identifier. The main use cases are:",
					div41: "You build your map tour using the interactive builder in the hosted environment and configure the template with the web mapping application identifier. The settings you have defined with the interactive builder will be applied.",
					div42: "You build your web map outside of the interactive builder and configure the template with the web map identifier. You will have to read the documentation to learn how to configure the template.",
					div43: "Note that the interactive builder is available in the downloadable version but with some technical restrictions on browsers like Internet Explorer older than version 10.",
					div5: "Visit the <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub project page</a> to learn more about the downloadable version."
				},
				tab4: {
					title: "Tips",
					div0: "Supported browsers",
					div0a: "The Map Tour viewer is supported on IE8+. The interactive builder is supported on IE9+. We actively test it in all major browsers but if you experience some difficulties, we recommend that you use Chrome.",
					div0b: "If you experience some difficulties, please let us know. In the meantime, by building your Map Tour using the CSV template you will minimize your interaction with the builder interface.",
					div1: "Pictures",
					div2: "We recommend landscape orientation photos instead of portrait orientation. Portrait orientation images can be used, but on smaller screens like the iPad a lot of the photo may be obscured by the caption (text takes up more space when it is displayed in a tall area compared to a wide area). Although images of different sizes, shapes, and orientation can be used in one Map Tour, we recommend using the exact same size and shape for all the images. In this way, the user won't be distracted by different sized images as they follow the tour.",
					div2a: "If you are hosting the pictures yourself, we recommand a maximum resolution of <b>1090x725</b> for main pictures and <b>140x93</b> for thumbnails.",
					div3: "Formatting your caption text using HTML tags",
					div4: "The header and picture title/caption can include HTML tags to define formatting and links. For example, this code adds a yellow link:",
					div5: "Supporting Layers",
					div6: "You can add additional supporting layers to provide context to the Map Tour. These layers may contain other geographic features you want the map to show in addition to the Map Tour points, such as a study area, a walking or driving route linking your tour points, etc. The Map Tour template displays these additional supporting layers using the symbology you specify in the web map, but the popups aren't available.",
					div7: "Keep your tour short and sweet",
					div8: "There's a limit of 99 points per tour. Most Map Tours will of course be significantly shorter than this. Don't expect your audience to want to step through too many tour points. You might find your subject fascinating, but don't assume they will, too!",
					div9: "To learn more, see <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>the detailed guide</a>.",
					div10: "Embed mode",
					div11: "If you want to embed the template in another website through an iframe, adding the optional parameter \"&embed\" at the end of the URL will remove the header. That mode can also be set in the downloadable version through the configuration file." 
				},
				tab5: {
					title: "Publishing",
					div1: "When you are done, don't forget to share your Map Tour with your audience through the application details page in ArcGIS Online. During that process, ArcGIS Online will, if necessary, ask you to update any resources it depends on (web map, feature service) that aren’t shared in the same way. If the Map Tour is public and one of your resources isn't shared with your audience, users will be redirected to the ArcGIS Online login page.",
					div2: "If you are using a hosted feature service created through the Map Tour builder, the application manages the service security for you and you will remain the only one with editing privileges, even if you share the service publicly.",
					div3: "Before sharing a Map Tour publicly, make sure it works when you are not logged in your ArcGIS.com account.",
					div4: "It is a good idea to see what your map tour looks like on an iPad held in landscape orientation. This can help you see if your captions cover up too much of the pictures."
				}
			}
        }
    })
);
