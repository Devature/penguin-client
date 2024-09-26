interface SpringDataRestResponse<T> {
  _embedded: {
    works: T[];
  };
  _links: {
    self: {
      href: string;
    };
  };
}

export default SpringDataRestResponse;