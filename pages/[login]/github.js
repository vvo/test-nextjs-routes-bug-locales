import { useRouter } from "next/router";

export default function GitHubPage() {
  const router = useRouter();
  const { login } = router.query;

  console.log(login);

  return <div>Coucou</div>;
}