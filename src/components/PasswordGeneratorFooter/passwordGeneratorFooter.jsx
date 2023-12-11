import "./moduleFooter.css";

import CopyPasteIcon from "../../assets/copy-paste.svg";
export default function PasswordGeneratorFooter({password}){
    function saveInClipboard() {
        navigator.clipboard.writeText(password);
      }
    return <div onClick={saveInClipboard}className="root">
        <div>
         {password}
        </div>
        <img className="icon" src={CopyPasteIcon} alt="to show copy icon"/>
    </div>
}