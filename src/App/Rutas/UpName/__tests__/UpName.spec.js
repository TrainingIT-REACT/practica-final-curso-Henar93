import React from 'react';
import { shallow } from 'enzyme';

import UpName from "../UpName";

describe(UpName.WrappedComponent, () => {
    describe("Render", () => {
        let wrapper;

        let user = {
            "name": "Henar"
        }

        beforeEach(() => {
            wrapper = shallow(<UpName.WrappedComponent  name={user.name} />)
        });
        
        it('', () => {
            expect(wrapper.is('section')).toBeTruthy();
            expect(wrapper.find('#sayHello').text()).toBe('Hola ' + user.name + ' !');
        });


    });
});