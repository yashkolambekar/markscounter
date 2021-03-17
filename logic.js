var con1marks = 0;
var con2marks = 0;

function con1marksadd(){
    con1marks = con1marks + 1;
    document.getElementById('con1marks').innerHTML = con1marks;
}

function con1markssub(){
    con1marks = con1marks - 1;
    document.getElementById('con1marks').innerHTML = con1marks;
}

function con2marksadd(){
    con2marks = con2marks + 1;
    document.getElementById('con2marks').innerHTML = con2marks;
}

function con2markssub(){
    con2marks = con2marks - 1;
    document.getElementById('con2marks').innerHTML = con2marks;
}

function nameup(){
    document.getElementById('con1name').innerHTML = document.getElementById('con1namei').value;
    document.getElementById('con2name').innerHTML = document.getElementById('con2namei').value;
    document.getElementById('input').style.display = 'none';
}

function darkmode(){
    document.body.style.background = 'rgba(40,40,40,1)';
    document.getElementById('con1').style.background = 'rgba(30,30,30,1)';
    document.getElementById('con2').style.background = 'rgba(30,30,30,1)';
    document.getElementById('con1').style.color = 'rgba(255,255,255,1)';
    document.getElementById('con2').style.color = 'rgba(255,255,255,1)';
    document.getElementById('con1markdiv').style.background = 'rgba(40,40,40,1)';
    document.getElementById('con2markdiv').style.background = 'rgba(40,40,40,1)';
    document.getElementById('buttonin1').style.background = 'rgba(40,40,40,1)'
    document.getElementById('buttonin2').style.background = 'rgba(40,40,40,1)'
    document.getElementById('buttonin3').style.background = 'rgba(40,40,40,1)'
    document.getElementById('buttonin4').style.background = 'rgba(40,40,40,1)'
    document.getElementById('input').style.background = 'rgba(40,40,40,1)'
    document.getElementById('con1namei').style.background = 'rgba(30,30,30,1)'
    document.getElementById('con2namei').style.background = 'rgba(30,30,30,1)'
    document.getElementById('con1namei').style.color = 'rgba(255,255,255,1)'
    document.getElementById('con2namei').style.color = 'rgba(255,255,255,1)'
    document.getElementById('nameup').style.background = 'rgba(30,30,30,1)'
    document.getElementById('nameup').style.color = 'rgba(255,255,255,1)'
}

function lightmode(){
    document.body.style.background = 'rgba(255,255,255,1)';
    document.getElementById('con1').style.background = 'rgba(255,255,255,1)';
    document.getElementById('con2').style.background = 'rgba(255,255,255,1)';
    document.getElementById('con1').style.color = 'rgba(0,0,0,1)';
    document.getElementById('con2').style.color = 'rgba(0,0,0,1)';
    document.getElementById('con1markdiv').style.background = 'rgba(255,255,255,1)';
    document.getElementById('con2markdiv').style.background = 'rgba(255,255,255,1)';
    document.getElementById('buttonin1').style.background = 'rgba(255,255,255,1)'
    document.getElementById('buttonin2').style.background = 'rgba(255,255,255,1)'
    document.getElementById('buttonin3').style.background = 'rgba(255,255,255,1)'
    document.getElementById('buttonin4').style.background = 'rgba(255,255,255,1)'
    document.getElementById('input').style.background = 'rgba(255,255,255,1)'
    document.getElementById('con1namei').style.background = 'rgba(255,255,255,1)'
    document.getElementById('con2namei').style.background = 'rgba(255,255,255,1)'
    document.getElementById('con1namei').style.color = 'rgba(0,0,0,1)'
    document.getElementById('con2namei').style.color = 'rgba(0,0,0,1)'
    document.getElementById('nameup').style.background = 'rgba(255,255,255,1)'
    document.getElementById('nameup').style.color = 'rgba(0,0,0,1)'
}

  window.onbeforeunload = function(event)
    {
        return confirm("Confirm refresh");
    };