// Created by iWeb 3.0.2 local-build-20191115

function createMediaStream_id1()
{return IWCreateMediaCollection("http://www.ramonconde.com/ramonconde/Obras/Obras_files/rss.xml",true,255,["Aún no hay fotos","%d foto","%d fotos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.ramonconde.com/ramonconde/Obras',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget12'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.ramonconde.com/ramonconde/Obras',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(274,206),new IWSize(274,40),new IWSize(329,261),27,27,0,new IWSize(18,19)),new IWPhotoFrame([IWCreateImage('Obras_files/ul.png'),IWCreateImage('Obras_files/top.png'),IWCreateImage('Obras_files/ur.png'),IWCreateImage('Obras_files/right.png'),IWCreateImage('Obras_files/lr.png'),IWCreateImage('Obras_files/bottom.png'),IWCreateImage('Obras_files/ll.png'),IWCreateImage('Obras_files/left.png')],null,0,0.333333,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget12',null,'widget13',{showTitle:true,showMetric:false})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Obras_files/ObrasMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
