import React from 'react';
//import { Route } from 'react-router-dom';

import  CollectionsOverview from '../../components/collections-overview/collections-overview.component';
//import CollectionPage from '../collection/collection.component';

const ShopPage = ({ collections }) => (
            <div className='shop-page'>
     <CollectionsOverview />
     </div>
     );
 
export default ShopPage;
