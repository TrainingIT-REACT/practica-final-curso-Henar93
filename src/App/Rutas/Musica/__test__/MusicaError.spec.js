import React from 'react';
import { shallow } from 'enzyme';

import Musica from "../Musica";

describe(Musica.WrappedComponent, () => {
    describe("Render", () => {
        let wrapper;

        let albums = {
            isLoading: false,
            error: true,
            albums: undefined
        };

        let props = {
            albums: albums,
            getAlbums: () => albums
        };

        beforeEach(() => {
            wrapper = shallow(<Musica.WrappedComponent {...props} />)
        });
        

        it('check if view show error message', () => {
            expect(wrapper.is('p')).toBeTruthy();      
            expect(wrapper.find('p').text()).toBe("Error al obtener los datos");
        });
    });
});