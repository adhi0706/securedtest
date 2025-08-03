import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import SectionTitle from "../components/common/SectionTitle";
import MetaTags from "../components/common/MetaTags";
import WhitePaperCard from "../components/whitepaper/WhitePaperCard";

const whitePaperData = [
	{
		id: 1,
		heading: "Blockchain For Healthcare In The Context Of India's DPDP Act",
		subHeading:
			"SecureWatch: Securing Patient Privacy And Data Integrity Through Blockchain",
		pdfUrl: "/assets/whitepaper/DPDP ACT_Heathcare_SecureWatch_ WP.pdf",
		image: "/assets/whitepaper/healthcare-dpdp.png",
		tags: "blockchain, healthcare",
	},
	{
		id: 2,
		heading: "Technical Architecture Whitepaper",
		subHeading:
			"Comprehensive Overview of SecuredApp's Technical Infrastructure",
		pdfUrl: "/assets/whitepaper/technical_architecture.pdf",
		image: "/assets/whitepaper/technical-arch.png",
		tags: "blockchain, web3",
	},
];

const allowedTags = ["all", "blockchain", "healthcare", "web3"];

function WhitePaper() {
	const [selectedTag, setSelectedTag] = useState("all");

	// Tag filter logic
	let filteredData = whitePaperData;
	if (selectedTag !== "all") {
		filteredData = filteredData.filter((item) =>
			item.tags.toLowerCase().includes(selectedTag.toLowerCase())
		);
	}

	return (
		<div className="blog-container">
			<MetaTags
				data={{
					title: "SecuredApp White Papers",
					desc: "Download our comprehensive whitepapers about blockchain security and technical architecture.",
					keywords:
						"SecuredApp, white paper, blockchain, security, DPDP Act, technical architecture",
					image: "/assets/whitepaper/healthcare-dpdp.png",
				}}
			/>
			<Navbar />
			<div className="blog">
				<SectionTitle
					title="White Papers"
					description="Download our comprehensive research and technical documentation"
				/>
				<div
					className="blog-search-tags-container"
					style={{ marginBottom: "2rem" }}
				>
					<div
						className="text-xl font-bold"
						style={{ marginBottom: "0.5rem" }}
					>
						Search via tags
					</div>
					<div
						className="blog-search-tags"
						style={{
							display: "flex",
							gap: "0.5rem",
							flexWrap: "wrap",
						}}
					>
						{allowedTags.map((tag) => (
							<span
								key={tag}
								style={{
									fontSize: "0.95rem",
									padding: "0.4rem 1rem",
									minWidth: "60px",
									backgroundColor:
										selectedTag === tag ? "#10B981" : "#374151",
									color: "#fff",
									borderRadius: "1rem",
									cursor: "pointer",
									fontWeight:
										selectedTag === tag ? "bold" : "normal",
									border:
										selectedTag === tag
											? "2px solid #10B981"
											: "none",
								}}
								onClick={() => setSelectedTag(tag)}
							>
								{tag.charAt(0).toUpperCase() + tag.slice(1)}
							</span>
						))}
					</div>
				</div>
				<div
					className="blog-cards"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "2rem",
						justifyContent: "center",
						padding: "0 1rem",
						maxWidth: "1200px",
						margin: "0 auto",
					}}
				>
					{filteredData.map((item) => (
						<WhitePaperCard
							key={item.id}
							details={item}
							imageStyle={{
								height: "180px",
								width: "100%",
								objectFit: "cover",
								borderRadius: "0.75rem",
							}}
							style={{ minHeight: "420px", minWidth: "0" }}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default WhitePaper;