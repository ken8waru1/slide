export const fetchSubscriptions = () => (
  $.ajax({
    method: 'GET', 
    url: '/api/subscriptions/'
  })

);

export const fetchSubscription = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/subscriptions/${id}`
  })
)

export const postSubscription = (subscription) => (
  $.ajax({
    method: 'POST', 
    url: `/api/subscriptions/`,
    data: { subscription: subscription }
  })
);

export const deleteSubscription = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/subscriptions/${id}`
  })
);