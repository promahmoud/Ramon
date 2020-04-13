// Created by iWeb 3.0.4 local-build-20190127

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,438),url:'Contacto_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Contacto_files/stroke_1.png'},{rect:new IWRect(1,-1,342,2),url:'Contacto_files/stroke_2.png'},{rect:new IWRect(343,-1,2,2),url:'Contacto_files/stroke_3.png'},{rect:new IWRect(343,1,2,438),url:'Contacto_files/stroke_4.png'},{rect:new IWRect(343,439,2,2),url:'Contacto_files/stroke_5.png'},{rect:new IWRect(1,439,342,2),url:'Contacto_files/stroke_6.png'},{rect:new IWRect(-1,439,2,2),url:'Contacto_files/stroke_7.png'}],new IWSize(344,440)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Contacto_files/ContactoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
