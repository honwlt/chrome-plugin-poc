'use strict';
const URL = "http://localhost:3000/api/links";
//const URL = "http://ec2-13-233-106-244.ap-south-1.compute.amazonaws.com/api/links";
const posted = 'tick-green32.png';
const notposted = 'tick-gray32.png'
const progress='progress-32.png';
const unverified='unverified-32.png'

chrome.runtime.onInstalled.addListener(function() {
  console.log("EVENT:onInstalled");
  checkAuthAndSet();
  resetIcon();
});

function reqCallback(result){
  console.log("success response data:"+JSON.stringify(result))
  setSuccess()
}

function resError(result){
  console.log("error response data:"+JSON.stringify(result))
  setError()
}

function postLink(link){
  makeRequest({url:link});
  
}

function resetIcon(){
  setIcon(notposted);
}
function setSuccess(){
  setIcon(posted);
}

function setError(){
  setIcon(unverified);
}

function makeRequest(data){
  setIcon(progress)
  const xhr = new XMLHttpRequest();
  xhr.open('POST', URL,true);
  // xhr.addEventListener('load', function(e) {
  //   var result = xhr.responseText;
  //   callback(result);
  // });
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // JSON.parse does not evaluate the attacker's scripts.
      var resp = JSON.parse(xhr.responseText);
      if(xhr.status == 200){
        reqCallback(resp);
        chrome.storage.sync.set({auth: true});
      } else {
        resError(resp);
        //initStore();
      }
      checkAuthAndSet();
      
    }
  }
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  chrome.storage.sync.get(['token'], function(syncData) {
    if(syncData.token){
      xhr.setRequestHeader("X-Auth-Token", syncData.token);
      
      xhr.send(JSON.stringify(data));
    } else {
      initStore();
    }
  });

}


function checkAuthAndSet(){
  chrome.storage.sync.get(['auth','token'], function(data) {
    if(data && data.auth && data.token){
      console.log("Auth completed!");
      chrome.browserAction.setPopup({popup: ''});
    } else {
      console.log("Auth not completed!");
      initStore();
      chrome.browserAction.setPopup({popup: 'popup.html'});  
    }
  });
}

function initStore(){
  chrome.storage.sync.set({auth: false, token:undefined,cdate:new Date().toString(),udate:new Date().toString()}, function() {
    console.log('Install init done');
  });
}
function setIcon(icon){
  chrome.browserAction.setIcon({path: icon});
  
}

function setToken(token){
  console.log('token recieved...:'+token);
  chrome.browserAction.setPopup({popup: ''});
  chrome.storage.sync.set({token:token});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const url = tabs[0].url;
    postLink(url);
  });
  //postLink()
  
}

function updateIcon(tab) {
  //console.log('clicked!!! :'+tab.url);
  const currentURL = tab.url;
    console.log("currentURL:"+currentURL)
    if(currentURL.startsWith("chrome://")){
      console.log("ignoring chrome url...")
      return;
    } else {
      //console.log("new url..posting to server...")
      postLink(currentURL);
      //setIcon(true);
    }
};
function tabUpdated(tabId,  changeInfo,  tab){
  if(changeInfo.url){
    //console.log('tab URL changed! '+changeInfo.url);
    resetIcon();
  }
}
function newTabCreated(tab){
  console.log('EVENT:tab created! '+tab.url);
  checkAuthAndSet();
  resetIcon();
}
chrome.tabs.onCreated.addListener(newTabCreated);
chrome.tabs.onUpdated.addListener(tabUpdated)

chrome.browserAction.onClicked.addListener(updateIcon);
//updateIcon();
