import React from 'react';
import { shallow } from 'enzyme';

import Canciones from "../Canciones";

describe(Canciones.WrappedComponent, () => {
    describe("Render", () => {
        let wrapper;

        let albums = {
            "albums": []
        }

        beforeEach(() => {
            wrapper = shallow(<Canciones.WrappedComponent albums={albums} />)
        });
        

        it('', () => {
            expect(wrapper.is(albums)).toBeTruthy();
         
        });
    });
});