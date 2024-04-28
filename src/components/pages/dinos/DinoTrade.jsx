import { useState } from "react";
import { useTranslation } from "react-i18next";

import Pannel from "../../Pannel.jsx";
import Select from "../../forms/Select.jsx";
import Form from "../../forms/Form.jsx";
import ShowDino from "./ShowDino.jsx";

import { DINOS } from "../../../datas/DINOS.js";

//import {calcPrice} from "./functions/calcPrice.js";

export default function DinoTrade() {
  const { t } = useTranslation()

  const [activeName, setActiveName] = useState("");

  return (
    <div>
      <div>
        <Select
          data={DINOS}
          selectName={t('choose_dino')}
          activeName={activeName}
          onChange={(e) => {
            setActiveName(e.target.value);
          }}
        />
        {DINOS.map((dino) =>
          activeName === dino.name ? (
            <div key={dino.id}>
              {dino.neutedPrice ? 
               <div>
                <ShowDino
                  price={dino.price}
                  neutedPrice={dino.neutedPrice} 
                  stat1={dino.nameStat1}        
                  stat2={dino.nameStat2}
                  stat3={dino.nameStat3}
                  stat4={dino.nameStat4}
                />             
               </div> : 
               <div className="text-center"><span>{t('unique_price')}: {dino.price}</span></div>
              }
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
