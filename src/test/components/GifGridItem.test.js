import React from 'react';
import { shallow } from "enzyme"; 
import '@testing-library/jest-dom';
import { GifGridItem } from "../../components/GifGridItem";

describe ( 'Pruebas en <GifExpertApp />' , ()=>{
  const title = 'Título';
  const url = 'http://localhost/unaurl.hml';

  let wrapper = shallow( <GifGridItem title = {title} url = {url}/> );
    beforeEach(()=>{
    wrapper = shallow( <GifGridItem title = {title} url = {url}/> );
  });

  test('Debe mostrar <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  
  });

});