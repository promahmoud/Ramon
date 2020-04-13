// Created by iWeb 3.0.4 local-build-20190127

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00}),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Prensa_files/PrensaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Prensa_files','shapeimage_4','0');IMpreload('Prensa_files','shapeimage_5','0');IMpreload('Prensa_files','shapeimage_5','1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
