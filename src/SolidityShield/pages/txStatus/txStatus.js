import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import AuthButton from "../../components/auth/AuthButton";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";
import { checkPhonpe } from "../../functions";

const TxStatus = () => {
  const router = useRouter();
  const [status, setStatus] = useState();

  let url;
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
    url = window.location.href;
  }
  var id = url && url.split("?id=")[1];

  useEffect(() => {
    async function fetch() {
      const data = await checkPhonpe({ id });
      data.success ? setStatus(true) : setStatus(false);
    }
    fetch();
  }, [!status && status]);

  return (
    <div className="auth-screen-container">
      <div className="auth-screen">
        <div style={{ width: "100%", fontSize: "20px", textAlign: "center" }}>
          {"Transaction of Id: " + id}
        </div>
        <br />
        <br />
        <AuthButton children={`Status : ${status ? "Success" : "Pending"}`} />
      </div>
    </div>
  );
};

export default TxStatus;
