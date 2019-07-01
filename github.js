class Github {
  constructor() {
    this.client_id = "5dc6d88afb0ef1920bc3";
    this.client_secret = "7495c5cb18557c9421ee13dc0e46ed0ea8b649aa";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return {
      profile
    };
  }
}
