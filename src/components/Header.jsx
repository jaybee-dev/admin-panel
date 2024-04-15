//import LngSelector from "./widgets/LngSelector.jsx";
//import logo from "../assets/images/common/logo-inx.png"
//import Switch from "./forms/Switch.jsx";

/**
 *
 * @returns
 */
export default function Header() {
    return (
      <div className="grid grid-cols-10 max-md:h-10 justify-between bg-header items-center">
        <div className=" col-start-1 col-span-8">
          <h1 className="uppercase">ADMIN PANEL</h1>
          {/* <img src={logo} alt="logo"/> */}
        </div>
        <div className="col-start-10 col-end-11 justify-self-end" >
          
          <span>O</span>
          {/* <Switch
            isChecked={isDark}
            handleChange={handleChange}
          /> */}
        </div>
        <div className="col-start-11 col-end-12 justify-self-center">
          <span>O</span>
          {/* <LngSelector /> */}
        </div>
      </div>
  );
}