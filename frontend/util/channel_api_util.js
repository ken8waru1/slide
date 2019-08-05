export const postChannel = (channel) => (
  $.ajax({
    method: 'POST',
    url: '/api/channels/',
    data: { channel: channel }
  })
)

export const patchChannel = (channel) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: { channel: channel }
  })
)

export const fetchChannels  = () => (
  $.ajax({
    method: 'GET',
    url: '/api/channels/',
  })
)

export const fetchChannel = (id) => (
  $.ajax({
    method: 'GET', 
    url: `/api/channels/${id}`
  })
)

export const deleteChannel  = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/channels/${id}`,
  })
)

export const fetchMessages = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}/messages`
  });
};


export const fetchUsers = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}/users`
  })
}

