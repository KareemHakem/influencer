export const types = {
  Admin: "Admin",
  Influencer: "Influencer",
  User: "User",
  AdminAndInfluencer: "AdminAndInfluencer",
};

export const userTypes = (currentUser) =>
  currentUser?.isInfluencer
    ? types.Influencer
    : currentUser?.isInfluencer && currentUser?.isAdmin
    ? types.AdminAndInfluencer
    : currentUser?.isAdmin
    ? types.isAdmin
    : types.User;
