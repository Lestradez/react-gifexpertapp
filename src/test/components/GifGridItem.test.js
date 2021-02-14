import  GifExpertApp  from "../../GifExpertApp";
import React from 'react';
import { shallow } from "enzyme"; 
import '@testing-library/jest-dom';

describe ( 'Pruebas en <GifExpertApp />' , ()=>{
  let wrapper = shallow( <GifExpertApp/> );
   beforeEach(()=>{
    wrapper = shallow( <GifExpertApp/> );
  });

  test('Debe mostrar <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  
  });

});