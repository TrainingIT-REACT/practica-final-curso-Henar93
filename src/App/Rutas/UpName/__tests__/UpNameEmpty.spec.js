import React from 'react';
import { shallow } from 'enzyme';

import UpName from "../UpName";

describe(UpName.WrappedComponent, () => {
    describe("Render", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<UpName.WrappedComponent />)
        });
        
        it('', () => {
            expect(wrapper.is('section')).toBeTruthy();
            expect(wrapper.find('#sayHello').text()).toBe("Regístrate");
        });


    });
});