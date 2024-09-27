interface SpringDataRestResponse<T, K extends string> {
  _embedded: {
    [key in K]: T[];
  };
  _links: {
    self: {
      href: string;
    };
  };
}

export default SpringDataRestResponse;