// Created by iWeb 3.0.2 local-build-20191115

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.ramonconde.com/ramonconde/Obras/Paginas/Soliloquios_%282019%29_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.ramonconde.com/ramonconde/Obras/Paginas',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.ramonconde.com/ramonconde/Obras/Paginas',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(305,305),new IWSize(305,45),new IWSize(329,365),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-6,4,9,296),url:'Soliloquios_%282019%29_files/stroke.png'},{rect:new IWRect(-3,2,6,2),url:'Soliloquios_%282019%29_files/stroke_1.png'},{rect:new IWRect(3,-5,296,9),url:'Soliloquios_%282019%29_files/stroke_2.png'},{rect:new IWRect(299,-4,10,8),url:'Soliloquios_%282019%29_files/stroke_3.png'},{rect:new IWRect(299,4,11,296),url:'Soliloquios_%282019%29_files/stroke_4.png'},{rect:new IWRect(299,300,11,10),url:'Soliloquios_%282019%29_files/stroke_5.png'},{rect:new IWRect(3,300,296,10),url:'Soliloquios_%282019%29_files/stroke_6.png'},{rect:new IWRect(-5,300,8,10),url:'Soliloquios_%282019%29_files/stroke_7.png'}],new IWSize(305,305)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Soliloquios_(2019)_files/Soliloquios_(2019)Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
