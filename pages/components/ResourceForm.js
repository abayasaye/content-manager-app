import { useState } from "react";
import Layout from "./Layout";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};
const ResourceForm = ({ onFormSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const cancelHandler = () => setForm(DEFAULT_DATA);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = () => {
    onFormSubmit(form);
  };

  return (
    <div className="container m-6 p-6">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="resource-form">
            <h1 className="title"> Add new resources</h1>
            <form className="">
              <div className="field">
                <label className="label">title</label>
                <div className="control">
                  <input
                    name="title"
                    onChange={handleChanges}
                    className=" input "
                    type="text"
                    value={form.title}
                    placeholder="Learn Next JS and Sanity IO"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">link</label>
                <div className="control">
                  <input
                    name="link"
                    onChange={handleChanges}
                    value={form.link}
                    className=" input "
                    type="text"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Priotity</label>
                <div className="control">
                  <div className="select">
                    <select
                      name="priority"
                      onChange={handleChanges}
                      value={form.priority}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">timeToFinish</label>
                <div className="control">
                  <input
                    name="timeToFinish"
                    onChange={handleChanges}
                    className=" input "
                    type="number"
                    value={form.timeToFinish}
                    placeholder="60"
                  />
                </div>
                <p className="help">Time is in minutes</p>
              </div>
              <div className="field">
                <label className="label">description</label>
                <div className="control">
                  <textarea
                    name="description"
                    onChange={handleChanges}
                    value={form.description}
                    className="textarea"
                    placeholder="Learn these technologies because they are popular"
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button
                    onClick={submitHandler}
                    type="button"
                    className="button is-link"
                  >
                    Submit
                  </button>
                </div>
                <div className="control">
                  <button
                    type="button"
                    onClick={cancelHandler}
                    className="button is-link is-light"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceForm;
