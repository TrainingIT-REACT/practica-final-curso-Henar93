import React from 'react';
import { shallow } from 'enzyme';

import UpName from "../UpName";

describe(UpName.WrappedComponent, () => {
    describe("Render", () => {
        let wrapper;

        let user = {
            "name": ""
        }

        beforeEach(() => {
            wrapper = shallow(<UpName.WrappedComponent user={user} />)
        });
        

        it('', () => {
            expect(wrapper.is('#UpName')).toBeTruthy();
         
        });
    });
});