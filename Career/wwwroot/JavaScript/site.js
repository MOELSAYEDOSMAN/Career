
function ShowTips() {
    $("#HederPage").slideToggle();
    $("#Tips").slideToggle();
}
//General Inforamtion
//go to 2
function GotoEducation() {
    $("#1").slideToggle();
    $("#2").slideToggle();
}
//Education
//go to 1
function GoToGeneral() {
    $("#1").slideToggle();
    $("#2").slideToggle();
}
//go to 3
function GoToLanguage() {
    $("#3").slideToggle();
    $("#2").slideToggle();
}
//add To Eduction
function addEduction() {
    $("#ManySlide").append('<div class="AllInput"><div class="inForm"><div class="InputEnter"><h3>Enter College:</h3><input type="text" name="CollegeName"  Reqired placeholder="College"></div></div><div class="inForm"><div class="InputEnter"><h3>Enter Department:</h3><input type="text" Reqired name="Department" placeholder="Department"></div></div><div class="inForm"><div class="InputEnter"><h3>Enter Grade:</h3><input type="text" name="Grade" Reqired placeholder="Grade"></div></div><div class="inForm"><div class="InputEnter"><h3>Enter start Date:</h3><input type="date" name="startDate" placeholder="Start Date"></div></div><div class="inForm"><div class="InputEnter"><h3>Enter End Date:</h3><input type="date" name="EndDate" placeholder="End Date"></div></div><div class="inForm"><div class="InputEnter"><h3>Upload the Certificate:</h3><input type="file" name="Certificate" placeholder="Colloge"></div><div class="addButton"><button onclick="addEduction()" type="button">Add Education</button></div></div></div>')
}
//start language
//add Language
function addLanguage() {
    $("#ManySlideLangae").append('<div class="AllInput"><div class="inForm"><div class="InputEnter"><h3>Enter Language:</h3><input type="text" name="Language" reqired placeholder="Language"></div></div><div class="inForm"><div class="InputEnter"><h3>Enter Language:</h3><input type="range" name="RLangage" min="1" max="100" placeholder="Language"></div></div><div class="addButton"><button onclick="addLanguage()" type="button">Add Language</button></div></div>')
}
//go to Summray You
function GoToSummray() {
    $("#3").slideToggle();
    $("#4").slideToggle();
}

// start summary
//go to skill
function GoToskill() {
    $("#5").slideToggle();
    $("#4").slideToggle();
}

//skills
//add skill
function addSkill() {
    $("#ManySlideSkill").append('<div class="AllInput"><div class="inForm"><div class="InputEnter"><h3>Enter Name Skill:</h3><input type="text" required name="SkillName" placeholder="Skill"></div><div class="inForm"><div class="InputEnter"><h3>Upload the Certificate(NotReqired):</h3><input type="file" name="Certificate" placeholder="Colloge"></div></div><div class="addButton"><button onclick="addSkill()" type="button">Add Skill</button></div> </div></div>')
}
//go to Work Experience
function GoToWork() {
    $("#5").slideToggle();
    $("#6").slideToggle();
}
//start Work Experience
//add work
function addWork() {
    $("#ManySlideWork").append('<div class="AllInput"><div class="inForm"><div class="InputEnter"><h3>Enter Name Project:</h3><input type="text" required name="NameProject" placeholder="Name Project"></div></div><div class="inForm"><div class="InputEnter"><h3>Enter summary Project:</h3><textarea name="summaryProject" required placeholder="summary Project" role="20" cols="60"></textarea></div></div><div class="addButton"><button onclick="addWork()" type="button">Add Work</button></div></div>');
}
//Go to Social Media
function GoToSocialMedia() {
    $("#7").slideToggle();
    $("#6").slideToggle();
}
//add social
function addsocial() {
    $("#ManySlidesocial").append('<div class="AllInput"><div class="inForm"><div class="InputEnter"><h3>Select Name Social Name:</h3><select name="SocialName"><option value="FaceBook">FaceBook</option><option value="GitHub">GitHub</option><option value="LinkedIn">LinkedIn</option><option value="Instgram">Instgram</option><option value="Twiter">Twiter</option></select></div></div><div class="inForm"><div class="InputEnter"><h3>Enter Link:</h3><input type="text" name="LinkSoial" required placeholder="Link"></div></div><div class="addButton"><button onclick="addsocial()" type="button">Add Social</button></div> </div>')
}


//api Controle
$.ajax(
    {
        url: '/Home/CreateCv',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            alert(data);
        }

    });