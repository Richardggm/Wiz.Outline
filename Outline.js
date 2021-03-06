
function OnOutlineButtonClicked() {
    var pluginPath = objApp.GetPluginPathByScriptFileName("Outline.js");
    var bookmarksListHtmlFileName = pluginPath + "Outline.htm";
    //
    var objDatabase = objApp.PersonalDatabase;
	var showInNoteWindow = objDatabase.GetMeta("WizOutline", "ShowInNoteWindow");
	if("1" === showInNoteWindow){
		WizOutline_ShowOutlineInNoteWindow();
	} else {
        //
        var rect = objWindow.GetToolButtonRect("document", "OutlineButton2");
        var arr = rect.split(',');
        objWindow.ShowSelectorWindow(bookmarksListHtmlFileName, (parseInt(arr[0]) + parseInt(arr[2])) / 2, arr[3], 400, 500, "");
	}
}

function WizOutline_ShowOutlineInNoteWindow() {
	var pluginPath = objApp.GetPluginPathByScriptFileName("Outline.js");
	objWindow.ShowHtmlDialogEx(true, "为知大纲", pluginPath + 'Outline.htm', 440, 500, '', null, null);
}

function InitOutlineButton() {
    var pluginPath = objApp.GetPluginPathByScriptFileName("Outline.js");
    var languangeFileName = pluginPath + "plugin.ini";
    var buttonText = objApp.LoadStringFromFile(languangeFileName, "strOutline");
    objWindow.AddToolButton("document", "OutlineButton2", buttonText, pluginPath + "outline.ico", "OnOutlineButtonClicked");
}

InitOutlineButton();
