import UrlBuilder from '../../src/helpers/urlBuilder';

describe('UrlBuilder', () => {
  it('UrlBuilder returns users url', () => {
    const url = new UrlBuilder('https://graph.microsoft.com').users().build();
    expect(url).toEqual('https://graph.microsoft.com/users');
  });

  it('UrlBuilder returns users url twice, builder should be stateless', () => {
    const builder = new UrlBuilder('https://graph.microsoft.com');
    const url = builder
      .users()
      .build();
    const url2 = builder
      .users()
      .build();
    expect(url).toEqual(url2);
  });
  it('UrlBuilder returns users url with query parameters', () => {
    const url = new UrlBuilder('https://graph.microsoft.com').users().page(2).perPageLimit(3)
      .build();
    expect(url).toEqual('https://graph.microsoft.com/users?page=2&per_page=3');
  });
});
