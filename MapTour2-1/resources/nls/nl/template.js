﻿define(
({
		viewer: {
			loading: {
				step1: "APPLICATIE LADEN",
				step2: "GEGEVENS LADEN",
				step3: "DE TOUR INITIALISEREN",
				loadBuilder: "OMSCHAKELEN NAAR BUILDERMODUS",
				fail: "De Kaart Tour kon niet worden geladen",
				failButton: "Opnieuw proberen"
			},
			errors: {
				boxTitle: "Er is een fout opgetreden",
				portalSelf: "Onherstelbare fout: Kan de portaalconfiguratie niet ophalen",
				invalidConfig: "Onherstelbare fout: ongeldige configuratie",
				invalidConfigOwner: "Onherstelbare fout: ongeldige configuratie (gemachtigde eigenaar vereist)",
				invalidConfigNoWebmap: "Onherstelbare fout: ongeldige configuratie (webmap- of applicatie-id niet opgegeven in index.html)",
				createMap: "Kan kaart niet maken",
				invalidApp: "Onherstelbare fout: de applicatie kan niet worden geladen",
				noLayer: "De webmap bevat geen geldige gegevenslaag voor de Kaart Tour.",
				noLayerMobile: "Welkom bij de webapplicatie Kaart Tour. De applicatie is niet geconfigureerd. De builder voor de Kaart Tour wordt niet ondersteund op mobiele apparaten.",
				noLayerView: "Welkom bij de webapplicatie Kaart Tour.<br />De applicatie is nog niet geconfigureerd.",
				appSave: "Fout bij het opslaan van de webapplicatie",
				mapSave: "Fout bij het opslaan van de webmap",
				featureServiceLoad: "Fout bij het laden van de featureservice",
				notAuthorized: "U bent niet gemachtigd om deze applicatie te openen",
				oldBrowserTitle: "Browser niet volledig ondersteund",
				noBuilderIE8: "De Kaart Tour-builder wordt niet ondersteund in oudere versies van Internet Explorer dan versie 9.",
				ie10Win7Explain: "De Kaart Tour interactieve builder wordt niet ondersteund op Internet Explorer 10 op Windows 7 als de gegevensbron een Featureservice met bijlagen is. Om een Featureservice met bijlagen te gebruiken, moet u <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>de documentmodus handmatig forceren volgens Internet Explorer 9-standaarden</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>downgraden naar Internet Explorer 9</a> of upgraden naar Windows 8.",
				oldBrowserExplain: "Deze browser biedt geen ondersteuning voor de automatische generatie van miniaturen vanaf afbeeldingen die u in uw kaart tour uploadt. U kunt een kaart tour maken met behulp van deze browser, maar u moet een afzonderlijke miniatuurafbeelding opgeven voor elk van de afbeeldingen die u uploadt.",
				oldBrowserExplain2: "Voor een betere ervaring voert u een <a href='http://browsehappy.com/' target='_blank'>upgrade van uw browser</a> uit of <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>activeert u Google Chrome Frame voor Internet Explorer</a>.",
				oldBrowserExplain3: "De Kaart Tour builder werkt niet met Internet Explorer 10 op Windows XP.",
				oldBrowserClose: "Sluiten"
			},
			mobileHTML: {
				showIntro: "TITEL WEERGEVEN",
				hideIntro: "TITEL VERBERGEN",
				navList: "Lijst",
				navMap: "Kaart",
				navInfo: "Afbeeldingen",
				introStartBtn: "Start"
			},
			desktopHTML: {
				storymapsText: "Een kaartverhaal",
				builderButton: "Omschakelen naar buildermodus",
				bitlyTooltip: "Een korte koppeling naar de applicatie maken"
			},
			builderHTML: {
				panelHeader: "APPLICATIECONFIGURATIE",
				buttonSave: "OPSLAAN",
				buttonDiscard: "ANNULEREN",
				buttonSettings: "Instellingen",
				buttonView: "Weergavemodus",
				buttonItem: "Het webapplicatie-item openen",
				buttonHelp: "Help",
				buttonOrganize: "Rangschikken",
				buttonAdd: "Toevoegen",
				buttonImport: "Importeren",
				buttonImportDisabled: "Importeren is niet beschikbaar bij gebruik van een Featureservice met bijlagen",
				dataEditionDisabled: "Het bewerken van gegevens is uitgeschakeld op de CSV-gegevensbron",
				dataSourceWarning: "De Kaartour-gegevenslaag is gewijzigd. Als de object-id\'s niet identiek zijn, moet u de volgorde en de verborgen punten opnieuw instellen via <b>Rangschikken</b>. Als de naam van de velden verschilt, moet u de instellingen van de velden opnieuw instellen onder het <b>gegevenstabblad in Instellingen</b>.",
				dataPicError0a: "Deze tour bevat <b>%NB%</b> niet-conforme afbeeldings-URL\'s.",
				dataPicError0b: "Deze tour bevat mogelijk <b>%NB%</b> niet-conforme afbeeldings-URL\'s.",
				dataPicError1: "Kaarttours vereisen nu dat een afbeeldings-URL op een van de volgende extensies eindigt: .jp(e)g, .png, .gif of .bmp.",
				dataPicError2: "Deze vereiste heeft geen invloed op uw bestaande gepubliceerde Kaarttour. Om echter de interactieve builder te kunnen gebruiken, moet u het probleem met de URL eerst oplossen door een van deze twee handelingen uit te voeren:",
				dataPicError3: "URL\'s bewerken",
				dataPicError4: "Hiermee voegt u <i>#isPicture</i> toe aan het einde van niet-ondersteunde afbeeldings-URL\'s. De meeste servers ondersteunen URL-toevoegingen. Zodra u echter deze handeling hebt uitgevoerd, moet u controleren of de bijgewerkte afbeeldings-URL\'s functioneren door naar uw punten te navigeren. Als alle afbeeldingen zijn geladen, kunt u de Kaarttour nu opslaan. Als <b>de afbeeldingen verbroken zijn, slaat u de Kaarttour niet op</b>. Laad in plaats daarvan de builder opnieuw en voer de tweede handeling uit.",
				dataPicError5: "De tour beperken tot afbeeldingen",
				dataPicError6: "Met deze optie worden alle URL\'s beschouwd als afbeeldingen, maar u kunt geen video\'s toevoegen met de interactieve builder. Deze handeling is omkeerbaar zodat u later nog kunt beslissen om video toe te voegen.",
				dataPicError7: "Uw Kaarttour is beperkt tot afbeeldingen. Er kunnen geen video\'s worden gebruikt. Als u deze beperking wilt opheffen, controleert u of uw afbeeldingen nog steeds correct worden geladen voordat u de Kaarttour opslaat. U kunt deze beperking later herstellen als dat nodig is.",
				dataPicError8: "Afbeeldingsbeperking verwijderen",
				dataPicError9: "Als deze URL\'s verwijzen naar video\'s, kunt u deze waarschuwing negeren. Als ze verwijzen naar afbeeldingen, moet u een van deze twee handelingen uitvoeren:",
				modalCancel: "Annuleren",
				modalApply: "Toepassen",
				organizeHeader: "De tour rangschikken",
				organizeGeneralCaption: "Gebruik slepen en neerzetten om de punten op de tour te sorteren",
				organizeDelete: "Verwijderen",
				organizeHide: "Verbergen",
				organizeReset: "Volgorde en verborgen punten opnieuw instellen",
				addMaxPointReached: "U hebt het maximumaantal punten bereikt dat door de pictogrammenset is toegestaan en u kunt geen extra punt op de tour toevoegen.<br /><br />Als u bestaande punten verwijdert, moet u de applicatie opnieuw laden.",
				addMaxPointReachedMobile: "Het maximaal toegestane aantal punten is bereikt, u kunt deze afbeelding niet toevoegen.",
				addClose: "Sluiten",
				addHeader: "Een nieuw punt op de tour toevoegen",
				addTabPicture: "Media",
				addTabInformation: "Informatie",
				addTabLocation: "Locatie",
				addSelectCaption: "Afbeelding selecteren of neerzetten",
				addNoteVideo: "Raadpleeg de Help voor instructies over het gebruik van video\'s",		
				addSelectCaptionNoFileReader: "Afbeelding selecteren",
				addChangePhoto: "Afbeelding en thumbnail wijzigen",
				addPictureResolutionIntro: "De resolutie van de afbeelding is hoger dan vereist:",
				addPictureResolutionOldBrowser: "De resolutie van de afbeelding is hoger dan vereist. Optimaliseer de Kaart Tour door een lagere resolutie dan %RECOMMENDED_RES% op te geven.",
				addPictureResolutionResize: "Resolutie van afbeelding wijzigen in %RESOLUTION%",
				addPictureResolutionKeep: "De originele resolutie van %RESOLUTION% behouden",
				addSelectThumbnail: "Miniatuur selecteren",
				addNoThumbSelected: "Geen miniatuur geselecteerd",
				addThumbSelected: "Geselecteerd",
				addCameraSettingsHeader: "CAMERA-INSTELLINGEN",
				addThumbnailHeader: "MINIATUUR",
				addLabelPicUrl: "Afbeelding",
				addLabelThumbUrl: "Thumbnail",
				addTextPlaceholderUrl: "Voer een afbeeldings-URL in",
				addTextPlaceholderUrl2: "Voer de URL van een Youtube-pagina in",
				addTextPlaceholderUrl3: "Voer de URL van een Vimeo-pagina in",
				addTextPlaceholderUrl4: "Voer de URL van een ingebedde video in",
				addLabelVideo: "Video",
				addMediaVideoOther: "Overige",
				addMediaVideoHelp: "Controleer de URL en haal de standaardthumbnail op",
				addMediaVideoHelpTooltip1: "Controle geslaagd",
				addMediaVideoHelpTooltip2: "Controle mislukt",
				addMediaVideoHelpTooltip4: "Zoek naar de optie om de video in te bedden en kopieer de URL van de video die aanwezig is in de code",
				addLabelName: "Naam",
				addLabelDescription: "Bijschrift",
				addTextPlaceholder: "Typ iets",
				addLocatePlaceholder: "Zoek naar een adres of plaats",
				addPinColor: "Kleur",
				addLatitude: "Breedtegraad",
				addLongitude: "Lengtegraad",
				addLatitudePlaceholder: "bv. 34.056",
				addLongitudePlaceholder: "bv. -117.195",
				addUploading: "Punt op de tour uploaden",
				addSave: "Punt op de tour toevoegen",
				addMobileUploading: "Afbeelding uploaden",
				addMobileName: "Voer een naam in",
				addMobileNameMandatory: "Fout. Voer een naam in.",
				addMobileError: "Er is een fout opgetreden",
				settingsHeader: "Applicatie-instellingen",
				settingsTabLayout: "Lay-out",
				settingsTabColor: "Kleuren",
				settingsTabLogo: "Koptekst",
				settingsTabFields: "Gegevens",
				settingsTabExtent: "Extent",
				settingsTabZoom: "Zoomniveau",
				settingsLayoutExplain: "Selecteer de gewenste applicatielay-out.",
				settingsLayoutProfessional: "Lay-out met drie deelvensters",
				settingsLayoutModern: "Geïntegreerde lay-out",
				settingsLayoutSelected: "Geselecteerde lay-out",
				settingsLayoutSelect: "Selecteer deze lay-out",
				settingsLayoutNote: "Merk op dat, op punten die video\'s gebruiken, de markering altijd onder de video zal worden geplaatst, zelfs als die optie niet is ingeschakeld.",
				settingsColorExplain: "Verander het uiterlijk door een vooraf gedefinieerd thema te kiezen of door uw eigen thema te kiezen.",
				settingsLabelColor: "Kleuren van koptekst, inhoud en voettekst",
				settingsLogoExplain: "Pas het logo van de koptekst aan (het maximum is 250 x 50px).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Geen logo",
				settingsLogoCustom: "Aangepast logo",
				settingsLogoCustomPlaceholder: "Afbeeldings-URL",
				settingsLogoCustomTargetPlaceholder: "Doorklikkoppeling",
				settingsLogoSocialExplain: "Pas de koppeling in de rechterbovenhoek van de koptekst aan.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Koppeling",
				settingsLogoSocialDisabled: "Deze functie is uitgeschakeld door de beheerder",
				settingsDataFieldsExplain: "Selecteer de velden voor de naam van de foto, het bijschrift en de kleur.",
				settingsDataFieldsError: "De applicatie kan de juiste gegevens voor de naam, het bijschrift en de kleur niet bepalen. Selecteer de velden die hier moeten worden gebruikt. Deze instellingen kunnen later worden gewijzigd.",
				settingsFieldsLabelName: "Naam",
				settingsFieldsLabelDescription: "Bijschrift",
				settingsFieldsLabelColor: "Kleur",
				settingsFieldsReset: "Selectie van velden opnieuw instellen",
				settingsExtentExplain: "Stel het oorspronkelijke extent van de Kaart Tour in op de onderstaande interactieve kaart.",
				settingsExtentExplainBottom: "Het extent dat u definieert, zal het oorspronkelijke extent van de webmap wijzigen. Merk op dat dit extent niet wordt gebruikt als het het eerste punt van de tour niet bevat. In dat geval wordt de tour geopend met het eerste punt in het midden.",
				settingsExtentDateLineError: "Het extent mag niet op de meridiaan van 180° lengtegraad zijn",
				settingsExtentDateLineError2: "Fout bij het berekenen van het extent",
				settingsExtentDrawBtn: "Een nieuw extent tekenen",
				settingsExtentModifyBtn: "Het extent bewerken",
				settingsExtentApplyBtn: "Voorbeeld weergeven op Kaarttour",
				settingsExtentUseMainMap: "Extent van kaarttour gebruiken",
				settingsZoomExplain: "Stel het zoomniveau in voor de verhaalpunten volgens de inleiding (optioneel).",
				settingsLabelZoom: "Schaal/niveau",
				settingsZoomFirstValue: "Geen",
				settingsFieldError: "Selecteer een veld in elke lijst",
				dataExplain: "De featureservice wordt toegevoegd aan uw webmap. Deze wordt met niemand gedeeld en u bent als enige gemachtigd voor toevoegen, bewerken en verwijderen.<br /><br />Het systeem vraagt u of u de deelmachtigingen van uw featureservice wilt bijwerken. Dit is vereist om uw gebruikers toegang te geven tot uw gegevens. U blijft de enige met bewerkingsmachtigingen.",
				dataNameLbl: "Servicenaam",
				dataFolderListLbl: "Map",
				dataFolderListFetching: "Mappen ophalen...",
				dataRootFolder: "Hoofdmap",
				dataNameError: "Voer een naam in voor de featureservice",
				dataFolderError: "Selecteer een geldige map",
				dataSrcContainsInvalidChar: "De naam van de featureservice bevat een of meer ongeldige tekens (-, <, >, #, %, :, \", ?, &, +, /, of ).",
				dataSrvAlreadyExistsError: "Er bestaat al een service met deze naam in de organisaties. Kies een andere naam.",
				dataBtnSave: "De service maken",
				dataFooterProgress: "Wordt gemaakt",
				dataFooterSucceed: "Het maken is gelukt. Bezig met laden",
				dataFooterError: "Het maken is mislukt. Probeer het opnieuw",
				tabError: "Controleer alle tabbladen op fouten",
				introRecordBtn: "Inleiding",
				introRecordActivate: "Gebruik het eerste punt als een inleiding (verschijnt niet in carousel)"
			},
			addPopupJS: {
				uploadingPicture: "Afbeelding uploaden",
				uploadSuccess: "Uploaden gelukt",
				uploadError: "Fout bij het uploaden van de afbeelding",
				notJpg: "Kies een JPEG-foto om te uploaden",
				errorNoPhoto: "Kies een afbeelding om te uploaden",
				errorNoThumbnail: "Kies een miniatuur om te uploaden",
				errorInvalidPicUrl: "Voer een geldige afbeelding in (begint met http(s)://, eindigt op jpg, png, gif of bmp). U kunt de URL laten eindigen op \'#isPicture\' om die regel te negeren.",
				errorInvalidThumbUrl: "Voer een geldige miniatuur in (begint met http(s)://, eindigt op jpg, png, gif of bmp).",
				errorInvalidVideoUrl: "Voer een geldige video-URL in (begint met http(s)://)",
				errorNoName: "Voer een naam in voor dit punt van de tour",
				errorNoDescription: "Voer een bijschrift in voor dit punt van de tour",
				errorNoLocation: "Selecteer een locatie voor dit punt van de tour"
			},
			builderJS: {
				noPendingChange: "Geen wijziging in behandeling",
				unSavedChangeSingular: "1 niet-opgeslagen wijziging",
				unSavedChangePlural: "niet-opgeslagen wijzigingen",
				popoverDiscard: "Weet u zeker dat u eventuele niet-opgeslagen wijzigingen wilt negeren?",
				yes: "Ja",
				no: "Nee",
				popoverLoseSave: "Door de viewer te openen gaan eventuele niet-opgeslagen wijzigingen verloren",
				ok: "OK",
				popoverSaveWhenDone: "Vergeet uw werk niet op te slaan wanneer u klaar bent",
				closeWithPendingChange: "Weet u zeker dat u de actie wilt bevestigen? Uw wijzigingen gaan verloren.",
				gotIt: "OK",
				savingApplication: "Applicatie opslaan",
				saveSuccess: "Applicatie opgeslagen",
				saveError: "Opslaan mislukt, probeer het opnieuw",
				dragColorPicker: "Wijzig mijn positie<br />of verander mijn kleur",
				dataWarningExtent: "U beschikt over gegevens buiten het webmapextent. Deze gegevens worden niet gebruikt als punten voor de tour. Wijzig het kaartextent als u deze toch wilt gebruiken.",
				dataWarningVisibi: "Uw laag Kaart Tour is niet zichtbaar op het huidige webmapextent. Controleer of uw laag Kaart Tour zichtbaar is met een kaart die %MAPSIZE% groot is.",
				dataWarningEdit: "Webmap bewerken",
				dataWarningClose: "Sluiten",
				signIn: "Meld u aan met een account op",
				signInTwo: "om de applicatie op te slaan."
			},
			organizePopupJS: {
				messageStart: "U hebt gekozen om het volgende te verwijderen",
				messageSinglePoint: "één punt van de tour",
				messageMultiPoint: "punten van de tour",
				messagePermantRemove: "Hiermee verwijdert u permanent",
				messageRecord: "record",
				messageRecordPlural: "records",
				messageConfirm: "uit uw database. Wilt u doorgaan?",
				labelButtonShow: "Weergeven",
				labelButtonHide: "Verbergen"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "Hierdoor worden de afbeelding en de thumbnail definitief verwijderd",
				popoverDeleteWarningThumb: "Hierdoor wordt de thumbnail definitief verwijderd",
				popoverUploadingPhoto: "Afbeelding en miniatuur uploaden",
				popoverUploadingThumbnail: "Miniatuur uploaden",
				popoverUploadSuccessful: "Uploaden gelukt",
				popoverUploadError: "Uploaden mislukt, probeer het opnieuw",
				changePicAndThumb: "Afbeelding wijzigen",
				changeThumb: "Miniatuur wijzigen",
				selectPic: "Media wijzigen",
				selectThumb: "Miniatuur wijzigen",
				uploadPicAndThumb: "Toepassen"
			},
			headerJS:{
				editMe: "Bewerk me!",
				templateTitle: "Titel voor template instellen",
				templateSubtitle: "Subtitel voor template instellen"
			},
			crossFaderJS:{
				setPicture: "Titel voor afbeelding instellen",
				setCaption: "Bijschrift voor afbeelding instellen"
			},
			importPopup: {
				title: "Importeren",
				prevBtn: "Vorige",
				nextBtn: "Volgende"
			},
			importPopupHome: {
				header: "Waar zijn uw afbeeldingen opgeslagen?"
			},
			onlinePhotoSharingCommon: {
				disabled: "Deze functie is uitgeschakeld door de beheerder",
				disabledPortal: "Deze functie is uitgeschakeld op Portal for ArcGIS",
				header1: "De afbeeldingen moeten openbaar worden gedeeld.",
				header2: "Het importeren wordt beperkt tot %NB1% afbeeldingen om te voldoen aan de limiet van %NB2% punten per tour.",
				emptyDataset: "Fout, geen afbeeldingen gevonden",
				footerImport: "Importeren",
				selectAlbum: "Selecteer een openbaar album",
				selectAlbum2: "Selecteer een album",
				pleaseChoose: "Maak een keuze",
				userLookup: "Opzoeken",
				userLookingup: "Bezig met opzoeken",
				csv: "Verwijzing in een CSV",
				fromScratch: "Opnieuw beginnen",
				select: "Maak een keuze",
				locUse: "Gebruik de locatie van de afbeeldingen",
				locExplain: "Het is mogelijk niet handig om de locatie van de afbeeldingen te gebruiken omdat ze geërfd kunnen worden van het album, waardoor alle foto\'s op dezelfde locatie terechtkomen."
			},
			viewFlickr: {
				header: "Voer een gebruikersnaam in voor Flickr en selecteer een Fotoset of een label om te importeren.",
				userInputLbl: "Typ een gebruikersnaam",
				signInMsg2: "Gebruiker niet gevonden",
				selectSet: "Selecteer een Fotoset",
				selectTag: "of selecteer een label",
				footerImportTag: "Importeer het geselecteerde label",
				footerImportSet: "Importeer de geselecteerde set"
			},
			viewFacebook: {
				header: "Verifieer met een Facebook-account of gebruik een openbare pagina. U kunt privéalbums gebruiken om een openbare Kaart Tour te maken waarvoor geen verificatie via Facebook nodig is. Hierdoor kunnen opmerkingen en likes privé blijven.",
				leftHeader: "Facebook-gebruiker",
				rightHeader: "Facebook-pagina",
				pageExplain: "Een Facebook-pagina is een openbaar merk/product of beroemdheid zoals <b>esrigis</b>. U vindt de naam van de pagina achter de eerste  '/' in de URL van de pagina.",
				pageInputLbl: "Een paginanaam invoeren",
				lookupMsgError: "Pagina niet gevonden"
			},
			viewPicasa: {
				header: "Typ het e-mailadres of het ID van een Picasa- of Google+ account.",
				userInputLbl: "Typ een e-mailadres of ID",
				signInMsg2: "Account niet gevonden",
				howToFind: "Zoeken naar een account-ID",
				howToFind2: "Kopieer getallen tussen de eerste en tweede '/' van een pagina van Picasa of G+"
			},
			viewCSV: {
				uploadBtn: "Selecteer of sleep een CSV-bestand",
				resultHeaderEmpty: "Het CSV-bestand is leeg",
				resultHeaderSuccess: "Laden van %NB_POINTS% punten is gelukt",
				resultHasBeenLimited: "Importeren is beperkt tot de eerste %VAL1% punten van %VAL2% om rekening te houden met de limiet van %VAL3% punten per tour",
				browserSupport: "Uw browser wordt niet ondersteund, om een CSV te gebruiken, moet u <a href='http://browsehappy.com/' target='_blank'>uw browser upgraden</a> of de ArcGIS.com webmapviewer gebruiken (zie Help).",
				errorLatLng: "Geen velden gevonden voor lengte- en breedtegraad. Mogelijke waarden voor breedtegraad zijn <i>%LAT%</i> en voor lengtegraad: <i>%LONG%</i>.",
				errorFieldsExplain: "Laden is mislukt omdat de volgende verplichte velden niet zijn gevonden",
				errorFieldsName: "<b>Naam</b> Mogelijke waarden zijn: %VAL%",
				errorFieldsDesc: "<b>Omschrijving</b> Mogelijke waarden zijn: %VAL%",
				errorFieldsUrl: "<b>Afbeeldings-URL</b> Mogelijke waarden zijn: %VAL%",
				errorFieldsThumb: "<b>Miniatuur-URL</b> Mogelijke waarden zijn: %VAL%",
				errorFields2Explain: "Laden is mislukt omdat het CSV-bestand niet dezelfde attributen gebruikt als de laag voor de volgende attributen",
				errorFields2Name: "<b>Naam</b> gebruik %VAL1% in plaats van %VAL2%",
				errorFields2Desc: "<b>Omschrijving</b> gebruik %VAL1% in plaats van %VAL2%",
				errorFields2Url: "<b>Afbeeldings-URL</b> gebruik %VAL1% in plaats van %VAL2%",
				errorFields2Thumb: "<b>Miniatuur-URL</b> gebruik %VAL1% in plaats van %VAL2%",
				resultFieldsAll: "Alle attributen zijn geïmporteerd",
				resultFieldsNotAll: "De volgende attributen zijn niet geïmporteerd omdat ze niet voorkomen in de kaartlaag",
				resultFieldsNotAll2: "De volgende attributen zijn geïmporteerd",
				footerNextBtnResult: "Importeren in de webmap",
				footerProgress: "Bezig met importeren",
				footerSucceed: "Importeren geslaagd. Bezig met laden"
			},
			viewGeoTag: {
				header: "Klik of tik op de afbeeldingen die u wilt importeren om ze te lokaliseren.",
				headerMore: "Waarom zijn mijn afbeeldingen niet gelokaliseerd?",
				headerExplain: "Als uw afbeeldingen een geldige locatie hebben, worden ze automatisch op de kaart gelokaliseerd en op het tweede tabblad weergegeven.<br /><br />Standaard gebruiken Picasa en Flickr de EXIF-metadata voor locaties van de afbeeldingen niet, zie de instellingen voor Flickr/Picasa op het tabblad Privacy om het gebruik van locaties voor de afbeeldingen in te schakelen. Mogelijk moet u alle afbeeldingen opnieuw importeren in Flickr/Picasa.<br /><br />Voor Facebook moet u naar elke afbeelding gaan, op Bewerken klikken en de locatie uit de voorgestelde keuzes selecteren die zijn gebaseerd op de EXIF-metadata van de afbeelding.",
				leftPanelTab1: "Lokaliseren",
				leftPanelTab2: "Gelokaliseerd",
				clickOrTap: "Klik of tik op de kaart om te lokaliseren",
				clickDrop: "Niet importeren",
				footerImport: "Importeren",
				footerProgress: "Bezig met importeren",
				footerSucceed: "Importeren geslaagd. Bezig met laden...",
				loading: "Laden",
				error: "Importeren van locatie van afbeeldingen mislukt, locaties zijn genegeerd."
			},
			initPopup: {
				title: "Welkom bij de Kaart Tour Builder",
				prevBtn: "Vorige",
				nextBtn: "Volgende"
			},
			initPopupHome: {
				header2: "Deze assistent helpt u bij het samenstellen van een Kaart Tour met afbeeldingen die al online zijn opgeslagen, of het importeert deze in uw ArcGIS Online for Organization account.",
				title1: "Mijn afbeeldingen zijn al gehost",
				title2: "Ik moet mijn afbeeldingen hosten",
				hostedFsNA: "Alleen beschikbaar voor gebruikers van ArcGIS for Organization met de rol Publisher en Administrator",
				footer1: "Als u klaar bent, moet u niet vergeten om uw Kaart Tour te delen met uw publiek via de applicatie-itempagina.",
				footer2: "Kaart Tour help",
				footer3: "De CSV-template downloaden",
				footer4: "\"Opslaan als\" wanneer het niet is gedownload",
				footerProgress: "Wordt gemaakt",
				footerSucceed: "Aangemaakt. Bezig met laden...."
			},
			helpPopup: {
				title: "Help",
				close: "Sluiten",
				tab1: {
					title: "Inleiding",
					div1: "De Kaart Tour template is ontworpen voor het presenteren van geografische informatie waar een belangrijk fotografisch element aanwezig is voor het verhaal dat u wilt vertellen.",
					div2: "De template maakt een aantrekkelijke en eenvoudig bruikbare webapplicatie waarin u een kleine reeks plaatsen op een kaart kunt presenteren in een genummerde volgorde waarin gebruikers kunnen bladeren. De template is ontworpen voor gebruik in elke webbrowser op elk apparaat, inclusief smartphones en tablets.",
					div3: "Deze Help begeleidt u bij het publiceren van Kaarttours zoals:",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>Palm Springs Kaart Tour</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>Nederlands beste mountain biking</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>Kaart Tour van de Los Angeles River</a></li></ul>",
					div5: "We horen graag van u! Aarzel niet om uw Kaart Tour met ons te delen:",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>StoryMaps website</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "Een bug gevonden of een nieuwe functie aanvragen? Laat het ons weten door een probleem in te dienen op de <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub-projectpagina</a>."
				},
				tab2: {
					title: "Gegevens",
					div1: "Het voornaamste element waarmee u rekening moet houden bij het samenstellen van een Kaarttour is kiezen waar uw afbeeldingen zullen worden opgeslagen. Een Kaarttour kan afbeeldingen gebruiken die zijn opgeslagen in belangrijke services voor het delen van foto\'s, op een webserver of als bijlagen bij een featureservice.",
					div1a: "Raadpleeg de laatste sectie van dit tabblad voor meer informatie over ondersteunde afbeeldingsindelingen en video\'s.",
					div2: "De interactieve builder biedt twee opties voor het in de Kaart Tour verwerken van afbeeldingen:",
					div3: "<ul><li>U kunt <b>foto\'s gebruiken die al online staan</b>, zoals afbeeldingen die zijn opgeslagen op een site voor het delen van foto\'s, zoals Flickr, of afbeeldingen die op uw eigen website zijn opgeslagen. Naar deze afbeeldingen wordt in de Kaarttour verwezen via de URL.</li><li>U kunt ook <b>foto\'s uploaden vanaf uw computer</b> rechtstreeks naar uw Kaarttour. Voor deze uploadoptie hebt u een ArcGIS Online-abonnement nodig en publisher- of beheersmachtigingen, omdat dit automatisch een gehoste featureservice voor u maakt waarin de foto\'s als bijlagen worden opgeslagen.</li></ul>",
					div4: "De voornaamste gebruikersvoorbeelden zijn:",
					div4b: "<b>Uw foto\'s worden nog niet gehost</b> en u hebt een ArcGIS Online-abonnement: uw beste optie is het gebruik van een gehoste featureservice. Net als bij diensten voor het openbaar delen van foto\'s optimaliseren we uw foto\'s zodat ze snel geladen kunnen worden en u hebt toegang tot alle beheers- en gegevensbeheermogelijkheden van het ArcGIS-platform.",
					div5: "<b>U bent geen lid van een organisatie</b>: u moet uw foto\'s eerst uploaden naar een website voor het delen van foto\'s of naar uw eigen webserver. De builder helpt u bij het gebruiken van deze afbeeldingen die op hun oorspronkelijke locatie gehost blijven.",
					div6: "<b>U wilt een bestaande Featureservice opnieuw gebruiken</b> waarin uw afbeeldingen als bijlagen zijn opgeslagen of die naar externe afbeeldingen verwijst: zie de uitgebreide sectie hierna.",
					div7: "<b>U gebruikt een eerdere versie</b> van de Kaarttour-template en beschikt al over uw CSV-bestand met een verwijzing naar uw afbeeldingen en miniaturen: u kunt deze importeren en uw gegevens verfijnen. De builder ondersteunt alleen CSV-bestanden met lengte- en breedtegraadvelden. Op adressen gebaseerde CSV-bestanden kunt u blijven gebruiken via uw webmap (zie de sectie hierna).",
					div8: "Importeren uit online diensten voor het delen van foto\'s",
					div9: "Bij het importeren wordt naar reeds gehoste afbeeldingen verwezen door de URL\'s op te slaan in een webmapverzameling. De afbeeldingen worden niet opgeslagen in ArcGIS Online. Als de gehoste afbeeldingen niet kunnen worden geopend, zijn ze niet beschikbaar in de Kaarttour en wordt een afbeelding \'Afbeelding niet beschikbaar\' weergegeven. Afhankelijk van de fotoserviceprovider importeert de Kaarttour al dan niet de naam, beschrijving en locatie van de afbeeldingen. Die attributen worden opgeslagen in de webmap en bewerkingen in de onlinediensten zijn niet zichtbaar in de Kaarttour.",
					div10: "De afbeeldingen opslaan op een webserver",
					div11: "Als u ervoor kiest om de afbeeldingen zelf te hosten, moet u handmatig miniaturen van uw foto\'s maken. Het gebruik van de volledige afbeeldingen voor miniaturen levert slechte prestaties op. Daarom raden we sterk aan om een onlinedienst voor het delen van foto\'s te gebruiken of een featureservice die dat voor u doet.",
					div12: "Een bestaande Featurservice of Shapefile gebruiken",
					div13: "Elke puntfeatureservice of shapefile is bruikbaar als gegevensbron voor een Kaarttour. U hoeft deze alleen toe te voegen als laag in de webmap met de ArcGIS.com-map viewer. Als de applicatie de verwachte attributen in de laag aantreft, zijn alle mogelijkheden van de builder beschikbaar.",
					div14: "De verwachte velden zijn (hoofdletterongevoelig):",
					div151: "Naam",
					div152: "Beschrijving",
					div153: "Afbeelding",
					div154: "Thumbnail",
					div155: "Kleur (optioneel)",
					div16: "De velden Naam en Beschrijving zijn verplicht. Als de applicatie geen overeenkomende velden vindt bij het gebruik van een featureservice, werkt de viewer niet totdat u de velden met de builder aanpast voor gebruik. CSV- en shapefilelagen die aan de webmap zijn toegevoegd, moeten alle verplichte velden bevatten, anders werkt de builder niet.",
					div162: "Als u een featureservice gebruikt die de afbeeldingen opslaat als bijlagen, <b>worden alleen de objecten met twee bijlagen gebruikt</b>. De eerste bijlage bepaalt de hoofdafbeelding en de tweede bijlage bepaalt de miniatuur.",
					div17: "De velden voor afbeelding en miniatuur zijn verplicht voor featureservices zonder bijlagen en optioneel (maar sterk aanbevolen) voor featureservices met bijlagen. Als in uw service bijlagen zijn ingeschakeld, laat de builder u afbeeldingen als bijlagen uploaden. Anders kunt u alleen de URL\'s voor de afbeelding en miniatuur bewerken.",
					div172: "Indien aanwezig, worden de velden voor afbeelding en miniatuur altijd gebruikt en worden er geen query\'s uitgevoerd op de featureservicebijlagen.",
					div173: "Voorbeelden van CSV-bestanden en shapefiles kunnen worden gedownload van",
					div18: "Gehoste Featureservices maken van een CSV of shapefile",
					div19: "Als u een gehoste featureservice maakt van een CSV of shapefile, worden de bijlagen standaard niet ingeschakeld. Om ze in te schakelen, opent u de pagina met details van de featureservice. Klik op het pijltje op het laaggedeelte en de optie verschijnt. Daarna blijft de Kaarttour de afbeeldingen en miniaturen gebruiken waarnaar u hebt verwezen via attributen. Of als u uw afbeeldingen wilt uploaden als featureservicebijlagen, kunt u dat doen met twee knoppen in het afbeeldingenvenster (\'Afbeelding wijzigen\' en \'Miniatuur wijzigen\').",
					div20: "Ondersteunde afbeeldingsindelingen en video\'s",
					div21: "Ondersteunde afbeeldingsindelingen zijn: <b>.jpg, .jpeg, .png, .gif en .bmp</b>. Als uw media niet eindigt op deze extensie, beschouwt de Kaarttour deze als een video, behalve wanneer u een featureservice gebruikt (zie hieronder).",
					div22: "De Kaarttour-template bevat geen videospeler. U moet de externe videospeler gebruiken die wordt geleverd door uw favoriete videohostservice (zoek naar de optie om de video in te bedden en kopieer de URL die aanwezig is in de opgegeven code). Als u de video zelf wilt hosten, kunt u een HTML-pagina maken die een videospeler bevat zoals <a href='http://www.videojs.com/'>Video.js</a>.",
					div23: "De interactieve builder biedt geen dialoogvenster om video op te nemen als featureservices met bijlagen worden gebruikt, maar het is wel mogelijk om dit te doen door uw gegevens buiten de interactieve builder te bewerken. Als u in de ArcGIS.com-map viewer de afbeeldingsvelden verandert zodat deze naar een externe video verwijzen en u een speciale parameter toevoegt aan het einde van uw URL (#isVideo), dan zal uw media als een video worden beschouwd.",
					div24: "Houd er rekening mee dat u nog steeds twee geldige afbeeldingsbijlagen nodig hebt omdat de punten anders niet worden gebruikt. Het is niet mogelijk om video\'s te gebruiken wanneer u featureservicebijlagen gebruikt zonder de velden voor afbeelding en miniatuur."
				},
				tab3: {
					title: "Aanpassen",
					div1: "De builder bevat meerdere opties voor aanpassingen die ingesteld kunnen worden met de knop INSTELLINGEN in het bovenste venster. Als u de verwachte optie niet kunt vinden, bieden we tevens een downloadbare versie aan die u op uw webserver kunt draaien en naar uw wensen aanpassen.",
					div2: "We raden aan om de gehoste versie te gebruiken tenzij:",
					div3: "<li>Deze niet de aanpassing voor de gebruikersinterface biedt die u nodig hebt, zoals het gebruik van een achtergrondafbeelding in de kop.</li><li>U ontwikkelaar bent en u de applicatie wilt uitbreiden.</li>",
					div4: "De downloadbare versie kan worden geconfigureerd via een webmap-id of een webmapapplicatie-id. De belangrijkste gebruiksvoorbeelden zijn:",
					div41: "U bouwt uw kaarttour met de interactieve builder in de gehoste omgeving en configureert de template met de webmapapplicatie-id. De instellingen die u met de interactieve builder hebt gedefinieerd, zullen worden toegepast.",
					div42: "U bouwt uw webmap buiten de interactieve builder en configureert de template met de webmap-id. Lees de documentatie om te leren hoe u de template configureert.",
					div43: "Merk op dat de interactieve builder beschikbaar is in de downloadbare versie, maar dat er enkele technische beperkingen gelden voor browers zoals Internet Explorer ouder dan versie 10.",
					div5: "Ga naar de <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub-projectpagina</a> als u meer wilt weten over de downloadbare versie."
				},
				tab4: {
					title: "Tips",
					div0: "Ondersteunde browsers",
					div0a: "De Kaarttour-viewer wordt ondersteund op IE8+. De interactieve builder wordt ondersteund op IE9+. Wij voeren actief tests uit in alle belangrijke browsers, maar als u problemen ondervindt, raden wij u aan Chrome te gebruiken.",
					div0b: "Als u problemen ondervindt, laat het ons dan weten. Ondertussen kunt u uw Kaarttour bouwen met de CSV-template en zo uw interactie met de builderinterface minimaliseren.",
					div1: "Afbeeldingen",
					div2: "We raden het gebruik aan van liggende foto\'s in plaats van staande. Staande afbeeldingen zijn bruikbaar maar op kleinere schermen zoals de iPad kan een groot deel van de foto door de tekst worden bedekt (tekst neemt meer ruimte in als het wordt weergegeven in een hoog gebied dan in een liggend gebied). Afbeeldingen met verschillende grootten, vormen en stand kunnen weliswaar worden toegepast in een Kaarttour maar we raden aan om voor alle afbeeldingen dezelfde grootte en vorm te gebruiken. Op deze manier wordt de gebruiker niet afgeleid door afbeeldingen met verschillende maten tijdens het volgen van de tour.",
					div2a: "Als u de afbeeldingen zelf host, raden wij u aan een maximale resolutie van <b>1090x725</b> te gebruiken voor hoofdafbeeldingen en <b>140x93</b> voor miniaturen.",
					div3: "Tekst opmaken met HTML-tags",
					div4: "De koptekst, en de titel en het bijschrift van de afbeelding kunnen HTML-tags bevatten voor de opmaak en de koppelingen. Deze code voegt bijvoorbeeld een gele koppeling toe:",
					div5: "Ondersteunende lagen",
					div6: "U kunt extra ondersteunende lagen toevoegen om context aan de Kaarttour te geven. Deze lagen bevatten mogelijk andere geografische opties die de kaart moet weergeven naast de Kaarttour-punten, zoals een studiegebied, een wandel- of rijroute die de punten in uw tour met elkaar verbindt enzovoort. De Kaarttour-template geeft deze aanvullende ondersteunende lagen weer met de symbolen die u in de webmap opgeeft, maar de pop-ups zijn niet beschikbaar.",
					div7: "Houd de tour kort en aangenaam",
					div8: "Elke tour heeft een limiet van 99 punten. De meeste Kaarttours zijn uiteraard aanzienlijk korter dan dit. Verwacht niet dat uw publiek door teveel tourpunten zal willen stappen. U vindt uw onderwerp waarschijnlijk fascinerend, maar ga er niet vanuit dat anderen dat ook vinden.",
					div9: "Zie <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>de gedetailleerde gids</a> voor meer informatie.",
					div10: "Modus voor inbedden",
					div11: "Als u de template in een andere website wilt inbedden met behulp van een Iframe, zal door de optionele parameter \"&embed\" aan het einde van de URL toe te voegen, de koptekst worden verwijderd. Deze modus kan ook worden ingesteld in de downloadbare versie via het configuratiebestand." 
				},
				tab5: {
					title: "Publiceren",
					div1: "Als u klaar bent, moet u niet vergeten om uw Kaarttour met uw publiek te delen via de pagina met details van de applicatie in ArcGIS Online. Tijdens dat proces kan ArcGIS Online u vragen om bronnen waarvan het afhangt (webmap, featureservice) bij te werken die niet op dezelfde manier worden gedeeld. Als de Kaarttour openbaar is en een van de bronnen niet gedeeld wordt met uw publiek, worden gebruikers omgeleid naar de aanmeldingspagina van ArcGIS Online.",
					div2: "Als u een gehoste featureservice gebruikt die met de Kaarttour-builder is gemaakt, beheert de applicatie de beveiliging van de service voor u en behoudt u als enige de bewerkingsrechten, ook als u de service openbaar deelt.",
					div3: "Voordat u een Kaart Tour openbaar deelt, moet u controleren of deze werkt als u niet bent aangemeld bij uw ArcGIS.com-account.",
					div4: "Wij raden u ook aan om te kijken hoe uw kaarttour er op een iPad uitziet in de liggende stand. Dit helpt u om te controleren of uw bijschriften te veel ruimte innemen op de afbeeldingen."
				}
			}
        }
    })
);
