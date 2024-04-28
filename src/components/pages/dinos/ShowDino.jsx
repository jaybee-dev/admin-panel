import { useTranslation } from 'react-i18next';

/**
 * @param {string} name
 * @param {string} category
 * @param {number} price
 * @param {number} neutedPrice
 */
export default function ShowDino(props) {
  const { t } = useTranslation();

  return (
    <div className="text-center">
        <ul className="list-none">
          <li className=''>Base price breedable: <input type="number" value={props.price}/></li>
          <li className=''>Base price neuted: <input type="number" value={props.neutedPrice}/></li>
          <li className=''>Stat 1 : <select name="stat1">
            <option selected value={props.stat1}>{props.stat1}</option>
            <option value={props.stat2}>{props.stat2}</option>
            <option value={props.stat3}>{props.stat3}</option>
            <option value={props.stat4}>{props.stat4}</option>
            </select></li>
          <li className=''>Stat 2 : {props.stat2}</li>
          <li className=''>Stat 3 : {props.stat3}</li>
          <li className=''>Stat 4 : {props.stat4}</li>

        </ul> 
      
    </div>
  );
}
