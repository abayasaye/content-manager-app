import Layout from "@/pages/components/Layout";
import axios from "axios";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const ResourceDetails = ({ resource }) => {
  const ActiveResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "active" })
      .then((_) => alert("resource has been activated"))
      .catch((_) => alert("cannot active the resource"));
  };

  const router = useRouter();

  if (router.isFallback) {
    return <div className="is-loading">loading data</div>;
  }

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} min</p>
                    <Link
                      className="button is-warning"
                      href={`/resources/${resource.id}/edit`}
                    >
                      Update
                    </Link>
                    <button
                      onClick={ActiveResource}
                      className="button is-success ml-1"
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await dataRes.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetails;
