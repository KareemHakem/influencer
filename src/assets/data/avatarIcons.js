import { Icons } from "../Icons/index";

// #833AB4  #FD1D1D #FCB045

export const IconsChip = [
  {
    key: 1,
    icons: (
      <Icons.InstagramIcon
        style={{
          color: "#fff ",
          fontSize: 42,
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          borderRadius: "52%",
          //           border:
          //             "2px solid radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%  ",
        }}
      />
    ),
    name: "instInstagram",
  },
  {
    key: 2,
    icons: (
      <Icons.FacebookIcon
        style={{
          color: "#fff",
          fontSize: 40,
          background: "#4267B2",
          borderRadius: "52%",
          border: "2px solid #4267B2",
        }}
      />
    ),
    name: "facebook",
  },
  {
    key: 3,
    icons: (
      <Icons.YouTubeIcon
        style={{
          color: "#fff",
          fontSize: 40,
          borderRadius: "50%",
          background: "#FF0000",
          border: "2px solid #FF0000",
        }}
      />
    ),
    name: "YouTube",
  },
];
