import mockAxios from 'axios';
import { get, post } from '../../src/services/httpService';

jest.mock('axios');

describe('HttpService', () => {
  describe('GET', () => {
    it('Should GET return response', async () => {
      const testData = {
        data: {
          page: 1,
          per_page: 6,
          total: 1,
          total_pages: 1,
          data: [{
            id: 1, email: 'test1@mail.com', first_name: 'testFristName1', last_name: 'testLastName1', avatar: 'testAvatar1.jpg',
          }],
        },
      };
      mockAxios.get.mockImplementationOnce(() => Promise.resolve(testData));
      const result = await get('testUrl');
      expect(result).toEqual(testData);
    });

    it('Should GET returns error', async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('testError')));
      let errorResult = {};
      try {
        await get('testUrl');
      } catch (error) {
        errorResult = error;
      }

      expect(errorResult).toEqual(new Error('testError'));
    });
  });

  describe('POST', () => {
    it('Should POST return response', async () => {
      mockAxios.post.mockImplementationOnce(() => Promise.resolve({}));
      const result = await post('testUrl', {});
      expect(result).toEqual({});
    });

    it('Should POST returns error', async () => {
      mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('testError')));
      let errorResult = {};
      try {
        await post('testUrl', {});
      } catch (error) {
        errorResult = error;
      }

      expect(errorResult).toEqual(new Error('testError'));
    });
  });
});
