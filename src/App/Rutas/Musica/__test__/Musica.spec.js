import React from 'react';
import { shallow } from 'enzyme';

import Musica from "../Musica";

describe(Musica.WrappedComponent, () => {
    describe("Render", () => {
        let wrapper;

        let albums = {
            "albums": [
                { "id": 1, "name": "Chip off the old block", "artist": "Blair", "cover": "/images/cover.jpg" },
                { "id": 2, "name": "Battle grounds", "artist": "Florian", "cover": "/images/cover.jpg" }
            ]
        };

        let props = {
            albums: albums,
            getAlbums: () => albums
        };

        beforeEach(() => {
            wrapper = shallow(<Musica.WrappedComponent {...props} />)
        });
        

        it('check if view is rendered', () => {
            expect(wrapper.is('#albumsList')).toBeTruthy();      
            expect(wrapper.find('#albumsList')).toMatchSelector('ul');      
            expect(wrapper.find('#albumsList li').length).toBe(2);

        });
    });
});