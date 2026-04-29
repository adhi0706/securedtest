"use client";

import Link from "next/link";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import { authorsData } from "./authors.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import MetaTags from "../../components/common/MetaTags";

const AuthorProfile = () => {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  const router = useRouter();

  const { url } = router.query;

  const [authorDetail, setAuthorDetail] = useState(
    authorsData.filter((author) => author.to === router.asPath.split("/")[1])[0]
  );

  useEffect(() => {
    const filterAuthor = authorsData.filter((author) => author.to === url);

    setAuthorDetail(filterAuthor[0]);
  }, [authorDetail, url]);

  return (
    <div className="author-profile-container">
      {authorDetail && (
        <MetaTags
          data={{
            title: authorDetail.name + " : SecureDapp Author",
            desc: authorDetail.details[0].info,
            image: authorDetail.image,
          }}
        />
      )}
      <Navbar />
      <div className="author-profile">
        {authorDetail && (
          <div className="author-profile-body">
            <div className="author-profile-body-image">
              <div className="author-profile-card">
                <div className="author-profile-card-image">
                  <img
                    layout="intrinsic"
                    src={authorDetail.image}
                    alt={authorDetail.name}
                  />
                </div>
                <div className="author-profile-card-name">
                  {authorDetail.name}
                </div>
                <div className="author-profile-card-details">
                  <div className="">{authorDetail.designation}</div>
                  <div className="">{authorDetail.education}</div>
                </div>
                <div className="author-profile-card-socials">
                  <div className="author-profile-card-social">
                    {authorDetail.twitter && (
                      <Link target="_blank" href={authorDetail.twitter}>
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    )}
                  </div>
                  <div className="author-profile-card-social">
                    {authorDetail.linkedin && (
                      <Link target="_blank" href={authorDetail.linkedin}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="author-profile-body-detail">
              {authorDetail.details.map((detail) => {
                return (
                  <div className="author-profile-detail-row">
                    <div className="author-profile-detail-row-header">
                      {detail.title}
                    </div>
                    <div className="author-profile-detail-row-info">
                      {detail.info}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {authorDetail && (
          <div className="author-profile-footer">
            <div className="author-profile-footer-header">{`Expert Services Handled by ${authorDetail.name}`}</div>
            <div className="author-profile-footer-links">
              {authorDetail.expertServices.map((service) => {
                return (
                  <div className="author-profile-footer-link">
                    <Link href={service.to}>
                      <FontAwesomeIcon icon={faArrowRight} />
                      {service.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AuthorProfile;
