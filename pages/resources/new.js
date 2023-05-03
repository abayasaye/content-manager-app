import Layout from "../components/Layout";

const ResourceCreate = () => {
  return (
    <Layout>
      <div className="container mt-6">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title"> Add new resources</h1>
              <form className="p-6">
                <div class="field">
                  <label className="label">title</label>
                  <div className="control">
                    <input
                      className=" input "
                      type="text"
                      placeholder="Learn Next JS and Sanity IO"
                    />
                  </div>
                </div>
                <div class="field">
                  <label className="label">description</label>
                  <div className="control">
                    <input
                      className=" input "
                      type="text"
                      placeholder="Learn these technologies because they are popular"
                    />
                  </div>
                </div>
                <div class="field">
                  <label className="label">link</label>
                  <div className="control">
                    <input
                      className=" input "
                      type="text"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Priotity</label>
                  <div class="control">
                    <div class="select">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label className="label">timeToFinish</label>
                  <div className="control">
                    <input
                      className=" input "
                      type="text"
                      placeholder="60 (time is in minutes)"
                    />
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
