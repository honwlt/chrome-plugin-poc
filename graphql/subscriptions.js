
export const onCreateChannel = `subscription OnCreateChannel(
  $id: ID
  $name: String
  $createdBy: String
  $CreatedDate: AWSDateTime
) {
  onCreateChannel(
    id: $id
    name: $name
    createdBy: $createdBy
    CreatedDate: $CreatedDate
  ) {
    id
    name
    createdBy
    CreatedDate
  }
}
`;
export const onUpdateChannel = `subscription OnUpdateChannel(
  $id: ID
  $name: String
  $createdBy: String
  $CreatedDate: AWSDateTime
) {
  onUpdateChannel(
    id: $id
    name: $name
    createdBy: $createdBy
    CreatedDate: $CreatedDate
  ) {
    id
    name
    createdBy
    CreatedDate
  }
}
`;
export const onDeleteChannel = `subscription OnDeleteChannel(
  $id: ID
  $name: String
  $createdBy: String
  $CreatedDate: AWSDateTime
) {
  onDeleteChannel(
    id: $id
    name: $name
    createdBy: $createdBy
    CreatedDate: $CreatedDate
  ) {
    id
    name
    createdBy
    CreatedDate
  }
}
`;
export const onCreateLinks = `subscription OnCreateLinks(
  $id: ID
  $url: String
  $author: String
  $date: AWSDateTime
  $description: String
) {
  onCreateLinks(
    id: $id
    url: $url
    author: $author
    date: $date
    description: $description
  ) {
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
export const onUpdateLinks = `subscription OnUpdateLinks(
  $id: ID
  $url: String
  $author: String
  $date: AWSDateTime
  $description: String
) {
  onUpdateLinks(
    id: $id
    url: $url
    author: $author
    date: $date
    description: $description
  ) {
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
export const onDeleteLinks = `subscription OnDeleteLinks(
  $id: ID
  $url: String
  $author: String
  $date: AWSDateTime
  $description: String
) {
  onDeleteLinks(
    id: $id
    url: $url
    author: $author
    date: $date
    description: $description
  ) {
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
export const onCreateChannelCategory = `subscription OnCreateChannelCategory(
  $id: ID
  $name: String
  $createdBy: String
  $createdAt: AWSDateTime
) {
  onCreateChannelCategory(
    id: $id
    name: $name
    createdBy: $createdBy
    createdAt: $createdAt
  ) {
    id
    name
    createdBy
    createdAt
  }
}
`;
export const onUpdateChannelCategory = `subscription OnUpdateChannelCategory(
  $id: ID
  $name: String
  $createdBy: String
  $createdAt: AWSDateTime
) {
  onUpdateChannelCategory(
    id: $id
    name: $name
    createdBy: $createdBy
    createdAt: $createdAt
  ) {
    id
    name
    createdBy
    createdAt
  }
}
`;
export const onDeleteChannelCategory = `subscription OnDeleteChannelCategory(
  $id: ID
  $name: String
  $createdBy: String
  $createdAt: AWSDateTime
) {
  onDeleteChannelCategory(
    id: $id
    name: $name
    createdBy: $createdBy
    createdAt: $createdAt
  ) {
    id
    name
    createdBy
    createdAt
  }
}
`;
export const onCreateUserChannel = `subscription OnCreateUserChannel(
  $id: ID
  $name: String
  $createdBy: String
  $createdAt: AWSDateTime
) {
  onCreateUserChannel(
    id: $id
    name: $name
    createdBy: $createdBy
    createdAt: $createdAt
  ) {
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
export const onUpdateUserChannel = `subscription OnUpdateUserChannel(
  $id: ID
  $name: String
  $createdBy: String
  $createdAt: AWSDateTime
) {
  onUpdateUserChannel(
    id: $id
    name: $name
    createdBy: $createdBy
    createdAt: $createdAt
  ) {
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
export const onDeleteUserChannel = `subscription OnDeleteUserChannel(
  $id: ID
  $name: String
  $createdBy: String
  $createdAt: AWSDateTime
) {
  onDeleteUserChannel(
    id: $id
    name: $name
    createdBy: $createdBy
    createdAt: $createdAt
  ) {
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
export const onCreateChannelLink = `subscription OnCreateChannelLink(
  $id: ID
  $createdBy: String
  $createdAt: AWSDateTime
) {
  onCreateChannelLink(id: $id, createdBy: $createdBy, createdAt: $createdAt) {
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
export const onUpdateChannelLink = `subscription OnUpdateChannelLink(
  $id: ID
  $createdBy: String
  $createdAt: AWSDateTime
) {
  onUpdateChannelLink(id: $id, createdBy: $createdBy, createdAt: $createdAt) {
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
export const onDeleteChannelLink = `subscription OnDeleteChannelLink(
  $id: ID
  $createdBy: String
  $createdAt: AWSDateTime
) {
  onDeleteChannelLink(id: $id, createdBy: $createdBy, createdAt: $createdAt) {
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
