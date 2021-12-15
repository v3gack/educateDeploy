import { HomePage } from "./components/HomePage";
import { LecSuma } from "./pages/LecSuma";
import { LecResta } from "./pages/LecResta";
import { LecMultiplicacion } from "./pages/LecMultiplicacion";
import { LecDivision } from "./pages/LecDivision";
import {NivelSemillaSumaV1} from "./videos/VIDEOSUMA/NivelSemillaSumaV1";
import stylesApp from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import suma from "./images/EducateLOGO.png";
import { Inicio } from "./components/Inicio";
import { LecSNB } from "./pages/LecSNB";
import { LecSNP } from "./pages/LecSNP";
import { LecSNA } from "./pages/LecSNA";
import {NivelSSV2} from "./videos/VIDEOSUMA/NivelSSV2"
import {NivelSSV3} from "./videos/VIDEOSUMA/NivelSSV3"
import { NBSV1 } from "./videos/VIDEOSUMA/NBSV1";
import { NBSV3 } from "./videos/VIDEOSUMA/NBSV3";
import { NBSV2 } from "./videos/VIDEOSUMA/NBSV2";
import { NPSV1 } from "./videos/VIDEOSUMA/NPSV1";
import { NPSV2 } from "./videos/VIDEOSUMA/NPSV2";
import { NPSV3 } from "./videos/VIDEOSUMA/NPSV3";
import { NASV1 } from "./videos/VIDEOSUMA/NASV1";
import { NASV2 } from "./videos/VIDEOSUMA/NASV2";
import { NASV3 } from "./videos/VIDEOSUMA/NASV3";
import { LecRNB } from "./pages/LecRNB";
import { LecRNP } from "./pages/LecRNP";
import { LecRNA } from "./pages/LecRNA";
import { NSRV1 } from "./videos/VIDEORESTA/NSRV1";
import { NSRV2 } from "./videos/VIDEORESTA/NSRV2";
import { NSRV3 } from "./videos/VIDEORESTA/NSRV3";
import { NBRV1 } from "./videos/VIDEORESTA/NBRV1";
import { NBRV2 } from "./videos/VIDEORESTA/NBRV2";
import { NBRV3 } from "./videos/VIDEORESTA/NBRV3";
import { NPRV1 } from "./videos/VIDEORESTA/NPRV1";
import { NPRV2 } from "./videos/VIDEORESTA/NPRV2";
import { NPRV3 } from "./videos/VIDEORESTA/NPRV3";
import { NARV1 } from "./videos/VIDEORESTA/NARV1";
import { NARV2 } from "./videos/VIDEORESTA/NARV2";
import { NARV3 } from "./videos/VIDEORESTA/NARV3";
import { LecMNB } from "./pages/LecMNB";
import { LecMNP } from "./pages/LecMNP";
import { LecMNA } from "./pages/LecMNA";
import { NSMV1 } from "./videos/VIDEOMULT/NSMV1";
import { NSMV2 } from "./videos/VIDEOMULT/NSMV2";
import { NSMV3 } from "./videos/VIDEOMULT/NSMV3";
import { NBMV1 } from "./videos/VIDEOMULT/NBMV1";
import { NBMV2 } from "./videos/VIDEOMULT/NBMV2";
import { NBMV3 } from "./videos/VIDEOMULT/NBMV3";
import { NPMV1 } from "./videos/VIDEOMULT/NPMV1";
import { NPMV2 } from "./videos/VIDEOMULT/NPMV2";
import { NPMV3 } from "./videos/VIDEOMULT/NPMV3";
import { NAMV1 } from "./videos/VIDEOMULT/NAMV1";
import { NAMV2 } from "./videos/VIDEOMULT/NAMV2";
import { NAMV3 } from "./videos/VIDEOMULT/NAMV3";
import { LecDNB } from "./pages/LecDNB";
import { LecDNP } from "./pages/LecDNP";
import { LecDNA } from "./pages/LecDNA";
import { NSDV1 } from "./videos/VIDEODIVIS/NSDV1";
import { NSDV2 } from "./videos/VIDEODIVIS/NSDV2";
import { NSDV3 } from "./videos/VIDEODIVIS/NSDV3";
import { NBDV1 } from "./videos/VIDEODIVIS/NBDV1";
import { NBDV2 } from "./videos/VIDEODIVIS/NBDV2";
import { NBDV3 } from "./videos/VIDEODIVIS/NBDV3";
import { NPDV1 } from "./videos/VIDEODIVIS/NPDV1";
import { NPDV2 } from "./videos/VIDEODIVIS/NPDV2";
import { NPDV3 } from "./videos/VIDEODIVIS/NPDV3";
import { NADV1 } from "./videos/VIDEODIVIS/NADV1";
import { NADV2 } from "./videos/VIDEODIVIS/NADV2";
import { NADV3 } from "./videos/VIDEODIVIS/NADV3";

import { JuegoSumaS} from "./videos/VIDEOSUMA/JuegoSumaS";
import { JuegoSumaB } from "./videos/VIDEOSUMA/JuegoSumaB";
import { JuegoSumaP } from "./videos/VIDEOSUMA/JuegoSumaP";
import { JuegoSumaA } from "./videos/VIDEOSUMA/JuegoSumaA";

import { JuegoRestaS } from "./videos/VIDEORESTA/JuegoRestaS";
import { JuegoRestaB } from "./videos/VIDEORESTA/JuegoRestaB";
import { JuegoRestaP } from "./videos/VIDEORESTA/JuegoRestaP";
import { JuegoRestaA } from "./videos/VIDEORESTA/JuegoRestaA";

import { JuegoMultS } from "./videos/VIDEOMULT/JuegoMultS";
import { JuegoMultB } from "./videos/VIDEOMULT/JuegoMultB";
import { JuegoMultP } from "./videos/VIDEOMULT/JuegoMultP";
import { JuegoMultA } from "./videos/VIDEOMULT/JuegoMultA";

import { JuegoDivS } from "./videos/VIDEODIVIS/JuegoDivS";
import { JuegoDivB } from "./videos/VIDEODIVIS/JuegoDivB";
import { JuegoDivP } from "./videos/VIDEODIVIS/JuegoDivP";
import { JuegoDivA } from "./videos/VIDEODIVIS/JuegoDivA";

import {PDS} from "./practicas/PDS";
import {PDB} from "./practicas/PDB";
import {PDP} from "./practicas/PDP";
import {PDA} from "./practicas/PDA";

import {PSS} from "./practicas/PSS";
import {PSB} from "./practicas/PSB";
import {PSP} from "./practicas/PSP";
import {PSA} from "./practicas/PSA";

import {PRS} from "./practicas/PRS";
import {PRB} from "./practicas/PRB";
import {PRP} from "./practicas/PRP";
import {PRA} from "./practicas/PRA";

import {PMS} from "./practicas/PMS";
import {PMB} from "./practicas/PMB";
import {PMP} from "./practicas/PMP";
import {PMA} from "./practicas/PMA";
/* Login */
import {Login} from "./login/Login";
import  Menu  from "./login/Menu";

import Material from "./components/Material";
import CrearMaterial  from "./components/CrearMaterial";
import CreateNote from "./components/CrearMaterial";
import Notes from "./components/ListaMat";

export function App() {
  return (
    <Router>
      <header className = {stylesApp.test}>
        <Link to ="/">
        <img className={stylesApp.logo} src={suma} alt="Suma" />
        </Link>
      </header>
      <main>
        <Switch>
        <Route path="/NivelSemillaSumaV1">
            <NivelSemillaSumaV1/>
          </Route>
          <Route path="/suma">
            <LecSuma/>
          </Route>
          <Route path="/resta">
            <LecResta/>
          </Route>
          <Route path="/multiplicacion">
            <LecMultiplicacion/>
          </Route>
          <Route path="/division">
            <LecDivision/>
          </Route>
          <Route path ="/homepage">
            <HomePage/>
          </Route>
          <Route path ="/LecSNB">
            <LecSNB/>
          </Route>
          <Route path ="/LecSNP">
            <LecSNP/>
          </Route>
          <Route path ="/LecSNA">
            <LecSNA/>
          </Route>
          <Route path ="/NivelSSV2">
            <NivelSSV2/>
          </Route>
          <Route path ="/NivelSSV3">
            <NivelSSV3/>
          </Route>
          <Route path ="/NBSV1">
            <NBSV1/>
          </Route>
          <Route path ="/NBSV2">
            <NBSV2/>
          </Route>
          <Route path ="/NBSV3">
            <NBSV3/>
          </Route>
          <Route path ="/NPSV1">
            <NPSV1/>
          </Route>
          <Route path ="/NPSV2">
            <NPSV2/>
          </Route>
          <Route path ="/NPSV3">
            <NPSV3/>
          </Route>
          <Route path ="/NASV1">
            <NASV1/>
          </Route>
          <Route path ="/NASV2">
            <NASV2/>
          </Route>
          <Route path ="/NASV3">
            <NASV3/>
          </Route>
          <Route path ="/LecRNB">
            <LecRNB/>
          </Route>
          <Route path ="/LecRNP">
            <LecRNP/>
          </Route>
          <Route path ="/LecRNA">
            <LecRNA/>
          </Route>
          <Route path ="/NSRV1">
            <NSRV1/>
          </Route>
          <Route path ="/NSRV2">
            <NSRV2/>
          </Route>
          <Route path ="/NSRV3">
            <NSRV3/>
          </Route>
          <Route path ="/NBRV1">
            <NBRV1/>
          </Route>
          <Route path ="/NBRV2">
            <NBRV2/>
          </Route>
          <Route path ="/NBRV3">
            <NBRV3/>
          </Route>
          <Route path ="/NPRV1">
            <NPRV1/>
          </Route>
          <Route path ="/NPRV2">
            <NPRV2/>
          </Route>
          <Route path ="/NPRV3">
            <NPRV3/>
          </Route>
          <Route path ="/NARV1">
            <NARV1/>
          </Route>
          <Route path ="/NARV2">
            <NARV2/>
          </Route>
          <Route path ="/NARV3">
            <NARV3/>
          </Route>
          <Route path ="/LecMNB">
            <LecMNB/>
          </Route>
          <Route path ="/LecMNP">
            <LecMNP/>
          </Route>
          <Route path ="/LecMNA">
            <LecMNA/>
          </Route>
          <Route path = "/NSMV1">
            <NSMV1/>
          </Route>
          <Route path = "/NSMV2">
            <NSMV2/>
          </Route>
          <Route path = "/NSMV3">
            <NSMV3/>
          </Route>
          <Route path = "/NBMV1">
            <NBMV1/>
          </Route>
          <Route path = "/NBMV2">
            <NBMV2/>
          </Route>
          <Route path = "/NBMV3">
            <NBMV3/>
          </Route>
          <Route path = "/NPMV1">
            <NPMV1/>
          </Route>
          <Route path = "/NPMV2">
            <NPMV2/>
          </Route>
          <Route path = "/NPMV3">
            <NPMV3/>
          </Route>
          <Route path = "/NAMV1">
            <NAMV1/>
          </Route>
          <Route path = "/NAMV2">
            <NAMV2/>
          </Route>
          <Route path = "/NAMV3">
            <NAMV3/>
          </Route>
          <Route path ="/LecDNB">
            <LecDNB/>
          </Route>
          <Route path ="/LecDNP">
            <LecDNP/>
          </Route>
          <Route path ="/LecDNA">
            <LecDNA/>
          </Route>
          <Route path = "/NSDV1">
            <NSDV1/>
          </Route>
          <Route path = "/NSDV2">
            <NSDV2/>
          </Route>
          <Route path = "/NSDV3">
            <NSDV3/>
          </Route>
          <Route path = "/NBDV1">
            <NBDV1/>
          </Route>
          <Route path = "/NBDV2">
            <NBDV2/>
          </Route>
          <Route path = "/NBDV3">
            <NBDV3/>
          </Route>
          <Route path = "/NPDV1">
            <NPDV1/>
          </Route>
          <Route path = "/NPDV2">
            <NPDV2/>
          </Route>
          <Route path = "/NPDV3">
            <NPDV3/>
          </Route>
          <Route path = "/NADV1">
            <NADV1/>
          </Route>
          <Route path = "/NADV2">
            <NADV2/>
          </Route>
          <Route path = "/NADV3">
            <NADV3/>
          </Route>
          <Route path = "/JuegoSumaS">
            <JuegoSumaS/>
          </Route>
          <Route path = "/JuegoSumaB">
            <JuegoSumaB/>
          </Route>
          <Route path = "/JuegoSumaP">
            <JuegoSumaP/>
          </Route>
          <Route path = "/JuegoSumaA">
            <JuegoSumaA/>
          </Route>
          <Route path = "/JuegoRestaS">
            <JuegoRestaS/>
          </Route>
          <Route path = "/JuegoRestaB">
            <JuegoRestaB/>
          </Route>
          <Route path = "/JuegoRestaP">
            <JuegoRestaP/>
          </Route>
          <Route path = "/JuegoRestaA">
            <JuegoRestaA/>
          </Route>
          <Route path = "/JuegoMultS">
            <JuegoMultS/>
          </Route>
          <Route path = "/JuegoMultB">
            <JuegoMultB/>
          </Route>
          <Route path = "/JuegoMultP">
            <JuegoMultP/>
          </Route>
          <Route path = "/JuegoMultA">
            <JuegoMultA/>
          </Route>
          <Route path = "/JuegoDivS">
            <JuegoDivS/>
          </Route>
          <Route path = "/JuegoDivB">
            <JuegoDivB/>
          </Route>
          <Route path = "/JuegoDivP">
            <JuegoDivP/>
          </Route>
          <Route path = "/JuegoDivA">
            <JuegoDivA/>
          </Route>

          <Route path = "/PDS">
            <PDS/>
          </Route>
          <Route path = "/PDB">
            <PDB/>
          </Route>
          <Route path = "/PDA">
            <PDA/>
          </Route>
          <Route path = "/PDP">
            <PDP/>
          </Route>

          <Route path = "/PSS">
            <PSS/>
          </Route>
          <Route path = "/PSB">
            <PSB/>
          </Route>
          <Route path = "/PSA">
            <PSA/>
          </Route>
          <Route path = "/PSP">
            <PSP/>
          </Route>

          <Route path = "/PRS">
            <PRS/>
          </Route>
          <Route path = "/PRB">
            <PRB/>
          </Route>
          <Route path = "/PRA">
            <PRA/>
          </Route>
          <Route path = "/PRP">
            <PRP/>
          </Route>

          <Route path = "/PMS">
            <PMS/>
          </Route>
          <Route path = "/PMB">
            <PMB/>
          </Route>
          <Route path = "/PMA">
            <PMA/>
          </Route>
          <Route path = "/PMP">
            <PMP/>
          </Route>

          {/* Login */}
          <Route path = "/Login">
            <Login/>
          </Route>

          <Route path = "/Menu">
            <Menu/>
          </Route>
          <Route path= "/create">
            <CreateNote/>
          </Route>
          <Route path="/notes">
            <Notes/>
          </Route>

          


          <Route path="/">
            <Inicio/>
          </Route>
        </Switch>
      </main>
      
    </Router>
  );
}
