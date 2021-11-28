import { NavBar, SignBoard, About, Projects } from "../components";
export default function Home(props) {
  return (
    <>
      <div className="container_all">
        <NavBar options={props.NavBarOptions} />
        <SignBoard links={props.links} lettersOptions={props.LettersOptions} />
        <About options={props.About} />
        <Projects />
      </div>
    </>
  );
}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const getEnv = (route) => {
    return process.env.NODE_ENV === "production"
      ? "https://words-aas.vercel.app/db/"
      : `http://localhost:3001/api/${route}`;
  };
  const urls = [
    getEnv("Links"),
    getEnv("LettersOptions"),
    getEnv("NavBar"),
    getEnv("About"),
  ];
  try {
    let res = await Promise.all(urls.map((e) => fetch(e)));
    let [links, LettersOptions, NavBarOptions, About] = await Promise.all(
      res.map((e) => e.json())
    );

    return {
      props: {
        links: links,
        LettersOptions: LettersOptions,
        NavBarOptions: NavBarOptions,
        About: About,
      },
      
    };
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
};
