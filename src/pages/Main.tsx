

import React, { FC } from 'react';
import '../styles/main.css'

import { MyMap } from '../components/Map/MyMap';


// import { AddressSuggestions, DaDataSuggestion, DaDataAddress } from 'react-dadata';
// import 'react-dadata/dist/react-dadata.css';

const Main: FC = () => {
   // const [value, setValue] = useState<DaDataSuggestion<DaDataAddress> | undefined>();


   return (

      // <Layout>
      <div >

         <MyMap />


         {/* <AddressSuggestions token="ed9d21254804ce388d2edac67bd0867c7dc2c034" value={value} onChange={setValue} containerClassName="containerClassName" /> */}
      </div>
      // </Layout >


   )

};

export default Main;






