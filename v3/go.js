function gotourl() {
    var items = [
	'ke5@f6rbe5@f6999a1@b2gite5@f6huba1@b2io'
	];
	var uri = items[Math.floor(Math.random()*items.length)];//get 1 from items
    var a = 'https', b = '://',r = a + b + uri;
    r = r.replace(/a1@b2/g, '.');
    r = r.replace(/c3@d4/g, ':');
    r = r.replace(/e5@f6/g, '');
    window.location.href = r;
}
