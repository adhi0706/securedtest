import Link from "next/link";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import MetaTags from "../../components/common/MetaTags";
import { authorsData } from "../../pageComponents/authors/authors.data";

export default function AuthorProfile({ authorDetail }) {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  const router = useRouter();

  const { to } = router.query;

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
                  {authorDetail.twitter && (
                    <div className="author-profile-card-social">
                      <Link target="_blank" href={authorDetail.twitter}>
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </div>
                  )}
                  {authorDetail.linkedin && (
                    <div className="author-profile-card-social">
                      <Link target="_blank" href={authorDetail.linkedin}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </div>
                  )}
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
}

// 1. Define `getStaticPaths` to pre-render dynamic blog URLs
export async function getStaticPaths() {
  var data = authorsData;
  const paths = data.map((profile) => ({
    params: { url: profile.to },
  }));

  return {
    paths, // Pre-rendered blog URLs
    fallback: false, // Enable fallback for other URLs
  };
}

// 2. Define `getStaticProps` to fetch blog data for each page
export async function getStaticProps({ params }) {
  var data = authorsData;
  const authorDetail = data.find((profile) => profile.to === params.url);

  if (!authorDetail) {
    return {
      notFound: true, // Return 404 if blog not found
    };
  }

  return {
    props: {
      authorDetail,
    },
  };
}
