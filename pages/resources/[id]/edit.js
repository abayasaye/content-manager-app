import Layout from "@/pages/components/Layout";
import ResourceForm from "@/pages/components/ResourceForm";
import axios from "axios";

const resourceEdit = ({ resource }) => {
  const updateResource = (formData) => {
    axios
      .patch("/api/resources", formData)
      .then((_) => alert("data updated"))
      .catch((err) => alert(err?.response?.data));
  };
  return (
    <Layout>
      <ResourceForm initialData={resource} onFormSubmit={updateResource} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await dataRes.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default resourceEdit;
