import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/quantumvault.tech/enterprise-hsm-key-management");
  }, [router]);

  return null;
}
