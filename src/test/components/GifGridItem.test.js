import React from 'react';
import { shallow } from "enzyme"; 
import '@testing-library/jest-dom';
import { GifGridItem } from "../../components/GifGridItem";

describe ( 'Pruebas en <GifExpertApp />' , ()=>{
  let wrapper = shallow( <GifGridItem/> );
    beforeEach(()=>{
    wrapper = shallow( <GifGridItem/> );
  });

  test('Debe mostrar <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  
  });

});