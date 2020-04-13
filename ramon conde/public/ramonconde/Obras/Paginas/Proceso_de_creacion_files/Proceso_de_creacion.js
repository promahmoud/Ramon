// Created by iWeb 3.0.2 local-build-20191115

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.ramonconde.com/ramonconde/Obras/Paginas/Proceso_de_creacion_files/rss.xml",false);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.ramonconde.com/ramonconde/Obras/Paginas',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.ramonconde.com/ramonconde/Obras/Paginas',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(319,319),new IWSize(319,0),new IWSize(329,334),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-4,3,6,312),url:'Proceso_de_creacion_files/stroke.png'},{rect:new IWRect(-19,-21,0,0),url:null},{rect:new IWRect(2,-4,312,7),url:'Proceso_de_creacion_files/stroke_1.png'},{rect:new IWRect(314,-3,6,6),url:'Proceso_de_creacion_files/stroke_2.png'},{rect:new IWRect(314,3,7,312),url:'Proceso_de_creacion_files/stroke_3.png'},{rect:new IWRect(314,315,7,6),url:'Proceso_de_creacion_files/stroke_4.png'},{rect:new IWRect(2,315,312,6),url:'Proceso_de_creacion_files/stroke_5.png'},{rect:new IWRect(-4,315,6,6),url:'Proceso_de_creacion_files/stroke_6.png'}],new IWSize(318,318)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:0,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Proceso_de_creacion_files/Proceso_de_creacionMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
