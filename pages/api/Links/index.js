export default function links(req, res) {
  const Links = [
    { url: "https://twitter.com/CurlyGalactic", name: "twitter" },
    { url: "https://www.linkedin.com/in/hvmlopez", name: "linkedin" },
    { url: "https://github.com/hectorlopezv", name: "github" },
  ];
  res.status(200).json(Links);
}
