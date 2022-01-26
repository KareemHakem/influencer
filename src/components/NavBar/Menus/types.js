export const types = {
  Admin: "Admin",
  Influencer: "Influencer",
  User: "User",
};

export const userTypes = (currentUser) =>
  currentUser.isAdmin
    ? types.Admin
    : currentUser.isInfluencer
    ? types.Influencer
    : types.User;
