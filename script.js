var p = 0
var q = 0
var r = 0
var s = 0
var t = 0
var u = 0
var w = 0
var x = 0
var y = 0
var a = document.querySelector(".am")
var b = document.querySelector(".bm")
var c = document.querySelector(".cm")
var d = document.querySelector(".aml")
var e = document.querySelector(".bml")
var f = document.querySelector(".cml")
var g = document.querySelector(".amt")
var h = document.querySelector(".bmt")
var i = document.querySelector(".cmt")
document.querySelector(".am").addEventListener('click', function() {
    document.querySelector(".project_container").style.transform = 'translate(0px)'
    a.style.backgroundColor = '#0f4c81'
    a.style.color = 'white'
    b.style.backgroundColor = 'beige'
    b.style.color = 'black'
    c.style.backgroundColor = 'beige'
    c.style.color = 'black'
});
document.querySelector(".bm").addEventListener('click', function() {
    document.querySelector(".project_container").style.transform = 'translate(-1120px)'
    b.style.backgroundColor = '#0f4c81'
    b.style.color = 'white'
    a.style.backgroundColor = 'beige'
    a.style.color = 'black'
    c.style.backgroundColor = 'beige'
    c.style.color = 'black'
});
document.querySelector(".cm").addEventListener('click', function() {
    document.querySelector(".project_container").style.transform = 'translate(-2240px)'
    c.style.backgroundColor = '#0f4c81'
    c.style.color = 'white'
    b.style.backgroundColor = 'beige'
    b.style.color = 'black'
    a.style.backgroundColor = 'beige'
    a.style.color = 'black'
});
document.querySelector(".aml").addEventListener('click', function() {
    document.querySelector(".project_containerl").style.transform = 'translate(0px)'
    d.style.backgroundColor = '#0f4c81'
    d.style.color = 'white'
    e.style.backgroundColor = 'beige'
    e.style.color = 'black'
    f.style.backgroundColor = 'beige'
    f.style.color = 'black'
});
document.querySelector(".bml").addEventListener('click', function() {
    document.querySelector(".project_containerl").style.transform = 'translate(-1120px)'
    e.style.backgroundColor = '#0f4c81'
    e.style.color = 'white'
    d.style.backgroundColor = 'beige'
    d.style.color = 'black'
    f.style.backgroundColor = 'beige'
    f.style.color = 'black'
});
document.querySelector(".cml").addEventListener('click', function() {
    document.querySelector(".project_containerl").style.transform = 'translate(-2240px)'
    f.style.backgroundColor = '#0f4c81'
    f.style.color = 'white'
    e.style.backgroundColor = 'beige'
    e.style.color = 'black'
    d.style.backgroundColor = 'beige'
    d.style.color = 'black'
});
document.querySelector(".amt").addEventListener('click', function() {
    document.querySelector(".project_containert").style.transform = 'translate(0px)'
    g.style.backgroundColor = '#0f4c81'
    g.style.color = 'white'
    h.style.backgroundColor = 'beige'
    h.style.color = 'black'
    i.style.backgroundColor = 'beige'
    i.style.color = 'black'
});
document.querySelector(".bmt").addEventListener('click', function() {
    document.querySelector(".project_containert").style.transform = 'translate(-1120px)'
    h.style.backgroundColor = '#0f4c81'
    h.style.color = 'white'
    g.style.backgroundColor = 'beige'
    g.style.color = 'black'
    i.style.backgroundColor = 'beige'
    i.style.color = 'black'
});
document.querySelector(".cmt").addEventListener('click', function() {
    document.querySelector(".project_containert").style.transform = 'translate(-2240px)'
    i.style.backgroundColor = '#0f4c81'
    i.style.color = 'white'
    h.style.backgroundColor = 'beige'
    h.style.color = 'black'
    g.style.backgroundColor = 'beige'
    g.style.color = 'black'
});
document.querySelector(".asbtnl").addEventListener('click', function() {
    if (0 > p)
        p = p + 480;
    document.querySelector(".container1s").style.transform = "translate(" + p + "px)"
});
document.querySelector(".asbtnr").addEventListener('click', function() {
    if (-7200 < p)
        p = p - 480;
    document.querySelector(".container1s").style.transform = "translate(" + p + "px)"
});
document.querySelector(".bsbtnl").addEventListener('click', function() {
    if (0 > q)
        q = q + 480;
    document.querySelector(".container2s").style.transform = "translate(" + q + "px)"
});
document.querySelector(".bsbtnr").addEventListener('click', function() {
    if (-4800 < q)
        q = q - 480;
    document.querySelector(".container2s").style.transform = "translate(" + q + "px)"
});
document.querySelector(".csbtnl").addEventListener('click', function() {
    if (0 > r)
        r = r + 480;
    document.querySelector(".container3s").style.transform = "translate(" + r + "px)"
});
document.querySelector(".csbtnr").addEventListener('click', function() {
    if (-4800 < r)
        r = r - 480;
    document.querySelector(".container3s").style.transform = "translate(" + r + "px)"
});
document.querySelector(".albtnl").addEventListener('click', function() {
    if (0 > s)
        s = s + 480;
    document.querySelector(".container1l").style.transform = "translate(" + s + "px)"
});
document.querySelector(".albtnr").addEventListener('click', function() {
    if (-2880 < s)
        s = s - 480;
    document.querySelector(".container1l").style.transform = "translate(" + s + "px)"
});
document.querySelector(".blbtnl").addEventListener('click', function() {
    if (0 > t)
        t = t + 480;
    document.querySelector(".container2l").style.transform = "translate(" + t + "px)"
});
document.querySelector(".blbtnr").addEventListener('click', function() {
    if (-2880 < t)
        t = t - 480;
    document.querySelector(".container2l").style.transform = "translate(" + t + "px)"
});
document.querySelector(".clbtnl").addEventListener('click', function() {
    if (0 > u)
        u = u + 480;
    document.querySelector(".container3l").style.transform = "translate(" + u + "px)"
});
document.querySelector(".clbtnr").addEventListener('click', function() {
    if (-4320 < u)
        u = u - 480;
    document.querySelector(".container3l").style.transform = "translate(" + u + "px)"
});
document.querySelector(".atbtnl").addEventListener('click', function() {
    if (0 > w)
        w = w + 480;
    document.querySelector(".container1t").style.transform = "translate(" + w + "px)"
});
document.querySelector(".atbtnr").addEventListener('click', function() {
    if (-10080 < w)
        w = w - 480;
    document.querySelector(".container1t").style.transform = "translate(" + w + "px)"
});
document.querySelector(".btbtnl").addEventListener('click', function() {
    if (0 > x)
        x = x + 480;
    document.querySelector(".container2t").style.transform = "translate(" + x + "px)"
});
document.querySelector(".btbtnr").addEventListener('click', function() {
    if (-13920 < x)
        x = x - 480;
    document.querySelector(".container2t").style.transform = "translate(" + x + "px)"
});
document.querySelector(".ctbtnl").addEventListener('click', function() {
    if (0 > y)
        y = y + 480;
    document.querySelector(".container3t").style.transform = "translate(" + y + "px)"
});
document.querySelector(".ctbtnr").addEventListener('click', function() {
    if (-7200 < y)
        y = y - 480;
    document.querySelector(".container3t").style.transform = "translate(" + y + "px)"
});