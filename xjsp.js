/*
香蕉视频全功能破解和去广告
圈X：
下载这个js到本地Script下面
再去复制一下内容到对应的配置
[rewrite_local]
# > 会员
https:\/\/.*\.*xinai99.com url request-header Cookie:.+ request-header Cookie: xxx_api_auth=6537366635666330646135623562356363613831306339383032336439633833
# > 去广告
https?:\/\/.+\/(ucp\/index|getGlobalData|.+\/reqplay\/) url script-response-body https://raw.githubusercontent.com/i-liulang/QuantumultX/main/xjsp.js
[MITM]
hostname = *.*apps.com
Surge4:
直接复制下面内容新建本地模块
[Header Rewrite]
https:\/\/.*\.*xinai99\.com header-replace Cookie xxx_api_auth=6537366635666330646135623562356363613831306339383032336439633833
[Script]
http-response https?:\/\/.+\/(ucp\/index|getGlobalData|.+\/reqplay\/) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/i-liulang/QuantumultX/main/xjsp.js
[MITM]
hostname = %APPEND% *.*xinai99.com
*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/ucp/index") != -1){
obj.data.uinfo.down_daily_remainders = "999";
obj.data.uinfo.play_daily_remainders = "999";
obj.data.uinfo.minivod_play_daily_remainders = "999";
obj.data.uinfo.minivod_down_daily_remainders = "999";
obj.data.user.mobi = "QQ群:1077223830";
}
if ($request.url.indexOf("/getGlobalData") != -1){
  delete obj.data.adgroups;
  delete obj.data.iOS_adgroups;
}
if ($request.url.indexOf("/reqplay/") != -1){
  obj.retcode = "0";
  if(obj.data.hasOwnProperty("httpurl_preview")){
  var playurl = obj.data["httpurl_preview"];
  obj.data["httpurl"] = playurl;
  };
}

$done({body: JSON.stringify(obj)});
