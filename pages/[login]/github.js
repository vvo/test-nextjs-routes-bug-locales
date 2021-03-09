import { useRouter } from "next/router";

export default function GitHubPage() {
  const router = useRouter();
  const { login } = router.query;

  console.log(login, router.isFallback);

  return <div>Coucou</div>;
}

export async function getStaticProps(context) {
  return {props: {}}
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { login: "vvo" } }],
    fallback: true,
  };
}