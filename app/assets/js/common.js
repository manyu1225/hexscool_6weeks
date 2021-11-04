
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

String.prototype.trim = function() {
  return this.replace(/(^\s*)|(\s*$)/g, "");
}

String.prototype.isInteger = function() {
  return /^\d+$/.test(this);
}

String.prototype.toUpper = function(){
  return this.toUpperCase();
}

String.prototype.toNumber = function() {
  	return Number(this);
}

//check date pattern with yyyyMMdd
String.prototype.checkDate = function() {
  var date = this.trim();

  if(!/^\d{8}$/.test(date)) {
	return false;
  }
  var year = parseInt(date.substring(0,4),10);
  var month = parseInt(date.substring(4,6),10);
  var day = parseInt(date.substring(6,8),10);

  if(month<1 || month > 12)
    return false;

  if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8
      || month == 10 || month == 12) {
   if(day<1 || day > 31)
    return false;
  }
  else if(month==2) {
     var febdays = 28 + ((year%400==0 || (year%4==0 && year%100!=0))?1:0);
     if(day<1 || day>febdays)
       return false;
  }
  else {
   if(day<1 || day > 30)
    return false;
  }
  return true;
}

//check date pattern with yyyy/MM/dd
String.prototype.checkDateN = function() {
  var date = this.trim();

  if (!/^\d{4}\/\d{2}\/\d{2}$/.test(date)) 
		return 1;
 
  var year = parseInt(date.substring(0,4),10);
  var month = parseInt(date.substring(5,7),10);
  var day = parseInt(date.substring(8,10),10);
	var o = new Date(year, month - 1, day);
	if (o.getFullYear() != year || o.getMonth() != month - 1 || o.getDate() != day)
		return 2; 
	return 0;
}
		
String.prototype.checkIp = function(){
  var ip = this.trim();

  var arr = ip.split(".");
  if(arr.length!=4){
     return true;
  }
  for(var i=0;i<arr.length;i++){
    if(arr[i]=='')
      return true;
  }

  if(arr[0].isInteger()&&arr[1].isInteger()&&arr[2].isInteger()&&arr[3].isInteger()){
     return false;
  }else if(arr[0]<255&&arr[1]<255&&arr[2]<255&&arr[3]<255){
     return false;
  }
  return true;
}

function getObject(objName) {
	var obj = null;
	obj = document.getElementById(objName);
	if(obj==null) {
		obj = document.getElementsByName(objName);
	}
	return obj;
}

function setCenter(objName) {
	try {
	var obj = getObject(objName);
	obj.style.left = (document.body.clientWidth - obj.offsetWidth) / 2 ;
	obj.style.top = (document.body.clientHeight - obj.offsetHeight) / 2;
	setTimeout("setCenter(\"" + objName + "\")",10);
	}
	catch(e) {}
}

function lockF5(){
    //��F3��
    if (event.keyCode==114){
        event.keyCode=0;
        window.event.returnValue=false;
    }
    //��F5��
    if (event.keyCode==116){
        event.keyCode=0;
        window.event.returnValue=false;
    }
    //��F6��
    if (event.keyCode==117){
        event.keyCode=0;
        window.event.returnValue=false;
    }
    //��F11��
    if (event.keyCode==122){
        event.keyCode=0;
        window.event.returnValue=false;
    }
    //��alt+��V�� �^�W�U��
    if (window.event.altKey && window.event.keyCode==37){
        window.event.returnValue=false;
    }
    if (window.event.altKey && window.event.keyCode==39){
        window.event.returnValue=false;
    }
    //��ctrl+r �������
    if (event.ctrlKey && event.keyCode==82){
        window.event.returnValue=false;
    }
    //��ctrl+n �t�}�����
    if (event.ctrlKey && event.keyCode==78){
        window.event.returnValue=false;
    }
}

//��ƹ��k��
function noRight(){
    window.event.returnValue=false;
}

function createOption(text,value) {
  var oOption = document.createElement("OPTION");
  oOption.text = text;
  oOption.value = value;
  return oOption;
}


String.prototype.isCompanyIdentity = function() {
  var id = this.trim().toUpperCase();

  var tmp = new String("12121241");
  var sum = 0;
  if (!/^\d{8}$/.test(id)) {
     return false;
  }

  for (var i=0; i< 8; i++) {
     var s1 = parseInt(id.substr(i,1));
     var s2 = parseInt(tmp.substr(i,1));

     var n = s1 * s2;
     while (n!=0) {
      sum += (n % 10);
      n = (n - n%10) / 10;  
     }
  }

  if (!((sum%10 == 0)?true:false)) {
     if (id.substr(6,1)=="7")
       return (((sum+1)%10 == 0)?true:false);
  }
  return ((sum%10 == 0)?true:false);
}


String.prototype.isIdentity = function(){
  var id = this.trim().toUpperCase();
  
  if(/^[A-Z][1-2]\d{8}\d?$/.test(id)) {
  	id = id.substring(0,10);
  }
  else {
  	return false;
  }
  
  var alph = new Array("A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","X","Y","W","Z","I","O");
  var num = new Array("10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35");
  var n=0;
  for(var i=0;i<alph.length;i++) {
     if(id.charAt(0)==alph[i])
	n=i;
  }
  var tot1 = parseFloat(num[n].charAt(0)) + (parseFloat(num[n].charAt(1)) * 9);
  var tot2 = 0;
  for(var i=1;i<id.length-1;i++)
    tot2 = tot2 + parseFloat(id.charAt(i))*(9-i);
  var tot3 = parseFloat(id.charAt(9));
  var tot4 = tot1 + tot2 + tot3;
  if((tot4 % 10)!=0)
    return false;
  return true;
}

String.prototype.isId = function() {
	return (this.isIdentity() || this.isCompanyIdentity());
}

String.prototype.isEmail = function() {
	return /^[\w\-]+(\.[\w\-]+)*@(([a-zA-Z0-9]+-+)*[a-zA-Z0-9]+\.)*[a-zA-Z0-9]{2,10}$/.test(this)
}

function setResult(node,value) {
    var result = document.getElementById(node);
    if(result.hasChildNodes()) {
        result.removeChild(result.childNodes[0]);
    }
    
    var text = document.createTextNode(value); 
    result.appendChild(text);  
}

function setCenter(objName) {
	try {
	var obj = getObject(objName);
	obj.style.left = (document.body.clientWidth - obj.offsetWidth) / 2 ;
	obj.style.top = (document.body.clientHeight - obj.offsetHeight) / 2;
	setTimeout("setCenter(\"" + objName + "\")",10);
	}
	catch(e) {}
}

function showObject(objName) {
	try {
		var obj = getObject(objName);
		obj.style.display = "";
	}
	catch(e) {
		setTimeout("showObject(\"" + objName + "\")",10);
	}
}

function hideRunningMessage(objName) {	
		try {
			var obj = getObject(objName);
			if(obj!=null) {
				obj.style.display = "none";
			}
		}
		catch(e){}	
}
/*
document.write("<DIV id=\"runningMessage\" style=\"z-index:1;display:none;position:absolute;top:100;left:100\" ><table styel=\"z-index:1\" width=\"500\" height=\"150\"  border=\"0\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#000000\"><tr><td align=\"center\"  bgcolor=\"#D7EBFF\" id=\"runningMessageText\" style=\"color:red; font-weight:bold; font-size:20pt\" ></td></tr></table></DIV>");
setCenter("runningMessage");
*/
function showRunningMessage(msg) {
	if(msg==null) {
		msg = decodeURI("%u4EA4%u6613%u57F7%u884C%u4E2D%uFF0C%u8ACB%u52FF%u95DC%u9589%u8996%u7A97%uFF0C%u8ACB%u7A0D%u5F8C%uFF01");
	}
	getObject("runningMessageText").innerHTML = msg;
	/*
	if(window.runningMessage==null) {
		if(msg==null) {
			msg = decodeURI("%u4EA4%u6613%u57F7%u884C%u4E2D%uFF0C%u8ACB%u7A0D%u5F8C");
		}
		document.write("<DIV id=\"runningMessage\" style=\"display:none;position:absolute;top:100;left:100\" ><table width=\"400\" height=\"200\"  border=\"0\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#000000\"><tr><td align=\"center\" class=\"lblCaution01\" bgcolor=\"#D7EBFF\"><H2>" + msg + "</H2></td></tr></table></DIV>");
		setCenter("runningMessage");
	}
	*/
	showObject("runningMessage");
}

function closeRunningMessage() {
	if(document!=null && document.readyState=="complete") {
		hideRunningMessage("runningMessage");
	}
	else {
		setTimeout(closeRunningMessage,10);
	}
}

function disablebuttons(){
	with(document.forms[0]){
	 for (i=0;i<elements.length;i++){
	  	if (elements[i].type.toLowerCase()=="submit" || elements[i].type.toLowerCase()=="button"){
	  		elements[i].disabled = true;
	  	}
	  }
	}	
}

function enablebuttons(){
	with(document.forms[0]){
	 for (i=0;i<elements.length;i++){
	  	if (elements[i].type.toLowerCase()=="submit" || elements[i].type.toLowerCase()=="button"){
	  		elements[i].disabled = false;
	  	}
	  }
	}	
}

	function posfooter() {
		/*var ch = document.documentElement.clientHeight;
		var ph = document.body.offsetHeight;
		var fh = document.getElementById('footer').offsetHeight;
		var fih = parseInt(document.getElementById('footerfill').height);
		if (ph - fih - 30 < ch) 
			document.getElementById('footerfill').height = ch -ph + 30 + fih;
		else
			document.getElementById('footerfill').height = 30;*/
	}

// remove leading 0, and comma, remove all after .
function toMoneyInt(s)
{
	if(s==0){
		return '0';
	}else{
	
		for (var i = 0; i < s.length; i++) {
			if (s.charAt(i) != '0' && s.charAt(i) != ' ' && s.charAt(i) != '\t')
				break;
		}
		hasdot=false;
		for (var j = s.length - 1; j >= i; j--) {
			if (s.charAt(j) == '.') {
				hasdot=true;
				j--;
				break;
			}
		}
		if (j < i) {
			if (hasdot)
				return "0";
			j = s.length - 1;
		}
		
		s = s.substring(i, j + 1);
		var le = s.length  % 3;
		b = '';
		b += s.substring(0,le);
		for (var k = le; k < s.length; k += 3) {
			if (k != 0)
				b += ',';
			b += s.substring(k, k+3);
		}
		return b;
	}
}

function toMoneyFloat(s)
{
	var index_point=0;
	var tail='';
	index_point=s.indexOf(".");
	if(index_point>0 && (index_point+1)<s.length){
		tail=s.substring(index_point);
	}
	b = '';
	b=toMoneyInt(s);
	b=b+tail;
	
	
	return b;
}
	
function enableField(inputField){
	inputField.disabled = false;
	inputField.style.backgroundColor = "#FFFFFF";
}

function disableField(inputField){
	inputField.disabled = true;
	inputField.style.backgroundColor = "#D9D9D9";
}

function cancelAll(){
   var nodes = document.all;
   
   for(var i=0;i<nodes.length;i++){
        
    if(nodes[i].type=="checkbox"){
    	    nodes[i].checked = false;
    	}
   }
}

function selectAll(){
   var nodes = document.all;
   
   for(var i=0;i<nodes.length;i++){
        
    if(nodes[i].type=="checkbox"){
    	    nodes[i].checked = true;
    	}
   }
}

function clearText(){
   var nodes = document.all;
   
   for(var i=0;i<nodes.length;i++){
        
    if(nodes[i].type=="text"){
    	    nodes[i].value = "";
    	}
   }
}

String.prototype.isSameChar = function() {
	return /^(.?)\1*$/.test(this);
}

String.prototype.isUpperCase = function() {
	return /^[A-Z]*$/.test(this);
}

String.prototype.isLowerCase = function() {
	return /^[a-z]*$/.test(this);
}


String.prototype.isEnglish = function() {
	return /^[A-Za-z]*$/.test(this);
}

String.prototype.isUpEnglishAndNumber = function() {
	return /^[A-Z\d+,]*$/.test(this);
}

String.prototype.isNumber = function() {
	return /^\d+$/.test(this);
}


String.prototype.isSpecialChar = function()
{
	var s = this;
	for(var i=0;i<s.length;i++) {
		if(!((s.charAt(i)>='0' && s.charAt(i)<='9') || (s.charAt(i)>='a' && s.charAt(i)<='z') || (s.charAt(i)>='A' && s.charAt(i)<='Z'))) {
			return true;
		}
	}
	return false;	
}


String.prototype.isEqualDifference = function() {
	var s = this;
	for(var i=2;i<s.length;i++) {
		if(s.charCodeAt(i-2) - s.charCodeAt(i-1) != s.charCodeAt(i-1) - s.charCodeAt(i)) {
			return false;
		}
	}
	return true;
}	
	
function toURLhex(n)
{
	var s = n.toString(16).toUpperCase();
	return '%' + (s.length == 1 ? '0' : '') + s;
}

		
function URLEncodeUTF8(s)
{
	if (s == null)
		return s;
	var ret = '';
	for (var i = 0; i < s.length; i++) {
		var n = s.charCodeAt(i);
		if (n < 0x80) {
			if ((n>= 0x61 && n <= 0x7A) || (n>=0x41 && n<= 0x51) || (n >=0x30 && n<=0x39) || n==0x5f || n==0x21 || (n >= 0x27 && n<= 0x2a) || n==0x2d || n==0x2e) {
				ret += s.charAt(i);
			}
			else
				ret += toURLhex(n);
		}
		else if (n < 0x800) {
			ret += toURLhex(0x60 | ((n >> 6) & 0x17));
			ret += toURLhex(0x80 | (n & 0x3f)); 
		}
		else if (n < 0x10000) {
			ret += toURLhex(0xE0 | ((n >> 12) & 0x0f));
			ret += toURLhex(0x80 | ((n >> 6) & 0x3f)); 
			ret += toURLhex(0x80 | (n & 0x3f)); 
		}
	}
	return ret;
}

function unAsc(text) {  
		  
	  var asciiTable = "!\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
	  var big5Table = "\uFF01\u201D\uFF03\uFF04\uFF05\uFF06\u2019\uFF08\uFF09\uFF0A\uFF0B\uFF0C\uFF0D\uFF0E\uFF0F\uFF10\uFF11\uFF12\uFF13\uFF14\uFF15\uFF16\uFF17\uFF18\uFF19\uFF1A\uFF1B\uFF1C\uFF1D\uFF1E\uFF1F\uFF20\uFF21\uFF22\uFF23\uFF24\uFF25\uFF26\uFF27\uFF28\uFF29\uFF2A\uFF2B\uFF2C\uFF2D\uFF2E\uFF2F\uFF30\uFF31\uFF32\uFF33\uFF34\uFF35\uFF36\uFF37\uFF38\uFF39\uFF3A\uFF3B\uFF3C\uFF3D\uFF3E\uFF3F\u2018\uFF41\uFF42\uFF43\uFF44\uFF45\uFF46\uFF47\uFF48\uFF49\uFF4A\uFF4B\uFF4C\uFF4D\uFF4E\uFF4F\uFF50\uFF51\uFF52\uFF53\uFF54\uFF55\uFF56\uFF57\uFF58\uFF59\uFF5A\uFF5B\uFF5C\uFF5D\uFF5E";

	  var result = "";
	  for ( var i = 0 ; i < text.length ; i ++ ) {
		  var val = text.charAt(i) ;        
	    var j = asciiTable.indexOf(val);        
	    result += ( j > -1 ? big5Table.charAt(j) : val );    
	  }
	  return result;
}

String.prototype.checkMemo = function() {
	var s = this;
	if(s.length > 5) return false;
	for(var i=0;i<s.length;i++){
		if(s.charCodeAt(i) > 255){
			 continue;
		}else{
			if(!/^[A-Za-z\d+,]*$/.test(s.charAt(i))) return false;
		}
	}		
	return true;
}

function common_print()
{
	common_toprint(document.title, document.mform);
}

function common_print_wide()
{
	common_toprint_wide(document.title, document.mform);
}

function common_toprint(title, obj)
{ 
		var disp_setting="toolbar=no,location=no,directories=no,menubar=no,"; 
		    disp_setting+="scrollbars=no,width=600, height=600"; 
		var content_value = obj.innerHTML;
		var style = '<style type="text/css">body,td{font-size:10pt;}table{border: 1px #000 solid;border-collapse: collapse;}</style>' ;
		
		var docprint=window.open("","_blank",disp_setting); 
			docprint.document.open(); 
			docprint.document.write('<html><head><title>'+title+'</title><link href="/ib/css/css.css" type="text/css" rel="stylesheet" />' ); 
			docprint.document.write('</head><body width="600px" onLoad="self.print();self.close();">');          
			docprint.document.write(content_value);          
			docprint.document.write('</body></html>');
			
			docprint.document.close(); 
}

function common_toprint_wide(title, obj)
{ 
		var disp_setting="toolbar=no,location=no,directories=no,menubar=no,"; 
		    disp_setting+="scrollbars=no,width=900, height=600"; 
		var content_value = obj.innerHTML;
		var style = '<style type="text/css">body,td{font-size:10pt;}table{border: 1px #000 solid;border-collapse: collapse;}</style>' ;
		
		var docprint=window.open("","_blank",disp_setting); 
			docprint.document.open(); 
			docprint.document.write('<html><head><title>'+title+'</title><link href="/ib/css/css.css" type="text/css" rel="stylesheet" />' ); 
			docprint.document.write('</head><body width="600px" onLoad="self.print();self.close();">');          
			docprint.document.write(content_value);          
			docprint.document.write('</body></html>');
			
			docprint.document.close(); 
}

function URLEncode(s)
{
	if (s == null)
	{
		return s;
	}
	var ret = '';
	for (var i = 0; i < s.length; i++) 
	{
		var n = s.charAt(i);
		if (n == '/')
		{
			ret += '%2F';
		}else if (n == '+')
			{
				ret += '%2B';
			}else
				{
					ret += n;
				}
	}
	return ret;
}

/*
 *  加法函數，用來得到精確的加法結果
 *  說明:javascript的加法結果會有誤差，在兩個浮點樹相加的時候會比較明顯，這個函數回回傳較為精確的加法結果。
 *  使用:accAdd(arg1,arg2)
 *  return:agr1 加上arg2的精確結果
 */
function accAdd(arg1, arg2)
{
  var r1, r2, m, c;
  try 
  {
    r1 = arg1.toString().split(".")[1].length;
  }
  catch (e)
  {
    r1 = 0;
  }
  try 
  {
    r2 = arg2.toString().split(".")[1].length;
  }
  catch (e)
  {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) 
  {
    var cm = Math.pow(10, c);
    if (r1 > r2) 
    {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", "")) * cm;
    }
    else
    {
      arg1 = Number(arg1.toString().replace(".", "")) * cm;
      arg2 = Number(arg2.toString().replace(".", ""));
    }
  }
  else
  {
    arg1 = Number(arg1.toString().replace(".", ""));
    arg2 = Number(arg2.toString().replace(".", ""));
  }
  return (arg1 + arg2) / m;
  }
 
/*  給number類型增加一個add函數，使用更加方便  */
Number.prototype.add = function (arg)
{
  return accAdd(arg, this);
};

/* formatAmt 
 *   加逗點，保留小數兩位，不足補0
 */
function formatTxnAmt(vTxnAmt)
{
  sTxnAmt = vTxnAmt.toString(10);
  x = sTxnAmt.split(".");
  integer = x[0];

  if(x.length ==1)
    decimal= ".";
  else if(x.length ==2)
    decimal="." + x[1] ;
  //補滿小數點兩位
  while(decimal.length<3)
  {
    decimal=decimal+"0";
  }

  //只保留小數點後兩位
  if(decimal.length>3)
    decimal=decimal.substring(0,3);

  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(integer))
  {
    integer = integer.replace(rgx, "$1" + "," + "$2");
  }
  return integer + decimal;
}
