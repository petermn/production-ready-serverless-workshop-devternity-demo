let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://nxg5gp9fth.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "restaurants-dev-peterm"
  process.env.AWS_REGION        = "eu-west-1"
  process.env.order_events_stream = 'orders-dev-peterm'
  process.env.restaurant_notification_topic = 'restaurants-dev-peterm'

  initialized = true
}

module.exports = {
  init
}