let options = {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: '{"client_id":"6AbwyFS2U3G6YaTP6UIpHkUxXAhATVzm","client_secret":"JlJ1Ivh5iL0G96N20EN9WBI6GTYDYnAQx5g_rzy2OwWkoZ--8qSYxTUhN5ALdQn9","audience":"blog-post","grant_type":"client_credentials"}',
};

export async function getAccessTokenSilently() {
  try {
    let response = await fetch(
      "https://dev-42ekabuyre2sq5ha.us.auth0.com/oauth/token",
      options
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
