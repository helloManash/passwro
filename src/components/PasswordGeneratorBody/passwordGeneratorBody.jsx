import { generatePassword } from "../../lib/password";
import "./moduleBody.css";

export default function PasswordGeneratorBody({newSubmit}) {
    const submit = (e)=>{
        e.preventDefault();
        let formData = {};
        new FormData(e.currentTarget).forEach((value,key)=>{
            formData[key] = value;
        })

        let generatedPassword = generatePassword(formData);
        newSubmit(generatedPassword);
    }
  return (
    <form onSubmit={submit} className="root3">
      <div className="grid_container">
        <div className="grid_item">
          Size
          <select name="size" defaultValue={8}>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
          </select>
        </div>
        <div className="grid_item">
          Uppercase
          <input name="uppercase" type="checkbox" defaultChecked />
        </div>
        <div className="grid_item">
          Numbers
          <input name="number" type="checkbox" defaultChecked />
        </div>
        <div className="grid_item">
          Character
          <input name="special" type="checkbox" defaultChecked />
        </div>
      </div>
      <div className="btn_container">
        <button className="btn_generate">GENERATE</button>
      </div>
    </form>
  );
}
