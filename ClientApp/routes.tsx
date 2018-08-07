import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { AMS } from './components/AMS';
import { Isf } from './components/Isf';
import { InBond } from './components/InBond';
import { CMSQ } from './components/CMSQ';
import { OceanImport } from './components/OceanImport';
import { OceanExport } from './components/OceanExport';
import { ABI } from './components/ABI';
import { AirImport } from './components/AirImport';
import { AirExport } from './components/AirExport';
import { Dispatch } from './components/Dispatch';
import { Accounting } from './components/Accounting';
import { Profiles } from './components/Profiles';
import { References } from './components/References';
import { Reports } from './components/Reports';
import { Administration } from './components/Administration';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/ams' component={AMS} />
    <Route path='/isf' component={Isf} />
    <Route path='/inbond' component={InBond} />
    <Route path='/cmsq' component={CMSQ} />
    <Route path='/oceanimport' component={OceanImport} />
    <Route path='/oceanexport' component={OceanExport} />
    <Route path='/abi' component={ABI} />
    <Route path='/airimport' component={AirImport} />
    <Route path='/airexport' component={AirExport} />
    <Route path='/dispatch' component={Dispatch} />
    <Route path='/accounting' component={Accounting} />
    <Route path='/profiles' component={Profiles} />
    <Route path='/references' component={References} />
    <Route path='/reports' component={Reports} />
    <Route path='/administration' component={Administration} />
    
/
</Layout>;
