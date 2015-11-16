/*------------------------------------------------------------------------
 # MD Slider - March 18, 2013
 # ------------------------------------------------------------------------
 --------------------------------------------------------------------------*/

(function(e){function t(e,n){return e.length<n?t("0"+e,n):e}e.fn.triggerItemEvent=function(){var t=e(this).data("slidepanel");if(t==null)return;var n=e(this);n.draggable({containment:"parent",stop:function(r,i){var s=Math.round(e(i.helper).position().left),o=Math.round(e(i.helper).position().top);n.data("left",s);n.data("top",o);t.mdSliderToolbar.changePositionValue(s,o)}});n.resizable({handles:"e, s, se",containment:"parent",resize:function(r,i){var s=Math.round(e(i.helper).width()),o=Math.round(e(i.helper).height());n.data("width",s);n.data("height",o);t.mdSliderToolbar.changeSizeValue(s,o)}});n.bind("mousedown",function(n){if(n.ctrlKey){e(this).addClass("ui-selected")}else{if(!e(this).hasClass("ui-selected")){e(this).siblings(".slider-item").removeClass("ui-selected");e(this).addClass("ui-selected")}else{e(this).siblings(".slider-item.ui-selected").removeClass("ui-selected")}}t.triggerChangeSelectItem()});return this};e.fn.getItemValues=function(){if(e(this).hasClass("slider-item")){var t={width:e(this).data("width"),height:e(this).data("height"),left:e(this).data("left"),top:e(this).data("top"),starttime:e(this).data("starttime")?Math.round(e(this).data("starttime")):0,stoptime:e(this).data("stoptime")?Math.round(e(this).data("stoptime")):0,startani:e(this).data("startani"),stopani:e(this).data("stopani"),opacity:e(this).data("opacity"),style:e(this).data("style"),zindex:e(this).css("z-index"),type:e(this).data("type"),title:e(this).data("title"),backgroundcolor:e(this).data("backgroundcolor")==undefined||e(this).data("backgroundcolor")===""?null:e(this).data("backgroundcolor")==0?"#000000":e.fixHex(e(this).data("backgroundcolor").toString()),backgroundtransparent:e(this).data("backgroundtransparent"),borderposition:e(this).data("borderposition"),borderwidth:e(this).data("borderwidth"),borderstyle:e(this).data("borderstyle"),bordercolor:e(this).data("bordercolor")==undefined||e(this).data("bordercolor")===""?null:e(this).data("bordercolor")==0?"#000000":e.fixHex(e(this).data("bordercolor").toString()),bordertopleftradius:e(this).data("bordertopleftradius"),bordertoprightradius:e(this).data("bordertoprightradius"),borderbottomrightradius:e(this).data("borderbottomrightradius"),borderbottomleftradius:e(this).data("borderbottomleftradius"),paddingtop:e(this).data("paddingtop"),paddingright:e(this).data("paddingright"),paddingbottom:e(this).data("paddingbottom"),paddingleft:e(this).data("paddingleft"),link:e(this).data("link")};if(e(this).data("type")=="text"){e.extend(t,{fontsize:e(this).data("fontsize"),fontfamily:e(this).data("fontfamily"),fontweight:e(this).data("fontweight"),fontstyle:e(this).data("fontstyle"),textdecoration:e(this).data("textdecoration"),texttransform:e(this).data("texttransform"),textalign:e(this).data("textalign"),color:e(this).data("color")==undefined||e(this).data("color")===""?null:e(this).data("color")==0?"#000000":e.fixHex(e(this).data("color").toString())})}else{e.extend(t,{fileid:e(this).data("fileid"),thumb:e(this).find("img").attr("src")})}return t}return null};e.fn.setItemValues=function(t){if(e(this).hasClass("slider-item")){for(var n in t){e(this).data(n,t[n])}return true}return null};e.fn.setItemStyle=function(t){if(e(this).hasClass("slider-item")){var n=[];if(t.style)e(this).addClass(t.style);if(t.width)n["width"]=t.width;if(t.height)n["height"]=t.height;if(t.top)n["top"]=t.top;if(t.left)n["left"]=t.left;if(t.opacity)n["opacity"]=t.opacity/100;if(t.backgroundcolor!=null){var r=t.backgroundcolor;var i=parseInt(t.backgroundtransparent);var s=e.HexToRGB(r);i=i?i:100;var o="rgba("+s.r+","+s.g+","+s.b+","+i/100+")";n["background-color"]=o}if(t.bordercolor)n["border-color"]=t.bordercolor;if(t.borderwidth)n["border-width"]=t.borderwidth+"px";var u="none";if(t.borderposition&&t.borderstyle){var a=t.borderposition,f=t.borderstyle;if(a&1){u=f}else{u="none"}if(a&2){u+=" "+f}else{u+=" none"}if(a&4){u+=" "+f}else{u+=" none"}if(a&8){u+=" "+f}else{u+=" none"}}n["border-style"]=u;if(t.bordertopleftradius)n["border-top-left-radius"]=t.bordertopleftradius+"px";if(t.bordertoprightradius)n["border-top-right-radius"]=t.bordertoprightradius+"px";if(t.borderbottomrightradius)n["border-bottom-right-radius"]=t.borderbottomrightradius+"px";if(t.borderbottomleftradius)n["border-bottom-left-radius"]=t.borderbottomleftradius+"px";if(t.paddingtop)n["padding-top"]=t.paddingtop+"px";if(t.paddingright)n["padding-right"]=t.paddingright+"px";if(t.paddingbottom)n["padding-bottom"]=t.paddingbottom+"px";if(t.paddingleft)n["padding-left"]=t.paddingleft+"px";if(t.type=="text"){if(t.fontsize)n["font-size"]=t.fontsize+"px";if(t.fontfamily)n["font-family"]=t.fontfamily;if(t.fontweight)n["font-weight"]=t.fontweight;if(t.fontstyle)n["font-style"]=t.fontstyle;if(t.textdecoration)n["text-decoration"]=t.textdecoration;if(t.texttransform)n["text-transform"]=t.texttransform;if(t.textalign)n["text-align"]=t.textalign;if(t.color)n["color"]=t.color}e(this).css(n)}return false};e.fn.setItemHtml=function(t){if(e(this).hasClass("slider-item")){if(t.type=="text"){e(this).find("p").html(t.title.replace(/\n/g,"<br />"))}else{e(this).find("img").attr("src",t.thumb)}}return false};e.HexToRGB=function(e){var e=parseInt(e.toString().indexOf("#")>-1?e.substring(1):e,16);return{r:e>>16,g:(e&65280)>>8,b:e&255}};e.removeMinusSign=function(e){return e.replace(/-/g,"")};e.objectToString=function(e){return JSON.stringify(e)};e.stringToObject=function(e){return jQuery.parseJSON(e)};e.fixHex=function(e){var t=6-e.length;if(t>0){var n=[];for(var r=0;r<t;r++){n.push("0")}n.push(e);e=n.join("")}return e}})(jQuery)