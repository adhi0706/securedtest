import axios from "axios";
import ScanPage from "../../AuditExpress/ScanIdPage";

// Fetch all the available scan IDs at build time
export async function getStaticPaths() {
  try {
    // Fetch all available IDs from your API
    const response = await axios.post(
      "https://139-59-5-56.nip.io:3443/getscansAE"
    );
    const ids = response.data.scans.map((item) => item.id); // Assume API response contains { ids: [1, 2, 3, ...] }

    // Generate paths for each scan ID
    const paths = ids.map((id: number) => ({
      params: { id: id.toString() }, // Pass each id as a string (required by Next.js dynamic routing)
    }));

    return {
      paths,
      fallback: "blocking", // 'blocking' means the page will wait until the data is ready before serving it
    };
  } catch (error) {
    console.error("Error fetching scan IDs:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

// Get Static Props for each ID (only passing the ID to the ScanPage component)
export async function getStaticProps({ params }: { params: { id: any } }) {
  return {
    props: {
      id: params.id, // Pass only the ID to ScanPage
    },
  };
}

// ScanDetailPage component which will simply pass the `id` to `ScanPage`
const ScanDetailPage = ({ id }: { id: any }) => {
  return <ScanPage id={id} />; // ScanPage will handle fetching its own data
};

export default ScanDetailPage;
