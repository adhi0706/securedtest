"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import BlogCard from "../../components/blog/BlogCard";
import SectionTitle from "../../components/common/SectionTitle";
import { mediaData } from "./media-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import MetaTags from "../../components/common/MetaTags";

function Media() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  const [blogs, setBlogs] = useState(mediaData);
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTags] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  // Determine the total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (typeof window !== "undefined") {
      typeof window !== "undefined" && window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="blog-container">
      <MetaTags
        data={{
          title: "SecureDApp in the Media: Web3 and Blockchain Coverage",
          desc: "Explore SecureDApp's media coverage on Web3, blockchain, and security. Read interviews and articles featuring our insights on the evolving digital space.",
          keywords:
            "SecureDApp media, Web3 coverage, blockchain security, blockchain interviews, Web3 insights, blockchain news, SecureDApp articles, digital security trends",
          image: "/assets/images/media/cryptotimes1.png",
        }}
      />
      <Navbar />
      <div className="blog">
        <SectionTitle
          title="Media Coverages"
          description="Places we were interviewed"
        />
        <div className="blog-cards">
          {currentItems.map((item) => (
            <BlogCard key={item.id} details={item} isMedia={true} />
          ))}
        </div>
        <div className="blog-pagination">
          <div className="blog-pagniation-arrow-container">
            <button
              className="blog-pagination-arrow"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
          <div className="blog-pagination-number">{currentPage}</div>
          <div className="blog-pagniation-arrow-container">
            <button
              className="blog-pagination-arrow"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;
