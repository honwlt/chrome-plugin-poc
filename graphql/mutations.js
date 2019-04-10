
export const createChannel = `mutation CreateChannel($input: CreateChannelInput!) {
  createChannel(input: $input) {
    id
    name
    createdBy
    CreatedDate
  }
}
`;
export const updateChannel = `mutation UpdateChannel($input: UpdateChannelInput!) {
  updateChannel(input: $input) {
    id
    name
    createdBy
    CreatedDate
  }
}
`;
export const deleteChannel = `mutation DeleteChannel($input: DeleteChannelInput!) {
  deleteChannel(input: $input) {
    id
    name
    createdBy
    CreatedDate
  }
}
`;
export const createLinks = `mutation CreateLinks($input: CreateLinksInput!) {
  createLinks(input: $input) {
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
export const updateLinks = `mutation UpdateLinks($input: UpdateLinksInput!) {
  updateLinks(input: $input) {
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
export const deleteLinks = `mutation DeleteLinks($input: DeleteLinksInput!) {
  deleteLinks(input: $input) {
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
export const createChannelCategory = `mutation CreateChannelCategory($input: CreateChannelCategoryInput!) {
  createChannelCategory(input: $input) {
    id
    name
    createdBy
    createdAt
  }
}
`;
export const updateChannelCategory = `mutation UpdateChannelCategory($input: UpdateChannelCategoryInput!) {
  updateChannelCategory(input: $input) {
    id
    name
    createdBy
    createdAt
  }
}
`;
export const deleteChannelCategory = `mutation DeleteChannelCategory($input: DeleteChannelCategoryInput!) {
  deleteChannelCategory(input: $input) {
    id
    name
    createdBy
    createdAt
  }
}
`;
export const createUserChannel = `mutation CreateUserChannel($input: CreateUserChannelInput!) {
  createUserChannel(input: $input) {
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
export const updateUserChannel = `mutation UpdateUserChannel($input: UpdateUserChannelInput!) {
  updateUserChannel(input: $input) {
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
export const deleteUserChannel = `mutation DeleteUserChannel($input: DeleteUserChannelInput!) {
  deleteUserChannel(input: $input) {
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
export const createChannelLink = `mutation CreateChannelLink($input: CreateChannelLinkInput!) {
  createChannelLink(input: $input) {
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
export const updateChannelLink = `mutation UpdateChannelLink($input: UpdateChannelLinkInput!) {
  updateChannelLink(input: $input) {
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
export const deleteChannelLink = `mutation DeleteChannelLink($input: DeleteChannelLinkInput!) {
  deleteChannelLink(input: $input) {
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
