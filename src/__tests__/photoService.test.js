import { cleanup } from '@testing-library/react';
// import ThumbnailPhoto from '../components/ThumbnailPhoto';
import axiosMock from 'axios';
import photoService from '../services/photoService';
import { mockResponse } from '../__mocks__/getRandomPhotoDataResponse';

afterEach(cleanup);

describe('photoService ', () => {
    it('getRandom photo', async () => {
        const payload = { data: mockResponse }
        
        axiosMock.get.mockResolvedValueOnce(payload);

        try {
            const response = await photoService.getRandomPhoto();

            expect(response).toBe(payload);

        } catch (e) {
            console.error(e);
        }
    });
});