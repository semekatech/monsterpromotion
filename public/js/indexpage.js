var _0x2a3f8f=_0x1828;function _0x1828(_0x4a6f68,_0x2b6bf4){var _0x1669c3=_0x1669();return _0x1828=function(_0x182885,_0x546fd1){_0x182885=_0x182885-0x1aa;var _0x3dc2fb=_0x1669c3[_0x182885];return _0x3dc2fb;},_0x1828(_0x4a6f68,_0x2b6bf4);}(function(_0x33c059,_0x2a15bf){var _0x56dc80=_0x1828,_0x326ebf=_0x33c059();while(!![]){try{var _0x3101ee=parseInt(_0x56dc80(0x1b4))/0x1+parseInt(_0x56dc80(0x1fe))/0x2*(parseInt(_0x56dc80(0x1ab))/0x3)+-parseInt(_0x56dc80(0x200))/0x4+parseInt(_0x56dc80(0x1ce))/0x5+parseInt(_0x56dc80(0x1f6))/0x6*(parseInt(_0x56dc80(0x1ba))/0x7)+-parseInt(_0x56dc80(0x1dd))/0x8*(-parseInt(_0x56dc80(0x1bb))/0x9)+-parseInt(_0x56dc80(0x1fc))/0xa;if(_0x3101ee===_0x2a15bf)break;else _0x326ebf['push'](_0x326ebf['shift']());}catch(_0x3b24c7){_0x326ebf['push'](_0x326ebf['shift']());}}}(_0x1669,0x6a231));localStorage[_0x2a3f8f(0x1d2)](_0x2a3f8f(0x1eb))&&(window['location'][_0x2a3f8f(0x1ed)]='user/play-games');const formput=document['querySelector'](_0x2a3f8f(0x1ad)),form=document['querySelector'](_0x2a3f8f(0x1c2)),fileInput=document[_0x2a3f8f(0x1cd)](_0x2a3f8f(0x205));phoneInput=document[_0x2a3f8f(0x1d4)](_0x2a3f8f(0x1d7))[_0x2a3f8f(0x1b1)],nameInput=document[_0x2a3f8f(0x1d4)](_0x2a3f8f(0x1ee))[_0x2a3f8f(0x1b1)],(verifyButton=document[_0x2a3f8f(0x1cd)]('.verify-button'),verificationCodeInput=document['getElementById'](_0x2a3f8f(0x1cf)),progressArea=document[_0x2a3f8f(0x1cd)](_0x2a3f8f(0x1e9)),uploadedArea=document[_0x2a3f8f(0x1cd)]('.uploaded-area')),fileInput[_0x2a3f8f(0x1af)]=!![],verificationCodeInput['disabled']=!![],document[_0x2a3f8f(0x1d4)](_0x2a3f8f(0x1f3))[_0x2a3f8f(0x1af)]=!![],formput[_0x2a3f8f(0x1ca)](_0x2a3f8f(0x1cc),()=>{var _0x39083e=_0x2a3f8f;fileInput[_0x39083e(0x1cc)]();}),verifyButton[_0x2a3f8f(0x1ca)]('click',()=>{var _0x52bb4a=_0x2a3f8f,_0x227a47=document['getElementById']('phone_no')['value'];validateMobileNumber(_0x227a47)?$[_0x52bb4a(0x1b3)]({'url':_0x52bb4a(0x1fa),'method':_0x52bb4a(0x1d8),'data':{'mobile':_0x227a47,'_token':_0x52bb4a(0x1d6)},'success':function(_0x883bc){var _0x7716af=_0x52bb4a;if(_0x883bc[_0x7716af(0x1f1)]===_0x7716af(0x1d3)){if(_0x883bc['exist']=='approved'){var _0xb401=document[_0x7716af(0x1d4)](_0x7716af(0x1ee));_0xb401[_0x7716af(0x1b1)]=_0x883bc[_0x7716af(0x1ee)],_0xb401[_0x7716af(0x1e8)]=!![],document[_0x7716af(0x1cd)](_0x7716af(0x1ad))[_0x7716af(0x1b5)][_0x7716af(0x1f2)]=_0x7716af(0x209);}else{if(_0x883bc[_0x7716af(0x1cb)]==_0x7716af(0x1c0)){var _0xb401=document['getElementById']('username');_0xb401[_0x7716af(0x1b1)]=_0x883bc[_0x7716af(0x1ee)],_0xb401[_0x7716af(0x1e8)]=!![],document['querySelector'](_0x7716af(0x1ea))[_0x7716af(0x1e1)]='Your\x20previous\x20upload\x20was\x20rejected,Kindly\x20upload\x20again';}else{if(_0x883bc[_0x7716af(0x1cb)]==_0x7716af(0x1ae)){var _0xb401=document['getElementById'](_0x7716af(0x1ee));_0xb401[_0x7716af(0x1b1)]=_0x883bc['username'],_0xb401['readOnly']=!![],document[_0x7716af(0x1cd)]('.upload-form')[_0x7716af(0x1b5)][_0x7716af(0x1f2)]=_0x7716af(0x209),document[_0x7716af(0x1cd)](_0x7716af(0x1ea))[_0x7716af(0x1e1)]=_0x7716af(0x1de);}}}var _0x44de17=_0x883bc[_0x7716af(0x204)];localStorage[_0x7716af(0x1da)](_0x7716af(0x203),_0x44de17),toastr['success']('OTP\x20requested\x20successfully!'),verificationCodeInput['disabled']=![];}else Swal['fire']({'icon':_0x7716af(0x1e7),'title':_0x7716af(0x1e2),'text':_0x7716af(0x20b)})['then'](_0x46d2ad=>{var _0x388851=_0x7716af;_0x46d2ad[_0x388851(0x1bd)]&&(window[_0x388851(0x1dc)]['href']='/');});},'error':function(_0x9b1a9b,_0x2cfee6,_0x450466){var _0xd9da55=_0x52bb4a;toastr['error'](_0xd9da55(0x1b0));}}):Swal[_0x52bb4a(0x1ef)]({'icon':'error','title':_0x52bb4a(0x1e2),'text':_0x52bb4a(0x1fb)});}),fileInput[_0x2a3f8f(0x1e5)]=({target:_0x40b0d4})=>{var _0x1f8ef5=_0x2a3f8f;let _0x59ec83=_0x40b0d4[_0x1f8ef5(0x1bc)][0x0];if(_0x59ec83){let _0x11ce63=_0x59ec83[_0x1f8ef5(0x201)];if(_0x11ce63[_0x1f8ef5(0x1b2)]>=0xc){let _0x1f2a7c=_0x11ce63[_0x1f8ef5(0x1c4)]('.');_0x11ce63=_0x1f2a7c[0x0][_0x1f8ef5(0x1b6)](0x0,0xd)+'...\x20.'+_0x1f2a7c[0x1];}uploadFile(_0x11ce63);}};function uploadFile(_0x4d7e13){var _0x1a114b=_0x2a3f8f;let _0x37c098=new XMLHttpRequest();_0x37c098[_0x1a114b(0x1f5)]('POST',_0x1a114b(0x1fd)),_0x37c098[_0x1a114b(0x1c3)][_0x1a114b(0x1ca)](_0x1a114b(0x1f0),({loaded:_0xac5630,total:_0x11fe2e})=>{var _0x2d55b2=_0x1a114b;let _0x2cd2ff=Math[_0x2d55b2(0x1b9)](_0xac5630/_0x11fe2e*0x64),_0x2eb509=Math['floor'](_0x11fe2e/0x3e8),_0x4efb36;_0x2eb509<0x400?_0x4efb36=_0x2eb509+_0x2d55b2(0x1c9):_0x4efb36=(_0xac5630/(0x400*0x400))[_0x2d55b2(0x1c8)](0x2)+_0x2d55b2(0x1d1);let _0xcacd00='<li\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-file-alt\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22details\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22name\x22>'+_0x4d7e13+_0x2d55b2(0x1f8)+_0x2cd2ff+_0x2d55b2(0x1d9)+_0x2cd2ff+_0x2d55b2(0x1ff);uploadedArea['classList'][_0x2d55b2(0x1aa)]('onprogress'),progressArea['innerHTML']=_0xcacd00;if(_0xac5630==_0x11fe2e){progressArea[_0x2d55b2(0x1c1)]='';let _0x559cbd='<li\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22content\x20upload\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-file-alt\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22details\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22name\x22>'+_0x4d7e13+_0x2d55b2(0x207)+_0x4efb36+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-check\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>';uploadedArea['classList'][_0x2d55b2(0x1e3)](_0x2d55b2(0x1df)),uploadedArea[_0x2d55b2(0x206)](_0x2d55b2(0x1e0),_0x559cbd);}});let _0x4a70e1=new FormData(form);_0x37c098['send'](_0x4a70e1);}function validateMobileNumber(_0x5300cc){var _0x174096=_0x2a3f8f;_0x5300cc=_0x5300cc[_0x174096(0x1d5)](/\D/g,'');const _0x4766e7=_0x5300cc[_0x174096(0x1b2)];if((_0x5300cc[_0x174096(0x1db)]('07')||_0x5300cc['startsWith']('01'))&&_0x4766e7===0xa)return!![];else return(_0x5300cc['startsWith'](_0x174096(0x1e6))||_0x5300cc[_0x174096(0x1db)]('254'))&&_0x4766e7===0xc?!![]:![];}var ellipsis=document['getElementById']('ellipsis'),intervalId;function startAnimation(){var _0x133734=_0x2a3f8f,_0x2f93dc=document[_0x133734(0x1d4)](_0x133734(0x202)),_0x3cc259=0x1,_0x353402=0x1,_0x35ed2c=!![];intervalId=setInterval(function(){var _0x23afcb=_0x133734;_0x35ed2c?(_0x2f93dc['innerHTML']+='.',_0x3cc259++,_0x3cc259>_0x353402&&(_0x35ed2c=![])):(_0x2f93dc[_0x23afcb(0x1c1)]=_0x2f93dc['innerHTML'][_0x23afcb(0x1be)](0x0,-0x1),_0x3cc259--,_0x3cc259===0x1&&(_0x35ed2c=!![]));},0x320);}startAnimation();function stopAnimation(){var _0x93d953=_0x2a3f8f;clearInterval(intervalId),ellipsis[_0x93d953(0x1c1)]='';}function verifyOTP(){var _0x4f4106=_0x2a3f8f,_0xfa20a9=document[_0x4f4106(0x1d4)]('verificationid')[_0x4f4106(0x1b1)];if(_0xfa20a9!=''){document[_0x4f4106(0x1d4)](_0x4f4106(0x1d0))['textContent']=_0x4f4106(0x1c6),document[_0x4f4106(0x1d4)](_0x4f4106(0x1d0))[_0x4f4106(0x1b5)][_0x4f4106(0x1f2)]=_0x4f4106(0x20a),document[_0x4f4106(0x1d4)](_0x4f4106(0x202))[_0x4f4106(0x1b5)][_0x4f4106(0x1f2)]=_0x4f4106(0x20a);var _0x4177f7=document[_0x4f4106(0x1d4)](_0x4f4106(0x1cf))[_0x4f4106(0x1b1)],_0x2f3a39=localStorage[_0x4f4106(0x1d2)](_0x4f4106(0x203));;startAnimation(),_0x4177f7[_0x4f4106(0x1b2)]==0x6&&(_0x2f3a39==_0x4177f7?(fileInput[_0x4f4106(0x1af)]=![],document[_0x4f4106(0x1d4)]('verifying_code')[_0x4f4106(0x1c7)]=_0x4f4106(0x20c),document[_0x4f4106(0x1d4)](_0x4f4106(0x1d0))['style']['color']='#56be78',document[_0x4f4106(0x1d4)](_0x4f4106(0x202))[_0x4f4106(0x1b5)]['display']='none',document[_0x4f4106(0x1d4)](_0x4f4106(0x1f3))[_0x4f4106(0x1af)]=![]):(document[_0x4f4106(0x1d4)](_0x4f4106(0x1d0))['textContent']=_0x4f4106(0x1ec),document[_0x4f4106(0x1d4)](_0x4f4106(0x202))[_0x4f4106(0x1b5)][_0x4f4106(0x1f2)]=_0x4f4106(0x209)));}}function _0x1669(){var _0xe7b101=['user_mobile_no','Wrong\x20Verification\x20Code','href','username','fire','progress','status','display','submitbtn','Phone\x20Cannot\x20be\x20empty.','open','12bNWKaM','api/user/save-user-details','\x20•\x20Uploading</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22percent\x22>','Your\x20uploaded\x20selfie\x20is\x20pending\x20approval.\x20We\x20shall\x20get\x20back\x20to\x20you\x20shortly.','/api/user/send-otp','Please\x20Enter\x20a\x20valid\x20mobile\x20No','10247320zQaPKx','api/user/uspload-photo','572870bOVoJg','%\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>','2605440HqNZfe','name','ellipsis','verification_otp','code','.file-input','insertAdjacentHTML','\x20•\x20Uploaded</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22size\x22>','Success','none','inline-block','OTP\x20Not\x20Send.','Verified\x20Succesfully','add','3wHAFBg','Please\x20enter\x20a\x20phone\x20number.','.upload-form','pending','disabled','Error:\x20Unable\x20to\x20request\x20OTP.','value','length','ajax','348226AyEkUn','style','substring','Details\x20submitted,\x20you\x20will\x20be\x20redirected\x20shortly.','Please\x20select\x20a\x20file\x20to\x20upload.','floor','2426543enMgQh','1053xYiGZf','files','isConfirmed','slice','info','rejected','innerHTML','form','upload','split','failed_phone','Verifying\x20code','textContent','toFixed','\x20KB','addEventListener','exist','click','querySelector','179125UmPbJE','verificationid','verifying_code','\x20MB','getItem','success','getElementById','replace','{{\x20csrf_token()\x20}}','phone_no','POST','%</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22width:\x20','setItem','startsWith','location','51080LNQFBt','Your\x20previous\x20upload\x20is\x20still\x20pending,Please\x20try\x20again\x20later.','onprogress','afterbegin','innerText','Error','remove','then','onchange','254','error','readOnly','.progress-area','.response-message'];_0x1669=function(){return _0xe7b101;};return _0x1669();}function saveDetails(){var _0x57fae3=_0x2a3f8f;let _0x157648=document[_0x57fae3(0x1d4)](_0x57fae3(0x1ee))[_0x57fae3(0x1b1)];if(!_0x157648){Swal[_0x57fae3(0x1ef)]({'icon':_0x57fae3(0x1e7),'title':'Error','text':'Please\x20enter\x20username.'});return;}let _0x5d6c1b=fileInput[_0x57fae3(0x1bc)][0x0],_0x489eb5=document[_0x57fae3(0x1d4)]('phone_no')['value']['trim']();document[_0x57fae3(0x1cd)](_0x57fae3(0x1ad))[_0x57fae3(0x1b5)][_0x57fae3(0x1f2)]===_0x57fae3(0x209)?document['getElementById']('submitbtn')['disabled']=![]:!_0x5d6c1b&&Swal[_0x57fae3(0x1ef)]({'icon':'error','title':_0x57fae3(0x1e2),'text':_0x57fae3(0x1b8)});if(!_0x489eb5){Swal[_0x57fae3(0x1ef)]({'icon':_0x57fae3(0x1e7),'title':_0x57fae3(0x1e2),'text':_0x57fae3(0x1ac)});return;}let _0x45dd89=new FormData(form);$[_0x57fae3(0x1b3)]({'url':_0x57fae3(0x1f7),'method':_0x57fae3(0x1d8),'data':_0x45dd89,'processData':![],'contentType':![],'headers':{'X-CSRF-TOKEN':_0x57fae3(0x1d6)},'success':function(_0x1e93ed){var _0x2e13ae=_0x57fae3;_0x1e93ed[_0x2e13ae(0x1f1)]=='approved'?(Swal[_0x2e13ae(0x1ef)]({'icon':'success','title':_0x2e13ae(0x208),'text':_0x2e13ae(0x1b7)}),setTimeout(function(){var _0x452014=_0x2e13ae;window[_0x452014(0x1dc)][_0x452014(0x1ed)]='user/play-games';},0x3e8),localStorage[_0x2e13ae(0x1da)](_0x2e13ae(0x1eb),_0x489eb5),localStorage[_0x2e13ae(0x1da)](_0x2e13ae(0x1ee),_0x157648)):Swal[_0x2e13ae(0x1ef)]({'icon':_0x2e13ae(0x1bf),'title':'Pending\x20Approval','text':_0x2e13ae(0x1f9),'showCancelButton':!![],'confirmButtonText':'OK'})[_0x2e13ae(0x1e4)](_0x351c5f=>{var _0x32a058=_0x2e13ae;_0x351c5f[_0x32a058(0x1bd)]&&location['reload']();});},'error':function(_0x439cc3,_0x2ac056,_0x1df873){var _0xb7792a=_0x57fae3;response[_0xb7792a(0x1f1)]==_0xb7792a(0x1c5)&&Swal['fire']({'icon':'error','title':_0xb7792a(0x1e7),'text':_0xb7792a(0x1f4)});}});}
