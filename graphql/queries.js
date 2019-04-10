
export const getChannel = `query GetChannel($id: ID!) {
  getChannel(id: $id) {
    id
    name
    createdBy
    CreatedDate
  }
}
`;
export const listChannels = `query ListChannels(
  $filter: TableChannelFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdBy
      CreatedDate
    }
    nextToken
  }
}
`;
export const getLinks = `query GetLinks($id: ID!) {
  getLinks(id: $id) {
    id
    url
    author
    date
    description
    image
    logo
    publisher
    title
    createdAt
    createdBy
  }
}
`;
export const listLinks = `query ListLinks(
  $filter: TableLinksFilterInput
  $limit: Int
  $nextToken: String
) {
  listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      author
      date
      description
      image
      logo
      publisher
      title
      createdAt
      createdBy
    }
    nextToken
  }
}
`;
export const getChannelCategory = `query GetChannelCategory($id: ID!) {
  getChannelCategory(id: $id) {
    id
    name
    createdBy
    createdAt
  }
}
`;
export const listChannelCategories = `query ListChannelCategories(
  $filter: TableChannelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannelCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdBy
      createdAt
    }
    nextToken
  }
}
`;
export const getUserChannel = `query GetUserChannel($id: ID!) {
  getUserChannel(id: $id) {
    id
    name
    category {
      id
      name
      createdBy
      createdAt
    }
    createdBy
    createdAt
  }
}
`;
export const listUserChannels = `query ListUserChannels(
  $filter: TableUserChannelFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      category {
        id
        name
        createdBy
        createdAt
      }
      createdBy
      createdAt
    }
    nextToken
  }
}
`;
export const getChannelLink = `query GetChannelLink($id: ID!) {
  getChannelLink(id: $id) {
    id
    channel {
      id
      name
      category {
        id
        name
        createdBy
        createdAt
      }
      createdBy
      createdAt
    }
    link {
      id
      url
      author
      date
      description
      image
      logo
      publisher
      title
      createdAt
      createdBy
    }
    createdBy
    createdAt
  }
}
`;
export const listChannelLinks = `query ListChannelLinks(
  $filter: TableChannelLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannelLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      channel {
        id
        name
        createdBy
        createdAt
      }
      link {
        id
        url
        author
        date
        description
        image
        logo
        publisher
        title
        createdAt
        createdBy
      }
      createdBy
      createdAt
    }
    nextToken
  }
}
`;
