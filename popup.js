// console.log("DOMContentLoaded event");
//     var checkPageButton = document.getElementById('clickIt');
//     checkPageButton.addEventListener('click', function() {
//       console.log("in click action setpop page");
//       chrome.extension.getBackgroundPage().setToken("token");
      
//       window.close();
//     }, false);

    let form = document.getElementById('tkform');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const value = e.target.children.tokn.value;
        if(value && value.length>2){
          chrome.extension.getBackgroundPage().setToken(value);
          window.close();
          document.getElementById('err').style.display = "none";
        } else {
          document.getElementById('err').style.display = "block";
        }
      
        
    },false)