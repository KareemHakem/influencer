import { Icons } from "../Icons/index";

const styles = {
  InstagramIcon: {
    color: "#fff ",
    fontSize: 30,
    padding: 5,
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    borderRadius: "52%",
  },
  FacebookIcon: {
    color: "#fff",
    fontSize: 30,
    padding: 4,
    background: "#4267B2",
    borderRadius: "50%",
    border: "2px solid #4267B2",
  },
  YouTubeIcon: {
    color: "#fff",
    fontSize: 30,
    padding: 4,
    borderRadius: "50%",
    background: "#FF0000",
    border: "2px solid #FF0000",
  },
};

export const IconsChip = [
  {
    key: 1,
    icons: <Icons.InstagramIcon style={styles.InstagramIcon} />,
    name: "instInstagram",
  },
  {
    key: 2,
    icons: <Icons.FacebookIcon style={styles.FacebookIcon} />,
    name: "facebook",
  },
  {
    key: 3,
    icons: <Icons.YouTubeIcon style={styles.YouTubeIcon} />,
    name: "YouTube",
  },
];
