import axios from "axios";
import ScanPage from "../../AuditExpress/ScanIdPage";

// Fetch all the available scan IDs at build time
export async function getStaticPaths() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE || "https://139-59-5-56.nip.io:3443";
  try {
    // Fetch all available IDs from your API
    const response = await axios.post(
      `${apiUrl}/getscansAE`,
      {},
      { timeout: 5000 } // Add a 5-second timeout
    );
    const ids = response.data.scans.map((item: any) => item.id);

    // Generate paths for each scan ID
    const paths = ids.map((id: number) => ({
      params: { id: id.toString() },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error fetching scan IDs during build:", error);
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
