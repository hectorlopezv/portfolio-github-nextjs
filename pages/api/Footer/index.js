export default function footer(req, res) {
  const options = {
    title: "Hector Vinicio Lopez Molinares",
    experience:
      "Full-Stack Developer From Colombia with 1+ year of experience",
    links: [
      { url: "https://twitter.com/CurlyGalactic", name: "twitter" },
      { url: "https://www.linkedin.com/in/hvmlopez", name: "linkedin" },
      { url: "https://github.com/hectorlopezv", name: "github" },
    ],
  };
  res.status(200).json(options);
}
