import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import ResourceHighlight from "./components/ResourceHighlight";
import ResourceList from "./components/ResourceList";

export default function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();
  return {
    props: {
      resources: data,
    },
  };
}
