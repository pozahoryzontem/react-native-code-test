class UrlBuilder {
  baseUrl: string;

  url: string;

  firstParam: boolean = true;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.url = baseUrl;
  }

  users() {
    this.url += '/users';
    return this;
  }

  page(page) {
    this.url += `${this.getParamMark()}page=${page}`;
    return this;
  }

  perPageLimit(limit) {
    this.url += `${this.getParamMark()}per_page=${limit}`;
    return this;
  }

  build() {
    const ret = this.url;
    this.reset();
    return ret;
  }

  getParamMark() {
    if (this.firstParam) {
      this.firstParam = false;
      return '?';
    }
    return '&';
  }

  reset() {
    this.url = this.baseUrl;
    this.firstParam = true;
  }
}

export default UrlBuilder;
