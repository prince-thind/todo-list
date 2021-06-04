import DOM from "./DOM.js";
import UI from "./UI.js";

function init(){
    DOM.taskAdd.addEventListener("click",(e)=>{
        UI.toggleHide(DOM.taskInterface);
    });
    DOM.projectAdd.addEventListener("click",(e)=>{
        UI.toggleHide(DOM.projectInterface);
    });
   DOM.projectCancel.addEventListener("click",(e)=>{
       UI.toggleHide(DOM.projectInterface); 
   })

   DOM.taskCancel.addEventListener("click",(e)=>{
    UI.toggleHide(DOM.taskInterface);
})
}
export default init;