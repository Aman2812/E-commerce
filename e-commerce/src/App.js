import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addProductsData } from './redux/action/action';

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addProductsData());
  }, [])

  const storeData = useSelector((state) => state.root.reducerData);
  const {products} = storeData;

  return (
    <>
    <h2>Hello E-commerce....!!</h2>
    {
      products.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.username}</p>
          </div>
        )
      })
    }
    </>
  );
}

export default App;







