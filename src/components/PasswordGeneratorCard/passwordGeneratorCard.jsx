import { useState } from "react";
import PasswordGeneratorBody from "../PasswordGeneratorBody/passwordGeneratorBody";
import PasswordGeneratorFooter from "../PasswordGeneratorFooter/passwordGeneratorFooter";
import PasswordGeneratorHeader from "../PasswordGeneratorHead/passwordGeneratorHead";
import "./moduleCard.css";
export default function PasswordGeneratorCard(){

    const [password, setPassword] = useState("");
    return <div className="root1">
        <div className="main">
        <PasswordGeneratorHeader/>
        <PasswordGeneratorBody newSubmit={setPassword}/>
        </div>
        <PasswordGeneratorFooter password={password}/>
    </div>
}